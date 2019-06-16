# react-native-storybook-mobx-starter

React Native boilerplate applied storybook, mobx, typescript and eslint using RN 0.59.9.

## Install

### Github Repository By Github Template

[Template](https://github.com/JeffGuKang/react-native-storybook-mobx-starter/generate)

Make your github repogitory from [Use this template](https://github.com/JeffGuKang/react-native-storybook-mobx-starter/generate) button from this github repository.

### Local

1. `git clone https://github.com/JeffGuKang/react-native-storybook-mobx-starter.git` from your local
2. `cd react-native-storybook-mobx-starter` or change the folder name and go in
3. `yarn` or `npm install`
4. `yarn rename` or `npm rename` to change a project name

## Rename Project

1. `yarn rename "RENAME PROJECT" -b com.jeffgukang.rntsstarter`

Referenced from [react-native-rename](https://github.com/junedomingo/react-native-rename)

## Start

- Normal: `yarn start`
- Storybook: `yarn start:storybook`

Do not forget use the `--reset-cache` option to apply environment variables when you start storybook from normal or opposit case. 

after that, in other shell window 

- ios: `yarn ios`
- android: `yarn android`

## Apply stories to Storybook

`yarn prestorybook`

It will automatically generate stories from *.stories.* files.

## Init

- Typescript
- ESLint, Prettier
- Storybook
- MobX

## Project Specification

### React Native

Versino: 0.59.9

### Storybook

- https://storybook.js.org/
- CDD: https://blog.hichroma.com/component-driven-development-ce1109d56c8e

## Development Extensions

### TypeScript

Starter: https://github.com/Microsoft/TypeScript-React-Native-Starter#typescript-react-native-starter

### ESLint, Prettier (with ts)

You would install some modules globally related to ESLint when you use ESLint as global. (ex: `npm install -g eslint`)

## VSCode Settings

We include .vscode settings can be changed your settings.
If you want to use your vscode settings, just delete the `.vscode` folder.

https://code.visualstudio.com/docs/typescript/typescript-tutorial

## References

- <https://github.com/Microsoft/TypeScript-React-Native-Starter#typescript-react-native-starter>

## License

MIT