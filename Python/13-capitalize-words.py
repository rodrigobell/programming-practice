def capitalize_words(str):
    words = str.split(" ")

    for i in range(0, len(words)):
        words[i] = words[i].capitalize()

    return " ".join(words)

print(capitalize_words("mike bloomfield"))