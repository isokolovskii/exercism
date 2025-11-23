package blackjack

// ParseCard returns the integer value of a card following blackjack ruleset.
func ParseCard(card string) int {
	switch card {
	case "ace":
		return 11
	case "two":
		return 2
	case "three":
		return 3
	case "four":
		return 4
	case "five":
		return 5
	case "six":
		return 6
	case "seven":
		return 7
	case "eight":
		return 8
	case "nine":
		return 9
	case "ten", "jack", "queen", "king":
		return 10
	}
	return 0
}

// FirstTurn returns the decision for the first turn, given two cards of the
// player and one card of the dealer.
func FirstTurn(card1, card2, dealerCard string) string {
	var card1Value = ParseCard(card1)
	var card2Value = ParseCard(card2)
	var myCardsSum = card1Value + card2Value
	var dealerCardValue = ParseCard(dealerCard)

	switch {
	case myCardsSum > 21:
		return "P"
	case myCardsSum == 21:
		if dealerCardValue < 10 {
			return "W"
		}
		return "S"
	case myCardsSum >= 17:
		return "S"
	case myCardsSum >= 12 && dealerCardValue < 7:
		return "S"
	default:
		return "H"
	}
}
