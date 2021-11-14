/*
    Property Container (контейнер свойств) - шаблон фундаментальный.
    Его функция - обеспечить, чтобы приложение, уже построенное и развернутое,
    могло динамически расширяться.

    т.е мы можем добавлять динамически новые поля в наш существующий объект
*/

class PropertyContainer {

    #propertyContainer = {};

    addProperty(propertyName = '', value = null) {
        if(this.#propertyContainer.hasOwnProperty(propertyName)) {
            throw new Error(`property ${propertyName} already exists`);
        }

        this.#propertyContainer[propertyName] = value;

        return this;
    }
    
    deleteProperty(propertyName = '') {
        delete this.#propertyContainer[propertyName];
        return this;
    }
    
    getProperty(propertyName = '') {
        return this.#propertyContainer[propertyName];
    }
    
    setProperty(propertyName = '', value = null) {
        if(!this.#propertyContainer.hasOwnProperty(propertyName)) {
            throw new Error(`property ${propertyName} not found`);
        }

        this.#propertyContainer[propertyName] = value;

        return this;
    }
}

//  use through inheritance
class UserInheritance extends PropertyContainer {
    #name = 'Anonimus';

    /**
     * @param  {string} name=''
     */
    constructor(name = '') {
        this.#name = name;
    }

    /**
     * @param  {} name=''
     */
    set name(name = '') {
        this.#name = name;
    }

    /**
     * @returns {string}
     */
    get name() {
        return this.#name;
    }
}

// USAGE
/*
    const userInheritance = new UserInheritance('Vasilyi');
    userInheritance.setProperty('cardId', 25);
    userInheritance.getProperty('cardId'); // 25
*/



// use through composition

class UserComposition {

    #name = 'Anonimus';
    propertyContainer;

    /**
     * @param  {string} name=''
     */
    constructor(name = '') {
        this.#name = name;
        this.propertyContainer = new PropertyContainer();
    }

    /**
     * @param  {} name=''
     */
    set name(name = '') {
        this.#name = name;
    }

    /**
     * @returns {string}
     */
    get name() {
        return this.#name;
    }
}

// USAGE
/*
    const userComposition = new UserComposition('Vasilyi');
    userComposition.propertyContainer.setProperty('cardId', 25);
    userComposition.propertyContainer.getProperty('cardId'); // 25
*/



class UserAggregation {

    #name = 'Anonimus';
    propertyContainer;

    /**
     * @param  {string} name=''
     */
    constructor(name = '', PropertyContainer) {
        this.#name = name;
        this.propertyContainer = PropertyContainer;
    }

    /**
     * @param  {} name=''
     */
    set name(name = '') {
        this.#name = name;
    }

    /**
     * @returns {string}
     */
    get name() {
        return this.#name;
    }
}

// USAGE
/*
    const userAggregation = new UserAggregation('Vasilyi', new PropertyContainer());
    userAggregation.propertyContainer.setProperty('cardId', 25);
    userAggregation.propertyContainer.getProperty('cardId'); // 25
*/