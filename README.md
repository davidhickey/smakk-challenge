##
This is a coding challenge I completed recently that utilizes Shopify's Slate build tool. </br>
Link to dev-theme: (https://smakk-challenge.myshopify.com/collections/frontpage)

## Techologies used:
- HTML5/CSS3
- Liquid
- JS/ES6
- Slate(Shopify build tool)

## Files that contain my code:
- layout/theme.liquid
- templates/collection.product-archive.liquid
- sections/Header.liquid
- section/Footer.liquid
- assets/global.css
- assets/product-archive.css
- assets/product-archive.js

## Quirks/Unfinished tasks:
- page elements are coded responsively up until smartphone, except for product grid(1 col on smartphones, 2 on tablets, 3 on laptop and up)
  - if I had more time, I'd like to stack the elements in the collection hero container for smartphone. I'd also like to build a tablet/smartphone friendly menu icon that displays links on click through a sliding right-hand sidebar navigation.
- Shopify "Sections" are under-utilized
  - If I had more time, I'd like to experiment and build out customizable components for the header and footer that would allow clients to have greater customization for adding copy, color, fonts, and sizing to their storefront.
- "Sort" menu is limited to sorting by product tag
  - If I had more time, I'd like to build out an ansychronous JS program that allows for users to sort by tags, price, color etc without a full page reload. This could be accomplished by rendering products within this collection through Shopify's collection API, turning each into an object that exposes tags/price/color etc. Then, based on the filter or filters selected, I could hide/show/re-organize the delivery of products to the product grid.

## Breakdown of Build:
total hours spent: 10.5hrs
- review task and psuedo code template components and shared classes (1 hr)
- build initial HTML skeleton with proper spacing for desktop (2 hr)
- build css classes w/ breakpoints for responsiveness and add to html (1hr)
- build js onclick hide/show functionality for sort and product descriptions (30min)
- add color, typography, copy and assets (1 hr)
- implement small and moderate changes to get to final product (4 hr)
- write read.me and commit final changes (1hr)

##

This empty theme is scaffoled from the Shopify starter theme and slate.

## Getting started

- Create a shopify store and import the products from the CSV file
- Run the below command and upload theme to your development store, keep the theme ID

```
$ yarn zip
```

- Add the correct information to the `.env` file (use theme ID from above Step) For more information on connecting your new project with a Shopify store, see the [Slate docs](https://github.com/Shopify/slate/wiki/3.-Connect-to-your-store)

Then run the following command in your terminal - this will watch and reload your theme.

```
$ yarn start
```

When you are done, run the below and push to your GitHub.

```
$ yarn deploy
```

### Shopify Starter Theme

Starter Theme represents the Shopify Themes Team's opinionated starting point for new Slate theme projects. It strives to include up-to-date best practices and solutions that we have deemed needed for the majority of themes we build. It is a reflection of what’s possible when building a theme!

### Intentional lack of styles

When launching Starter Theme for the first time, you may notice a lack of CSS styles. Is Starter Theme broken? Definitely not! Keep in mind this was done intentionally. Starter Theme is not a framework but rather a starting point for your project. It contains all the files the Shopify Themes team considers to be the bare essentials to building a Shopify theme.

For templates and snippets, standard Liquid tags and logic have been included with little to no markup, classes, or other code that you will need to remove. The [`src/styles/theme.scss`](https://github.com/Shopify/starter-theme/blob/master/src/assets/styles/theme.scss) file contains extremely limited styling to not get in the way of developers' CSS preferences. The JavaScript files contain most of our [helper scripts](https://github.com/Shopify/theme-scripts/tree/master/packages) and [lazysizes](https://github.com/aFarkas/lazysizes) for responsive image lazy loading.

### System requirements

You'll want to ensure you have the following already installed on your local machine before getting started with Starter theme:

- **Node:** The current LTS (long-term support) release. We like to use a Node Version Manager like [NVM](https://github.com/creationix/nvm).

- **NPM 5+ or Yarn:** Both of these package managers have [ups and downs](https://blog.risingstack.com/yarn-vs-npm-node-js-package-managers/), choose whichever you prefer. Follow the installation instructions [for Yarn](https://yarnpkg.com/en/docs/install) or [NPM](https://www.npmjs.com/get-npm) to make sure you're using the latest version.
