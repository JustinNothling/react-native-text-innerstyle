# react-native-text-innerstyle
A text component for React Native that allows for custom styling of a word or phrase within it's text

## Install

```bash
react-native install react-native-text-innerstyle
```

## Usage

```javascript

import React, { Component } from 'react'
import TextInnerstyle from 'react-native-text-innerstyle'

class App extends Component {

  render(){
    return (
      <TextInnerstyle
        style={{font-size:18, color:'blue'}}
        phrase={"random"}
        innerstyle={{color:'red'}}/>
        This is some random text
       </TextInnerstyle>
    )
  }
}
```

## Properties

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| style | - | `object` | Specify the style of the TextInnerstyle, eg. color, font-size...  |
| phrase | - | `string` | Specify the word or phrase you want to customize within your text.  |
| innerstyle | `object` | Specify the style of the word or phrase, eg. color, font-size... |
