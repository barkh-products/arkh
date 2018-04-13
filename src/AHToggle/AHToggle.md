
#### Normal toggle
```js
initialState = { active: false };
<AHToggle
  active={state.active}
  onClick={() => setState({ active: !state.active })}
/>;
```

#### Disabled toggle
```js
initialState = { active: false };
<AHToggle
  active={state.active}
  onClick={() => setState({ active: !state.active })}
  disabled
/>;
```