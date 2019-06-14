import { observable, computed, action } from 'mobx'

interface Colors {
  primary: string
  secondary: string
}

export default class ThemeStore {
  @observable colors: Colors = {
    primary: 'white',
    secondary: 'blue',
  }

  @computed
  get ColorText() {
    return `Color is: ${this.colors.primary} + ${this.colors.secondary}`
  }

  @action updateColor = (colors: Colors) => {
    this.colors = colors
  }
}
