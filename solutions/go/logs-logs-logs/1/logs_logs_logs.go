package logs

import (
	"strings"
	"unicode/utf8"
)

// Application identifies the application emitting the given log.
func Application(log string) string {
	applications := make(map[string]rune)
	applications["recommendation"] = '❗'
	applications["search"] = '🔍'
	applications["weather"] = '☀'

	position := utf8.RuneCountInString(log) + 1
	appName := "default"
	for app, icon := range applications {
		if strings.ContainsRune(log, icon) {
			iconPosition := strings.IndexRune(log, icon)
			if iconPosition < position {
				position = iconPosition
				appName = app
			}
		}
	}
	return appName
}

// Replace replaces all occurrences of old with new, returning the modified log
// to the caller.
func Replace(log string, oldRune, newRune rune) string {
	result := ""
	for _, char := range log {
		if char == oldRune {
			result += string(newRune)
		} else {
			result += string(char)
		}
	}
	return result
}

// WithinLimit determines whether or not the number of characters in log is
// within the limit.
func WithinLimit(log string, limit int) bool {
	return utf8.RuneCountInString(log) <= limit
}
