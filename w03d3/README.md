# W03D03 - HTTP Cookies & User Authentication

### To Do
- [x] HTTP and cookies
- [x] Render pages differently based on language preference
- [x] Login user with username and password
- [x] Demonstrate clearing cookies (logout)

### HTTP is stateless
* neither party has to remember any previous interactions
* cookies are key/value pairs created by the server but stored in the browser
* on every subsequent request, the cookies are automatically sent along

GET /languages/:languagePref
languages/ko



```js
// server.js
const users = {
  'abc': {
    username: 'alice',
    password: '1234'
  }
};

res.cookie('userId', 'abc');
```


console.log(req.cookies)
userID
userId

### User authentication
* verifying that the user is who they say they are

* login
* register
* protected
* logout










