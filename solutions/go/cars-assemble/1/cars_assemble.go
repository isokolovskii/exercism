package cars

// CalculateWorkingCarsPerHour calculates how many working cars are
// produced by the assembly line every hour.
func CalculateWorkingCarsPerHour(productionRate int, successRate float64) float64 {
	return float64(productionRate) / 100.0 * successRate
}

// CalculateWorkingCarsPerMinute calculates how many working cars are
// produced by the assembly line every minute.
func CalculateWorkingCarsPerMinute(productionRate int, successRate float64) int {
	var carsProducedPerHour = CalculateWorkingCarsPerHour(productionRate, successRate)
	return int(carsProducedPerHour) / 60
}

// CalculateCost works out the cost of producing the given number of cars.
func CalculateCost(carsCount int) uint {
	var groupedCarsCount = carsCount / 10
	var remainingIndividualCarsCount = carsCount % 10

	return uint(groupedCarsCount*95_000 + remainingIndividualCarsCount*10_000)
}
