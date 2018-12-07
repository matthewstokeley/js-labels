class TemplateRenderer {
    constructor(options) {
        this.manage = options.collectionManager;
        this.fn = options.fn;
        this.container = options.container;
        this.element = options.element;
        this.name = options.name;
        this.init();
    }

    init() {
        this.setTemplate();
        this.setId(this.formatId(this.name)); 

        planner.register('response', (res, id) => {
            if (id === this.id) {
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

    /**
     * [formatId description]
     * @param  {[type]} id [description]
     * @return {[type]}    [description]
     */
    formatId(id) { return encodeURI(id); }

    /**
     * [setId description]
     * @param {[type]} id [description]
     */
    setId(id) { this.id = id; return this; }

    /**
     * [getId description]
     * @return {[type]} [description]
     */
    getId() { return this.id; }

    /**
     * [renderTemplate description]
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    renderTemplate(data) {
        return this.template(data);
    }

    /**
     * [render description]
     * @return {[type]} [description]
     */
    render() {
        this.container.innerHTML = this.renderTemplate(this.manage[this.fn]);
        return this;
    }

    /**
     * [renderAsync description]
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    renderAsync(data) {
      this.container.innerHTML = this.renderTemplate(data);
      return this;
    }

}