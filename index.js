let who = ["My dog", "My Cat", "My T-rex", "My pope"]
let action = [" Explode", " burned", " ate", " Broked"]
let what = [" my shorts", " my food", " my homework", " my hair"]
let when = [" yesterday", " this morning", " this noon"]
const excuse1 = Math.floor(Math.random() * who.length)
const excuse2 = Math.floor(Math.random() * action.length)
const excuse3 = Math.floor(Math.random() * what.length)
const excuse4 = Math.floor(Math.random() * when.length)
console.log(who[excuse1] + action[excuse2] + what[excuse3] + when[excuse4])