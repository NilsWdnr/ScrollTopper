## Set up ScrollTopper:

1. Load the ScrollTopper-Script in your HTML
   
   ```html
   <script src="scrollTopper.js"></script>
   ```
   
2. Add the ScrollTopper-CSS to your HTML
   
   ```html
   <link href="scrollTopper.css" rel="stylesheet">
   ```

3. Initialize ScrollTopper in your JavaScript
   ```javascript
   new ScrollTopper()
   ```

## Options

Additionally, you can pass an object that contains additional options as a parameter.

```javascript
const options = {
   scrollHeight: 0
};

new ScrollTopper(options);
```
You can use the following options:

### scrollHeight
Number of pixels scrolled from the top of the page to display the back to top button. 

**Type:** number

### width
Width of the button, specified in pixels. No "px" suffix.

**Type:** number

### backgroundColor
Background-color of the button

**Type:** string

