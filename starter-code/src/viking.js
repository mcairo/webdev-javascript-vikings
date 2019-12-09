// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack(){
        return this.strength;
    } 
    receiveDamage(dmg){
        this.health -= dmg;
    }
}

// // Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health,strength);
        this.name = name
    }

    
}

// // Saxon
class Saxon {}

// // War
class War {}
