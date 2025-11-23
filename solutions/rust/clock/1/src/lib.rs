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
        Clock { hours, minutes }
    }

    pub fn add_minutes(&self, minutes: i32) -> Self {
        let total_minutes = self.minutes + minutes;
        let result_minutes = Self::calculate_time_wrap(total_minutes, MINUTES_IN_HOUR);

        let hours_in_minutes = total_minutes / MINUTES_IN_HOUR;
        let total_hours = self.hours + hours_in_minutes;
        let result_hours = Self::calculate_time_wrap(total_hours, HOURS_IN_DAY);

        Clock::new(result_hours, result_minutes)
    }

    fn calculate_time_wrap(time_value: i32, wrap_value: i32) -> i32 {
        let is_time_under_zero = time_value < 0;
        let time_abs_module = time_value.abs() % wrap_value;
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
