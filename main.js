let nome = prompt(`il tuo nome`)
let cognome = prompt(`il tuo cognome`)
let colorePreferito = prompt(`il tuo colore preferito`)

console.log(nome)
console.log(cognome)
console.log(colorePreferito)

const numero = `24`

console.log(numero)

document.getElementById(`idPassword`).innerHTML = `la tua password insicurissima è: ${nome + cognome + colorePreferito + numero}`