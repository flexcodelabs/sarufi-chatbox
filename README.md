# sarufi-chatbox

[![npm](https://img.shields.io/npm/v/@flexcodelabs/sarufi-chatbox)](https://www.npmjs.com/package/sarufi-chatbox) [![NPM](https://img.shields.io/npm/l/sarufi-chatboxe)](https://www.npmjs.com/package/sarufi-chatbox)

[Package Name](#sarufi-chatbox)

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Props](#props)

## Features

- List of features

## Installation

`npm install sarufi-chatbox`

or

`yarn add sarufi-chatbox`

## Usage

```js
...
import SarufiChatbox from 'sarufi-chatbox';

<SarufiChatbox
  botId={16}
  API_URL={"https://api.sarufi.io"}
  theme={{
    primaryColor: "blue",
    borderColor: "lightgray",
    fontSize: "14",
    fontFamily: "PoppinsRegular",
    sentBoxBg: "blue",
    receivedBoxBg: "white",
    sentBoxColor: "white",
    receivedBoxColor: "black",
    chatboxBg: "#EDECE1",
    receivedBoxLinkColor: "blue",
    sentBoxLinkColor: "white",
  }}  />
```

## Examples

[Source code](${repo})  
[Demo](${demo_link})

## Props

| Name    | Type               | Default | Required | Description                 |
| ------- | ------------------ | ------- | -------- | --------------------------- |
| botId   | `string or number` | `-`     | true     | id of integrated sarufi bot |
| API_URL | `string`           | `-`     | false    | sarufi api url              |
| theme   | `object`           | `-`     | false    | customize bot apearance     |
