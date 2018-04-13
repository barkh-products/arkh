#### Regular Switch

```js
initialState = { activeIndex: 0 };
<AHSwitch
  labels={["one", "two", "three", "four"]}
  activeIndex={state.activeIndex}
  onActiveIndexChange={index => setState({ activeIndex: index })}
/>;
```

#### Collapsed Switch

```js
initialState = { activeIndex: 1 };
<AHSwitch
  labels={["one", "two", "three", "four"]}
  activeIndex={state.activeIndex}
  onActiveIndexChange={index => setState({ activeIndex: index })}
  type="COLLAPSED"
/>;
```