const englishAlphabet = "abcdefghijklmnopqrstuvwxyz".split('')

const getCipherMap = (alphabet, shift) => {
    return alphabet.
        reduce((charsMap, currentChar, charIndex) => {
            const charsMapClone = { ...charsMap }

            let encryptedCharIndex = (charIndex + shift) % alphabet.length

            if(encryptedCharIndex < 0){
                encryptedCharIndex += alphabet.length
            }

            charsMapClone[currentChar] = alphabet[encryptedCharIndex]
            return charsMapClone
        }, {})
}

const encrypt = (str, shift, alphabet = englishAlphabet) => {
    const cipherMap = getCipherMap(alphabet, shift)

    return str.toLowerCase(). split('').map(char => cipherMap[char] || char).join('')
}

const decrypt = (str, shift, alphabet = englishAlphabet) => {
    const cipherMap = getCipherMap(alphabet, -shift)

    return str.toLowerCase(). split('').map(char => cipherMap[char] || char).join('')
}

const str = "Hola Mundo"
const enc = encrypt(str, 2)
const dec = decrypt(enc, 2)