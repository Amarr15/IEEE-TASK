/*start-Practical-task-1*/
const user = {
    name: "Ashraf Ben Sharqy",
    age: 29,
    teams: ["Wydad", "Al Hilal", "Zamalek", "Al Gazira", "Al-Rayyan"],
    nationalTeam: {
        name: "Morroco",
        best: {
            africanCupOfNations: ["Champion", 2018],
            worldCup: ["4th", 2022],
        }
    }
}

const { teams, nationalTeam: { best: { worldCup } } } = user;
const [ , , zamalek ] = teams, [ fourth ] = worldCup;
/*end-Practical-task-1*/


/*start-Practical-task-2*/
{
    name: "Samir Kamona",
    club: "Al Ahly",
    score: 25
}
const fantasyPlayer = { ...player, score: 50, position: "ST" };
/*end-Practical-task-2*/


/*start-Practical-task-3*/
function filterHands(arr) {
    return arr.filter(item => /^hand.*(s|y|le)$/i.test(item));
}
const input = ['handOn', 'hands', 'hanDLes', 'Handcuffs', 'handmade', 'in-hands', 'HANDINGLY'];
const output = filterHands(input);
console.log(output);
/*end-Practical-task-3*/

