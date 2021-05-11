const nightClubRegister = [
    {
        name: 'Tony',
        lastname: 'Stark',
        age: 25,
        gender: 'male'
    },
    {
        name: 'Harry',
        lastname: 'Potter',
        age: 16,
        gender: 'male'
    },
    {
        name: 'Hermione',
        lastname: 'Granger',
        age: 17,
        gender: 'female'
    },
    {
        name: 'Steve',
        lastname: 'Rogers',
        age: 62,
        gender: 'male'
    }
]


let x;
for (x=0; x < nightClubRegister.length; x++) {

if (nightClubRegister[x].age  >= 18) {

  if (nightClubRegister[x].gender == 'male') {
                console.log(`Welcome Mister ${nightClubRegister[x].name} ${nightClubRegister[x].lastname}. Please enjoy your evening.`);   
        } else {
          console.log(`Welcome Miss ${nightClubRegister[x].name} ${nightClubRegister[x].lastname}. Please enjoy your evening.`)
        }
    }

        else {
            if (nightClubRegister[x].gender == 'male') {
                console.log(`You are not allowed Mister ${nightClubRegister[x].name} ${nightClubRegister[x].lastname}. Please come back on your 18th birthday.`);
            }   else {
                console.log(`You are not allowed Miss ${nightClubRegister[x].name} ${nightClubRegister[x].lastname}. Please come back on your 18th birthday.`)
                }
        }
}