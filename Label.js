class Label {
    constructor(options) {

        this.store = options.store;
        this.collectionManager = options.collectionManager;
        this.container = options.container;
        this.element = options.element;
        this.name = options.name;
        this.method = options.method;
        this.requestId = options.requestId;
        this.init();
    }

    init() {
        this.setTemplate();
        this.setId(this.formatId(this.name)); 
        events.register('response', (res, id) => {
          if (id === this.requestId) {
           this.container.innerHTML = this.renderTemplate(res);
          }
        })
    }

    /**
     * [setTemplate description]
     */
    setTemplate() { 
        this.template = templates[this.name];
        return this;
    }

    /**
     * [Template description]
     */
    getTemplate() {
        return this.template;
    }

    formatId(id) { return encodeURI(id); }

    setId(id) { this.id = id; return this; }

    getId() { return this.id; }

    renderTemplate(data) {
        return this.template(data);
    }


    /**
     * Use this method to render a template
     * with a synchronous request]
     * @return {Object} [description]
     */
    render() {
        var data = this.collectionManager[this.method]();
        this.container.innerHTML = this.renderTemplate(data);
        return this;
    }

    /**
     * Use this function to fire an async request
     * @return {Object} [description]
     */
    request() {
      this.collectionManager[this.method]();
      return this;
    }

    /**
     * Use this function to render the template
     * with data accessed asynchronously.
     * @chainable
     * @param  {Array} data  
     * @return {Object}  
     */
    renderAsync(data) {
        this.container.innerHTML = this.renderTemplate(data);
        return this;
    }

}