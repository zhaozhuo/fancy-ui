import { Component, Prop, Vue } from 'vue-property-decorator'

interface ITabsItem {
  title: string
  url?: string
}
interface ITabsData {
  [key: string]: ITabsItem
}

export interface ITabs {
  data: ITabsData
  active: string | number
}

const options: ITabs = {
  data: null,
  active: 0,
}

@Component
export default class App extends Vue {
  @Prop() private cfg: ITabs

  protected created() {
    Object.keys(options).forEach(i => {
      this.cfg.hasOwnProperty(i) || this.$set(this.cfg, i, (options as any)[i])
    })
  }
}
