// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack() {
        return this.strength;
    }
    receiveDamage(dmg) {
        this.health -= dmg;
    }
}

// // Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name
    }

    receiveDamage(dmg) {
        super.receiveDamage(dmg)

        if (this.health <= 0) {
            return this.name + ' has died in act of combat'
        }
        else {
            return this.name + ' has received ' + dmg + ' points of damage'
        }

    }

    battleCry() {
        return 'Odin Owns You All!'
    }

}




// // Saxon
class Saxon extends Soldier {
    receiveDamage(dmg) {
        super.receiveDamage(dmg)

        if (this.health <= 0) {
            return "A Saxon has died in combat"
        }
        else {
            return "A Saxon has received " + dmg + " points of damage"
        }

    }
}

// // War
class War {
    vikingArmy = [];
    saxonArmy = [];
    addViking(Viking) {
        this.vikingArmy.push(Viking);

    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);

    }

    vikingAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random) * this.saxonArmy.length]
        let randomViking = this.vikingArmy[Math.floor(Math.random) * TouchList.vikingArmy.length]

        let oldHealth = randomSaxon.health;

        randomSaxon.health = (oldHealth - randomViking.health)

        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1);
            return `A Saxon has died in combat`
        }
    }


    saxonAttack() {

        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

        let oldHealth = randomViking.health;

        randomViking.health = (oldHealth - randomSaxon.strength);

        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomViking, 1);
        }
        return `${randomViking.name} has received ${randomSaxon.strength} points of damage`

    }

    showStatus() {
        
        if (this.saxonArmy.length == 0) {
            return `Vikings have won the war of the century!`
        } else if (this.vikingArmy.length == 0) {
            return `Saxons have fought for their lives and survived another day...`
        } else if (this.saxonArmy.length > 0 || this.vikingArmy.length > 0)
            return `Vikings and Saxons are still in the thick of battle.`
    };

}


