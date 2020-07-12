# tomorepo/modal

## Install dependency in your project
```
npm install @tomorepo/modal --save
```

### Import component where you want to use it
```js
import '@tomorepo/modal';
```

### Use the component in your template
```html
  <Modal>
    <template v-slot:header>
      <p>This is the Header (Slot: Header)</p>
    </template>
    <template v-slot:body>
      <p>This is the body slot for the component</p>
      <p>The component has a slot for the Header, Body and the Footer</p>
    </template>
    <template v-slot:footer>
      <p>This is the Footer (Slot: Footer)</p>
    </template>
  </Modal>
```