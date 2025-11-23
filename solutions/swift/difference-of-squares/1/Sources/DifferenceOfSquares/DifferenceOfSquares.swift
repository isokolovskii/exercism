struct Squares {
    var N: Int
    
    func sumForRange(_ range: ClosedRange<Int>) -> Int {
        var sum = 0
        for i in range {
            sum += i
        }
        return sum
    }

    var squareOfSum: Int {
        let sum = sumForRange(1...N)
        return sum * sum
    }

    var sumOfSquares: Int {
        var sum = 0
        for i in 1...N {
            sum += i * i
        }
        return sum
    }

    var differenceOfSquares: Int {
        return squareOfSum - sumOfSquares
    }

    init(_ N: Int) {
        self.N = N
    }
}




