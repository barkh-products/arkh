```js
initialState = { isOpen: false, overlayActive: false };
<div>
  <AHButton
    onClick={() => {
      setState({ isOpen: true });
    }}
  >
    Open Modal
  </AHButton>
  {state.isOpen && (
    <AHModal
      style={{ height: 300, width: 800, flex: "none" }}
      onBackgroundClick={() => setState({ isOpen: false })}
    >
      {state.overlayActive && (
        <AHModalOverlay
          onBackgroundClick={() => {
            setState({ overlayActive: false });
          }}
        >
          <AHTitle>Overlay</AHTitle>
        </AHModalOverlay>
      )}
      <AHTitle>My title</AHTitle>

      <AHButton
        onClick={() => {
          setState({ overlayActive: true });
        }}
      >
        Open overlay
      </AHButton>
    </AHModal>
  )}
</div>;
```
