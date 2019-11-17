export const imports = {
  'docs/Tooltip.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-tooltip" */ 'docs/Tooltip.mdx'
    ),
}
