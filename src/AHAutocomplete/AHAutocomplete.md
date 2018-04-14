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
  value: "",
  suggestions: []
};

<AHAutocomplete
  onSuggestionsFetchRequested={() => setState({ suggestions: suggestions })}
  onSuggestionsClearRequested={() => setState({ suggestions: [] })}
  inputProps={{
    onChange: (_, { newValue }) => setState({ value: newValue }),
    value: state.value
  }}
  getSuggestionValue={s => s.name}
  renderSuggestion={function(s) {
    return (
      <div>
        {s.name} <div>{s.year}</div>
      </div>
    );
  }}
  suggestions={state.suggestions}
/>;
```
