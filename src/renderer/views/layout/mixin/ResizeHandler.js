import store from '@/store'

export default {
  mounted() {
    store.dispatch('ToggleDevice', 'desktop')
  }
}
