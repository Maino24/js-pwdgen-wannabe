let name = prompt(`inserisci il tuo nome`)
let surname = prompt(`inserisci il tuo cognome`)
let color = prompt(`inserisci il tuo colore preferito`)

console.log(name)
console.log(surname)
console.log(color)

const number = `24`

console.log(number)

document.getElementById(`idPassword`).innerHTML = `la tua password insicurissima è: ${name + surname + color + number}`