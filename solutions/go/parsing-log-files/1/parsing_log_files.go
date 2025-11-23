package parsinglogfiles

import (
	"regexp"
)

func IsValidLine(text string) bool {
	re := regexp.MustCompile(`^\[(TRC|DBG|INF|WRN|ERR|FTL)]`)
	return re.MatchString(text)
}

func SplitLogLine(text string) []string {
	re := regexp.MustCompile(`<[~*=-]*>`)

	return re.Split(text, -1)
}

func CountQuotedPasswords(lines []string) int {
	re := regexp.MustCompile(`(?i)"[^"]*password[^"]*"`)
	res := 0
	for _, line := range lines {
		if re.MatchString(line) {
			res++
		}
	}
	return res
}

func RemoveEndOfLineText(text string) string {
	re := regexp.MustCompile(`end-of-line(\d+)`)
	return re.ReplaceAllString(text, "")
}

func TagWithUserName(lines []string) []string {
	re := regexp.MustCompile(`User\s+\w+`)
	re2 := regexp.MustCompile(`User\s+`)

	for index, line := range lines {
		if re.MatchString(line) {
			userText := re.FindString(line)
			user := re2.ReplaceAllString(userText, "")
			lines[index] = "[USR] " + user + " " + line
		}
	}
	return lines
}
