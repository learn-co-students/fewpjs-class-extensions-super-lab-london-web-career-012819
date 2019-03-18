// Write your classes here

class Tree {
    constructor(species) {
        this._species = species
    }

    static baseDefinition() {
        return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. "
    }
    get species() {
        return this._species
    }
}

class Deciduous extends Tree {

    constructor(species, name) {
        super(species)
        this._name = name
    }

    static definition() {
        return super.baseDefinition() + "Deciduous trees shed their leaves annually."
    }
}

class Evergreen extends Tree {
    constructor(species, name) {
        super(species)
        this._name = name
    }

    static definition() {
        return super.baseDefinition() + "Evergreens keep their leaves all year round."
    }
}