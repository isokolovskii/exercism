package collatzconjecture

import "fmt"

func CollatzConjecture(n int) (int, error) {
	if n < 1 {
        return 0, fmt.Errorf("impossible to reach 1 with initial number %d", n)
    }

	steps := 0
    
    for {
		if n == 1 {
            return steps, nil
        }

        steps += 1
        if n % 2 == 0 {
            n = n / 2
        } else {
            n = n * 3 + 1
        }
    }
}
