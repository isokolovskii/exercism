struct Squares {
    var squareOfSum: Int = 0
    var sumOfSquares: Int = 0
    var differenceOfSquares: Int = 0

    var N: Int {
        didSet {
            calculate()
        }
    }
    
    private func sumForRange(_ range: ClosedRange<Int>) -> Int {
        var sum = 0
        for i in range {
            sum += i
        }
        return sum
    }
    
    private mutating func calculate() {
        let rangeSum = sumForRange(1...self.N)
        let squareOfSum = rangeSum * rangeSum
        self.squareOfSum = rangeSum * rangeSum

        var sumOfSquares = 0
        for i in 1...self.N {
            sumOfSquares += i * i
        }
        self.sumOfSquares = sumOfSquares

        differenceOfSquares = squareOfSum - sumOfSquares
    }

    init(_ N: Int) {
        self.N = N
        calculate()
    }
}