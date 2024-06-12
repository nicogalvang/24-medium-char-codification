let encoder = new TextEncoder();
let decoder = new TextDecoder("utf-8");

let textoOriginal = "¡Hola Mundo!";
let textoCodificado = encoder.encode(textoOriginal);
let textoDecodificado = decoder.decode(textoCodificado);

console.log(textoCodificado);  // Uint8Array con los bytes codificados
console.log(textoDecodificado); // "¡Hola Mundo!"