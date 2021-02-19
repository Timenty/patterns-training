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
