#### Simple Container

```js
<AHModuleContainer>
  <AHModule>
    <AHTitle>Hello</AHTitle>
  </AHModule>
</AHModuleContainer>
```

#### Multiple Childs

```js
<AHModuleContainer>
  <AHModule>
    <AHTitle>Hello</AHTitle>
  </AHModule>
  <AHModule>
    <AHTitle>Hello</AHTitle>
  </AHModule>
</AHModuleContainer>
```

#### Column direction

```js
<AHModuleContainer direction="column">
  <AHModule>
    <AHTitle>Hello</AHTitle>
  </AHModule>
  <AHModule>
    <AHTitle>Hello</AHTitle>
  </AHModule>
</AHModuleContainer>
```


#### Combined
```js
<AHModuleContainer direction="column">
  <AHModule>
    <AHTitle>Hello</AHTitle>
  </AHModule>
  <AHModuleContainer direction="row">
    <AHModule>
      <AHTitle>Hello</AHTitle>
    </AHModule>
    <AHModule>
      <AHTitle>Hello</AHTitle>
    </AHModule>
  </AHModuleContainer>
</AHModuleContainer>
```
