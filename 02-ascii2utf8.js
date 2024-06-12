function asciiAUtf8(caracter) {
    let codigoAscii = caracter.charCodeAt(0);
    let utf8Hex = codigoAscii.toString(16);
    return utf8Hex;
}