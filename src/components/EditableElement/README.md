# tomorepo/editableelement

## Install dependency in your project
```
npm install @tomorepo/editableelement --save
```

### Import component where you want to use it
```js
import '@tomorepo/editableelement';
```

### Use the component in your template
```html
  <editable-element
    element="h1"
    text="This is an editable element"
    @component-updated="updateElement" />
```

### Available Props
- `element` - text - Default: 'h1' `The base element of the editable component`
- `text` - text - Default: 'Empty Heading' `The initial text of the element before it is edited

### Events
- `component-updated` - Returns a string with the new value

