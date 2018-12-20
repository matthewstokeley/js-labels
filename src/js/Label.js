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

        events.register('response', (res, id) => {
          if (id === this.requestId) {
           this.container.innerHTML = this.renderTemplate(res);
          }
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

    render () {
        var data = this.collectionManager[this.method]();
        this.container.innerHTML = this.renderTemplate(data);
        return this;
    }

    request() {
      this.collectionManager[this.method]();
      return this;
    }

    renderAsync(data) {
        this.container.innerHTML = this.renderTemplate(data);
        return this;
    }

}