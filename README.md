# The One Client

## Init

- Typescript
- ESLint, Prettier
- Storybook
- MobX

# Project Specification

## React Native

Versino: 0.59.9

## Directory Structure (Atomic Design)

![Atomic](https://cdn-images-1.medium.com/max/2400/1*fSiixIK0shYrJkUuRvlcyA.png)

http://bradfrost.com/blog/post/atomic-web-design/

https://blog.prototypr.io/how-atomic-design-improves-development-structures-1eb4d617c7d6

## Test

Jest: https://jestjs.io/docs/en/getting-started

## CI

Travis CI

## Development Extensions

### TypeScript

Starter: https://github.com/Microsoft/TypeScript-React-Native-Starter#typescript-react-native-starter

### Prettier (with ts)

https://medium.com/@sgroff04/configure-typescript-tslint-and-prettier-in-vs-code-for-react-native-development-7f31f0068d2

### MobX

https://mobx.js.org/

### React Navigation 

https://reactnavigation.org/

# TroubleShooting

## Pod error

pod 에러가 날 경우 업데이트 후 ios 폴더에서 pod install

```
cd ios
gem update xcodeproj
pod install
```
