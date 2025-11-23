package chessboard

type File []bool

type Chessboard map[string]File

// CountInFile returns how many squares are occupied in the chessboard,
// within the given file.
func CountInFile(cb Chessboard, file string) int {
	squaresInFile, exists := cb[file]
	if !exists {
		return 0
	}

	res := 0
	for _, square := range squaresInFile {
		if square {
			res++
		}
	}
	return res
}

// CountInRank returns how many squares are occupied in the chessboard,
// within the given rank.
func CountInRank(cb Chessboard, rank int) int {
	if rank < 1 || rank > 8 {
		return 0
	}

	res := 0

	for _, file := range cb {
		if file[rank-1] {
			res++
		}
	}
	return res
}

// CountAll should count how many squares are present in the chessboard.
func CountAll(cb Chessboard) int {
	res := 0
	for _, file := range cb {
		res += len(file)
	}
	return res
}

// CountOccupied returns how many squares are occupied in the chessboard.
func CountOccupied(cb Chessboard) int {
	res := 0
	for _, file := range cb {
		for _, square := range file {
			if square {
				res += 1
			}
		}
	}
	return res
}
