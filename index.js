/* 
    Make a deck
        Make 52 cards, props:
            - face
            - value
            - suit

            create card object
        
    Split the cards among 2 players

    Add a game object
        -- players
        
*/

class Player {
    constructor(name) {
        this.hand = []
        this.name = name;
    }
}

class Card {
    constructor(face,value,suit) {
        this.face = face;
        this.value = value;
        this.suit = suit;
    }
}

class Game {
    constructor() {
        this.deck = [];
        this.players = [];
        this.makeDeck();
        this.makePlayers();
        this.startGame();
    }


    makeDeck() {
        let faces = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
        let suits = ['❤️','💎','🗡️','🍀']
        
        
        for (let x = 0; x < faces.length; x++) {
            for (let suit of suits) {
                let card = new Card(faces[x],x + 1,suit)
                this.deck.push(card);
            }
        }
        
        for (var i = this.deck.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
    }

    makePlayers() {
        //have 2 variables to make 2 players;

        let players = ['Marshall', 'Mark Anthony']

        for (let x = 0; x < players.length; x++) {
            let player = new Player(players[x]);
            player.hand = this.deck.splice(0,26)
            this.players.push(player);
        }

        
    }

    startGame() {

        //we need to iterate through the hands
        let count = this.players[0].hand.length;
        for (let x = 0; x < count; x++) {
            let p1Card = this.players[0].hand[x];
            let p2Card = this.players[1].hand[x];
            console.log(`Player 1 has a ${p1Card.face} of ${p1Card.suit}`);
            console.log(`Player 2 has a ${p2Card.face} of ${p2Card.suit}`);            
        }

    }
}

let war = new Game();


let getIsAwesome = true;