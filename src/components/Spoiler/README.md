# tomorepo/spoiler

## Install dependency in your project
```
npm install @tomorepo/spoiler --save
```

### Import component where you want to use it
```js
import '@tomorepo/spoiler';
```

### Use the component in your template
```html
  <spoiler-component title="My Spoiler Title" :is-light="false">
    <p>This is the result (Injected via slot)</p>
  </spoiler-component>
```