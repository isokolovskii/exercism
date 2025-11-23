// Package weather is a simple package that provides basic
// functionality for retrieving and representing the weather
// conditions at a specific location. It provides a central
// interface for updating and retrieving weather information, which
// can be used throughout the application.
//
// It also exposes the Forecast function, which updates both the
// current location and weather conditions, and constructs a
// string representation of this information.
//
// The package uses two global variables, CurrentLocation and
// CurrentCondition, to store and manage the state of the weather
// information. These variables hold the current location and weather
// conditions, respectively.
package weather

// CurrentCondition is a variable of type string that holds the current weather condition.
var CurrentCondition string

// CurrentLocation is a global variable that stores the current location. It can be used to retrieve the current location in various functions and methods throughout the codebase.
var CurrentLocation string

// Forecast returns the current weather condition for a given city.
// The city and condition parameters represent the city name and weather condition respectively.
// The function updates the global variables CurrentLocation and CurrentCondition with the provided values.
// Finally, it returns a string containing the current weather condition of the city, following the format: "CurrentLocation - current weather condition: CurrentCondition".
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
