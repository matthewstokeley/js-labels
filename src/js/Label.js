class Labels {
    constructor (options) {

        this.store = options.store;
        this.collectionManager = options.collectionManager;
        this.container = options.container;
        this.name = options.name;
        this.template = options.template;
        this.method = options.method;
        this.requestId = options.requestId;
        this.id = options.id;
        this.init();

    }

    init () {
        // deprecated
        var objClass = this.name ? this.setTemplateFromGlobal() : this;

//        this.setId(this.formatId(this.name));

        
        // this event listener is now the only mechanism through
        // which the template is rendered.  
        // 
        // store and collectionmanager can now be decoupled 
        //  and not even injected  into this class, although
        //  now the synchronous store methods have to be treated as
        //  if they are asynchronous.  look at patterns in vue and gutenberg
        //  for  handing data, data modules, etc    
        events.register('response', (res, id) => {
            return id === this.requestId
                ? this.appendToContainer(res)
                : ''
        })
    }

    /**
     * [setTemplate description]
     */
    setTemplateFromGlobal () { 
        this.template = templates[this.name];
        return this;
    }

    /**
     * [Template description]
     */
    getTemplate () {
        return this.template;
    }

//    formatId (id) { return encodeURI(id); }

    setId (id) { this.id = id; return this; }

    getId () { return this.id; }

    renderTemplate (data) {
        return this.template(data);
    }

    /**
     * the private me
     * @chainable
     * @param  {[type]} container [description]
     * @param  {[type]} data      [description]
     * @return {[type]}           [description]
     */
    append (container, data) {
        container.innerHTML = this.renderTemplate(data)
        return this;
    }

    isContainerArray (container) { 
        return Array.isArray(container)
        ? true
        : false
    }   

    appendToContainer (data) {
        isContainerArray(this.container)
            ? this.container.forEach(this.append)
            : this.append(this.container, data)
    }

    // render () {
    //     this.appendToContainer(this.collectionManager[this.method]());
    //     return this;
    // }

    // request () {
    //     this.collectionManager[this.method]();
    //     return this;
    // }

    // renderAsync (data) {
    //     this.appendToContainer(data)
    //     return this;
    // }

}