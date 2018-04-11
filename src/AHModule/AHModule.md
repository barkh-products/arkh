

AHModule an be used in two ways: with render method or with children.

#### With Render method:
```js
<AHModule loading={false} render={() => <AHTitle>Test</AHTitle>}/>
```
The render method will only be called when loading is true.
This is useful if the module is used with data fetching.

#### With children:
```js
<AHModule>
  <AHTitle>Test</AHTitle>
</AHModule>
```
The children will be created by the parent and thus exist even if loading is true.
This can be used when no data fetching is needed.


#### Loading
```js
<AHModule loading={true} render={() => <p>Test</p>}/>
```