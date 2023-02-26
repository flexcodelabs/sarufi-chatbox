## Instructions on how to customize this template

### Step 1: 
Edit the placeholder name in index.tsx file with your package/component name. You can do this in vscode by using the find and replace feature. Find 'PackageName' and replace it with you component name. Remember to use PascalCase because it is a react component.

### Step 2:

Edit the placeholder name in package.json file and readme file. You can do this in vscode by using the find and replace feature. Find 'package-name' and replace it with you component name. We recommend using hyphenated names like 'package-name' instead of other formats like camelCase or spaced names like 'packageName' or 'package name'.

### Step 3:

Edit the publish.yml file in the .github/workflows folder to add your email and name. Replace 'bmsteve96@gmail.com' with your email and 'Benedict Steven' with your name.

### Step 4:

Add NPM_AUTH_TOKEN and github TOKEN in the settings of your package repository in the github UI. You can find instrutions on how to generate [NPM_AUTH_TOKEN here](https://docs.npmjs.com/creating-and-viewing-access-tokens) and g[ithub TOKEN here](https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

### Step 5:

Remember to add your component's features and props in this README.md file below the instructions.

### Step 6:

Remove the instructions from this README.md file.

# @flexcodelabs/package-name

[![npm](https://img.shields.io/npm/v/@flexcodelabs/package-name)](https://www.npmjs.com/package/@flexcodelabs/package-name) [![NPM](https://img.shields.io/npm/l/@flexcodelabs/package-name)](https://www.npmjs.com/package/@flexcodelabs/package-name)

[Package Name](#@flexcodelabs/package-name)
  + [Features](#features)
  + [Installation](#installation)
  + [Usage](#usage)
  + [Examples](#examples)
  + [Props](#props)

## Features

* List of features

## Installation

 `npm install @flexcodelabs/package-name`

or

 `yarn add @flexcodelabs/package-name`

## Usage

```js
...
import PackageName from '@flexcodelabs/package-name';

<
PackageName {
    ...props
}
/>
```

## Examples

[Source code](${repo})  
[Demo](${demo_link})

## Props

| Name | Type   | Default | Required | Description  |
| ---- | ------ | ------- | -------- | ------------ |
| Prop | `type` | ``      | false    | Descriptions |
