def longest_word(sentence):
    words = sentence.split(" ")
    longest_idx = 0

    for i in range(1, len(words)):
        if len(words[i]) > len(words[longest_idx]):
            longest_idx = i

    return words[longest_idx]

print(longest_word("abc def abucee"))