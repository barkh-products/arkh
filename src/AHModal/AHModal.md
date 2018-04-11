```js
initialState = { isOpen: false };
<div>
<AHButton onClick={() => {setState({isOpen: true})}}>Open Modal</AHButton>
{
    state.isOpen && <AHModal onBackgroundClick={() => setState({isOpen: false})}>
    <AHTitle>My title</AHTitle>
    </AHModal>}
</div>
```