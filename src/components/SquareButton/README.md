# tomorepo/squarebutton

## Install dependency in your project
```
npm install @tomorepo/squarebutton --save
```

### Import component where you want to use it
```js
import '@tomorepo/squarebutton';
```

### Use the component in your template
```html
  <square-button
    text="Square Button"
    :execute="clicked"
    type="button" />
```

### Available Props
- text - text - Default: 'Submit' `The text inside the button`
- execute - function `The function to execute when clicked`
- type - text - Default: 'button' `The HTML type for the button element`
- isPrimary - boolean - Default: false `Whether to style as a primary button or not`
