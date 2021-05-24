class Player {
    constructor( name, sport, country ) {
        this.name = name;
        this.sport = sport;
        this.country = country;
        
    }
    print() {
        console.log( `${this.name} is a ${this.sport} player for ${this.country}` )
    }
}

class TennisPlayer extends Player {
    constructor( name, sport, age ) {
        super( name, sport );
        this.age = age;
    }
    print(gender = 'male') {
        console.log(`${this.name} is ${this.age} years of age, ${gender}, and plays ${this.sport} professionally`)
    }
}

class BasketballPlayer extends Player {
    constructor( name, sport, age ) {
        super( name, sport );
        this.age = age;
    }
    print(team = 'Lakers') {
        console.log(`${this.name} is ${this.age} years of age and plays ${this.sport} for ${team} in the NBA.`)
    }
}

const player = new Player('Lionel Messi', 'Football', 'Argentina');
player.print();

const tennisPlayer = new TennisPlayer('Rafa Nadal',  'Tennis', 34);
tennisPlayer.print();

const basketballPlayer = new BasketballPlayer('Lebron James', 'Basketball', 34);
basketballPlayer.print();