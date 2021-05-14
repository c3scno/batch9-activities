var justiceLeague = [
    {name: "Superman", superpower: "Super strength"}, 
    {name: "Batman", superpower: "Super rich"},
    {name: "Wonder Woman", superpower: "Super lasso"}, 
    {name: "The Flash", superpower: "Super speed"}, 
    {name: "Green Lantern", superpower: "Super ring"}
]

for (let i = 0; i < justiceLeague.length; i++) {

        let justiceLeagueUl = document.getElementById('league')
        let justiceLeagueLi = document.createElement('li')

        justiceLeagueLi.textContent = `The superpower of ${justiceLeague[i].name} is ${justiceLeague[i].superpower}`
        justiceLeagueUl.append(justiceLeagueLi)
}