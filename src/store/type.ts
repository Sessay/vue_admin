import { Store } from 'vuex'

export interface App {
  sidebar: {
    opened: boolean
    withoutAnimation: boolean
  }
}

export interface User {
  admin_level: number | undefined
  name: string | undefined
  username: string | undefined
}

export interface State {
  app: App
  user: User
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
