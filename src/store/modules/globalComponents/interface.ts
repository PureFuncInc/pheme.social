export default interface State {
  navigate: {
    routerList: { label: string, path: string, internal?: boolean }[],
    openNavPage: boolean
  },
}
