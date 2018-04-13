```js
initialState = { isOpen: false };
<div>
  <AHButton
    onClick={() => {
      setState({ isOpen: true });
    }}
  >
    Open Modal
  </AHButton>
  {state.isOpen && (
    <AHModal onBackgroundClick={() => setState({ isOpen: false })}>
      <AHTitle>My title</AHTitle>
    </AHModal>
  )}
</div>;
```


```js
initialState = { isOpen: false };
<div>
  <AHButton
    onClick={() => {
      setState({ isOpen: true });
    }}
  >
    Open Loading Modal
  </AHButton>
  {state.isOpen && (
    <AHModal loading onBackgroundClick={() => setState({ isOpen: false })}>
      <AHTitle>My title</AHTitle>
    </AHModal>
  )}
</div>;
```