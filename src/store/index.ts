import { createStore, createLogger } from 'vuex'
import createPersistedstate from './plugins/persistedstate.js'
import { State } from './type'
import user from './modules/user'
import app from './modules/app'

const debug = process.env.NODE_ENV !== 'production'

const store = createStore<State>({
  modules: { user, app },
  plugins: debug
    ? [createLogger(), createPersistedstate({ storage: window.sessionStorage })]
    : [createPersistedstate({ storage: window.sessionStorage })]
})

export default store
