let who = ["My dog", "My Cat", "My T-rex", "The pope"]
let action = [" Explode", " burned", " ate", " Broke"]
let what = [" my shorts", " my food", " my homework", " my hair"]
let when = [" yesterday", " this morning", " this noon"]
const randomnize = () => {
    let who1 = Math.floor(Math.random() * (who.length-1)+1)
    let action1 = Math.floor(Math.random() * (action.length-1)+1)
    let what1 = Math.floor(Math.random() * (what.length-1)+1)
    let when1 = Math.floor(Math.random() * (when.length-1)+1)
    return who[who1]+action[action1]+what[what1]+when[when1]

}
console.log(randomnize())

//console.log(who[excuse1] + action[excuse2] + what[excuse3] + when[excuse4])