# W04D03 - AJAX

### To Do
- [x] AJAX
- [x] XMLHttpRequest (XHR) Object
- [x] Build a simple Express server to serve our app
- [x] Use AJAX to retrieve data from our server
- [x] Use jQuery to update the DOM with the retrieved data
- [x] Use AJAX to submit data to our server
- [x] All without refreshing the browser

### AJAX
* Asynchronous Javascript and XML AJAJ
* JS is making HTTP requests (not the browser)
* XHR object XML HTTP Request object

* encoding information
* eXtensible Markup Language (XML) XHTML is a string

```xml
<user>
  <username>alice</username>
  <password>1234</password>
</user>
```

```json
{
  "username": "alice",
  "password": "1234"
}
```

```js
$.ajax({
  method: 'GET',
  url: '/tweets',
  dataType: 'json',
  success: (responseData) => { createTweetElement(responseData) },
  error: (err) => {}
})
```
XSS cross-site scripting
name=chocolate%20cake&calories=1000
http://localhost:4000/?name=choco+cake&calories=1000

```js
$('h2') // search the dom for h2's
const $h2 = $('<h2>') // create an h2
$h2.text("console.log('hello')"); // <h2>hello world</h2>
$h2.addClass('greeting'); // <h2 class="greeting">hello world</h2>

.text('hello'); // return `this`
$('<div>').text('hello').addClass('fancy-css')

$(`<h2 class="greeting">${console.log('hello')}</h2>`); // <h2 class="greeting">hello world</h2>
```








