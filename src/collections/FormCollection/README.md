# tomorepo/formcollection
This package is a collection of common Vue components used to build a great form.
1. FormInput
2. FormSelect
3. SquareButton

## Install dependency in your project
```
npm install @tomorepo/formcollection --save
```

### Import where you want to use it
```js
import '@tomorepo/formcollection';
```

### Use the component in your template
```html
  <form-input
    field-type="input"
    v-model="myDataValue"
    :model="myDataValue"
    label="This is the field label"
    is-required />

  <form-select
    model="TestValue"
    :label="labelText">
    <option value="Option One">
      Option One
    </option>
    <option value="Option Two">
      Option Two
    </option>
  </form-select>

  <square-button
    text="Square Button"
    :execute="clicked"
    type="button" />
```
