function asciiAUtf8(caracter) {
    let codigoAscii = caracter.charCodeAt(0);
    let utf8Hex = codigoAscii.toString(16);
    return utf8Hex;
}

console.log(asciiAUtf8("A"))
console.log(asciiAUtf8("B"))
console.log(asciiAUtf8("C"))
console.log(asciiAUtf8("D"))