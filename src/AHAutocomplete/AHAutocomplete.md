```js
suggestions = [
  {
    name: "C",
    year: 1972
  },
  {
    name: "Elm",
    year: 2012
  }
];

initialState = {
  value: ""
};

<AHAutocomplete
  items={suggestions}
  onChange={newValue => setState({ value: newValue })}
  value={state.value}
  getItemValue={item => item.name}
  filter={item => item.name.toLowerCase().includes(state.value.toLowerCase())}
  renderSuggestion={item => (
    <div>
      {item.name} <div>{item.year}</div>
    </div>
  )}
/>;
```
