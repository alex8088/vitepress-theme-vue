# Home Page

To use it, specify `page: true` plus some other metadata in your root index.md's YAML frontmatter. This is an example of how it works:

<<< @/index.md{20}

::: tip Tips
The global `<Home />` component must be used in the `md` file of the home page.
:::

Full list of slots available in the `Home` component:

- `home-hero`
- `home-features`
- `home-footer`
