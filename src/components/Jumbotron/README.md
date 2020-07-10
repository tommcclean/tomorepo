# tomorepo/jumbotron

## Install dependency in your project
```
npm install @tomorepo/jumbotron --save
```

### Import component where you want to use it
```js
import '@tomorepo/jumbotron';
```

### Use the component in your template
```html
  <Jumbotron-component
    :image-url="imageUrl"
    :is-taller="isTaller">
    <h1>Hero Component</h1>
    <p>All of this content is injected via a slot</p>
  </Jumbotron-component>
```
