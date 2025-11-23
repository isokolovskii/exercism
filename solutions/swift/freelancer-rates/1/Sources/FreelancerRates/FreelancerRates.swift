func dailyRateFrom(hourlyRate: Int) -> Double {
    return Double(hourlyRate) * 8.0
}

func monthlyRateFrom(hourlyRate: Int, withDiscount discount: Double) -> Double {
    let rate: Double = dailyRateFrom(hourlyRate: hourlyRate) * 22.0 * ((100.0 - discount) / 100.0)
    return rate.rounded()
}

func workdaysIn(budget: Double, hourlyRate: Int, withDiscount discount: Double) -> Double {
    let workdays: Double = budget / monthlyRateFrom(hourlyRate: hourlyRate, withDiscount: discount) * 22.0
    return workdays.rounded(.down)
}
