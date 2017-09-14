## Cook React - another react boilerplate

### Background
Personalized boilerplate to bootstrap a react project, with more maintainable structure.

### `master` branch
#### modification from `create-react-app`
+ `.babelrc` with `babel-plugin-root-import`
  - `~` for `/src`
  - `η` for `/node_modules`
+ `postcss.config` with
  - `postcss-flexbugs-fixes`
  - `postcss-import`
  - `postcss-nested`
  - `postcss-composes`
  - `postcss-cssnext` for global css variables including
    + font
    + colors
    + utils
+ `webpack` modification mainly locates at `css loader`:
  - `/node_modules`: `css-loader`
  - `/styles/global/`: `postcss-loader` with `:global` tag
    - e.g. `/styles/global/global.css`

      ```css
      :global {
        .global-without-hash {
          color: var(--red);
        }  
      }
      ```
  - other css: default css modulized
+ svg loader with `react-svg-loader`
+ normalize css with `normalize.css`, `cssrecipes-defaults` and `reset-css`
+ `lodash` for god sake
+ add api fetch
+ add `react-router v4`
+ add i18n
+ add standard JSLint

#### structure
+ `/pages`
+ `/components`
+ `/styles`
  - `/global`: global css without modulized
  - `/vars`: reusable styles variables
+ `/assets`  
  - `/icons`: svgs
+ `/utils`
  - `/api`: service-based api granularity
  - `/constants`: global constants
  - `/locales`: i18n

### `static` branch
Without following [Gatsby](https://github.com/gatsbyjs/gatsby) structures which
has swallowed too much configurations and just show you a tip of iceberg, use
[static-site-generator-webpack-plugin](https://github.com/markdalgleish/static-site-generator-webpack-plugin#static-site-generator-webpack-plugin) to generate static pages with routing. Usage:
  - 'yarn'
  - 'yarn build'
