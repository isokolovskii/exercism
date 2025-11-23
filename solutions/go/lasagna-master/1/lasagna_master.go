package lasagna

func PreparationTime(layers []string, averagePreparationTimePerLayer int) int {
	if averagePreparationTimePerLayer == 0 {
		averagePreparationTimePerLayer = 2
	}

	return len(layers) * averagePreparationTimePerLayer
}

func Quantities(layers []string) (noodles int, sauce float64) {
	for i := 0; i < len(layers); i++ {
		switch layers[i] {
		case "sauce":
			sauce += .2
			break
		case "noodles":
			noodles += 50
			break
		}
	}
	return
}

func AddSecretIngredient(friendsList []string, myList []string) {
	var secretIngredient = friendsList[len(friendsList)-1]
	myList[len(myList)-1] = secretIngredient
}

func ScaleRecipe(quantities []float64, newPortions int) []float64 {
	var scale = float64(newPortions) / 2

	var scaledQuantities = make([]float64, len(quantities))
	for i := 0; i < len(quantities); i++ {
		scaledQuantities[i] = quantities[i] * scale
	}
	return scaledQuantities
}

// Your first steps could be to read through the tasks, and create
// these functions with their correct parameter lists and return types.
// The function body only needs to contain `panic("")`.
//
// This will make the tests compile, but they will fail.
// You can then implement the function logic one by one and see
// an increasing number of tests passing as you implement more
// functionality.
