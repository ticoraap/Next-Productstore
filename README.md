# Next example project

## Project description

This is a simple and neat project in which you can add products to a shopping cart, view the shopping cart in a modal and increase or decrease the amount of any product you've added.

Products are loaded from a Firebase REST api, which is at [this URL](https://assingments-8968c-default-rtdb.europe-west1.firebasedatabase.app/products.json).

## Testing

All interfaces of components are tested on passing object and values like text, numbers and currencies. Method clicks are tested and in a few tests the elements css properties.

## Starting the project in development

Fetch the project and in the base directory run the following commands.

```bash
# for npm
npm install
npm run dev

# for yarn
yarn
yarn dev

# run the tests (watch mode)
# npm
npm run test
# or yarn
yarn test
```

## Used tools

-   Next (React)
-   Axios
-   Jest
-   Mobx
-   TypeScript (TSX)
-   Emotion Styled elements

## What this project does not have

Not everything that can be tested is tested, this is the case with the api and individual pages.

Even though this is a Nextjs app, and it works, it does not use many of the special abilities that the Nextjs fullstack framework suppplies like the `getServerSideProps()` function. It is deffinetly something that I'm going to be trying out in the future.
