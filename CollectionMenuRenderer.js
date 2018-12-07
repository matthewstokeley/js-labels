class CollectionMenuRenderer {
    constructor(options) {
        this.store = options.store;
        this.collectionManager = options.collectionManager;

        this.container = options.container;
        this.element = options.element;

        this.name = options.name;

        this.init();
    }

    init() {
        this.setTemplate();
        this.setId(this.formatId(this.name));                
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

    render() {
        var data = this.collectionManager.findAll();
        this.container.innerHTML = this.renderTemplate(data);
        return this;
    }

}