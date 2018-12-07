# Labels

0.0.4

This is a drop-dead simple approach to handling html templates.  It is essentially a `pojo` - a plain old javascript object - that accepts classes to manage `api` requests and configurations concerning templates. 

### Dependencies


`planner` - for pubsub events.


`store` - or any third-party `api` request library.


### Example

```

  var templates = {
  	menu: (data) => {
  		return 'an html template'
  	}
  }

  var el = new Label({
  	   manage: Manager,
  	   fn: 'findAll',
  	   container: document.getElementByName('menu'),
  	   name: 'menu'
  	})

    // ...

  	el.render()

```

### API Methods

`request`

manually request the template data


`render`

requests template data and renders the html template the container element


`renderAsync`

manually send render a template with asynchronously requested data