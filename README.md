# react-sarufi-chatbox

[![npm](https://img.shields.io/npm/v/@flexcodelabs/react-sarufi-chatbox)](https://www.npmjs.com/package/react-sarufi-chatbox) [![NPM](https://img.shields.io/npm/l/react-sarufi-chatboxe)](https://www.npmjs.com/package/react-sarufi-chatbox)

[Package Name](#react-sarufi-chatbox)

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)

## Installation

`npm install react-sarufi-chatbox`

or

`yarn add react-sarufi-chatbox`

## Usage

```js
...
import SarufiChatbox from 'react-sarufi-chatbox';

<SarufiChatbox
  botId={16}
  theme={{
    buttonSize: "md",
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
    mode: "dark",
    placement: "right",
  }}
  title="Chat"
/>
```

## Props

| Name    | Type               | Default | Required | Description                 |
| ------- | ------------------ | ------- | -------- | --------------------------- |
| botId   | `string or number` | `-`     | true     | id of integrated sarufi bot |
| API_URL | `string`           | `-`     | false    | sarufi api url              |
| theme   | `object`           | `-`     | false    | customize bot apearance     |
| title   | `string`           | `-`     | false    | chatbox title               |
