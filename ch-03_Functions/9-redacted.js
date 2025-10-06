function redact(str) {
    let redactedString = ''

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'f' || str[i] === 'o') {
            redactedString += 'x';
        } else {
            redactedString += str[i];
        }
    }

    return redactedString;
}
console.log(redact('Owls own feathers and fur'));

