# W04D04 - Responsive Design and SASS

### To Do
- [x] Responsive Design
- [x] Viewport Meta Tag
- [x] Percentages
- [x] `max-width` and `min-width`
- [x] Viewport Height/Width `vh`/`vw`
- [x] Based on Font-size `em`/`rem` emphemeral units M
- [x] Media Queries
- [x] CSS Preprocessors
- [x] Intro to Sass/SCSS

### Responsive Design
* our website/app works for everyone (a variety of users with a variety of devices)




div
15px margin-bottom

10px margin-top
div


* percentage - is percentage of the parent
* vh/vw - 1% of the overall viewport dimensions



mobile-first = we target mobile devices with initial styles

### Media Queries
* asking questions/conditions of the viewport/device
* media type: `screen`, `print`, `speech`
* media features: `height`, `width`, `orientation`

```css
html {
  font-size: 15px;
}

@media only screen and (min-width: 200px) {
  html {
    font-size: 20px;
  }
  div {

  }
}

@media only screen and (min-width: 500px) {
  html {
    font-size: 30px;
  }
}
```

L         R
avatar form/tweets

avatar
form/tweets

### CSS Preprocessors and Supersets
* superset => contains one programming language and additional functionality
* SCSS => Sassy CSS
* the browser doesn't understand SCSS
* SCSS => preprocessor => CSS

* SCSS additions
  * variables

div.content
  p
  h2
