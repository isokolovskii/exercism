use std::fmt;
use std::fmt::Formatter;

const MINUTES_IN_HOUR: i32 = 60;
const HOURS_IN_DAY: i32 = 24;

#[derive(Debug, PartialEq, Eq)]
pub struct Clock {
    hours: i32,
    minutes: i32,
}

impl Clock {
    pub fn new(hours: i32, minutes: i32) -> Self {
        let result_minutes = Self::calculate_time_wrap(minutes, MINUTES_IN_HOUR);

        let hours_additiona_delta = if minutes < 0 && result_minutes != 0 { -1 } else { 0 };
        let hours_in_minutes = (minutes / MINUTES_IN_HOUR) + hours_additiona_delta;
        let total_hours = hours + hours_in_minutes;
        let result_hours = Self::calculate_time_wrap(total_hours, HOURS_IN_DAY);

        Clock { hours: result_hours, minutes: result_minutes }
    }

    pub fn add_minutes(&self, minutes: i32) -> Self {
        Clock::new(self.hours, self.minutes + minutes)
    }

    fn calculate_time_wrap(time_value: i32, wrap_value: i32) -> i32 {
        let time_module = time_value % wrap_value;
        let is_time_under_zero = time_module < 0;
        let time_abs_module = time_module.abs();
        if is_time_under_zero {
            wrap_value - time_abs_module
        } else {
            time_abs_module
        }
    }
}

impl fmt::Display for Clock {
    fn fmt(&self, f: &mut Formatter<'_>) -> fmt::Result {
        write!(f, "{:02}:{:02}", self.hours, self.minutes)
    }
}
