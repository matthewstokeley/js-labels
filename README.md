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

### Asynchronicity

```
  `labels` is designed to support easily switching between an `api` request object, as long as they agree to the same interface.  This means parsing async and synchronous requests.

  This feature relies on the use of 'planner' or another event library to handle asynchronous events. 

```