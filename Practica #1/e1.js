function palabra(texto) {
  const voc = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  texto = texto.toLowerCase();
  
  for (let letra of texto) {
    if (voc[letra] !== undefined) {
      voc[letra]++;
    }
  }
  return voc;
}

let obj =palabra("euforia");
console.log(obj);
