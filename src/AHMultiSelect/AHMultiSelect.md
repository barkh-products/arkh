```js
initialState = { selected: [] };

<AHMultiSelect
  value={state.selected}
  onChange={selected => setState({ selected: selected })}
  options={[
    {
      value: "hello",
      label: "Hello"
    },
    {
      value: "bonjour",
      label: "Bonjour"
    },
    {
      value: "hej",
      label: "Hej"
    }
  ]}
/>;
```
