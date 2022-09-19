This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/menu](http://localhost:3000/api/menu). This endpoint can be edited in `pages/api/menu.js`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Assessment Instructions

Build a react site for the fake resturant Jazz Taco’s.

- You should fetch the data from the API to get the menu items. - `/api/menu`
- Display a Menu Item Card for each item on the menu in a list.
  - Clicking the plus or minus buttons on any given menu item should inrease or decrease the quantity of items on an order keep track of the amounts of items in an order and show an updated total and order summary.
- You must submit the data for an order to the API. - `/api/order`
  - If the APi returns with a successful response than navigate to the success page.
  - If the API returns with an error then use the javascript alert to show the error.

### Notes:

- The flow on Mobile is slightly different becuase of the reduced screen realestate and so it has an additional step of showign the order summary
- Things I am looking for in this assessment:
  - Good usage of react components to reduce repettion in code good usage of react hooks
  - Clean, commented code
- Your app should be a full responsive website, meaning it should look good on any screen size
- Please build your site to look like the attached mockups.

### Mockups

#### Mobile

| Menu                                   | Order Summary                           | Success                                 |
| -------------------------------------- | --------------------------------------- | --------------------------------------- |
| ![Mobile Menu](/mockups/Frame%201.jpg) | ![Mobile Menu](/mockups/Frame%2010.jpg) | ![Mobile Menu](/mockups/Frame%2013.jpg) |

#### Desktop

| Menu                                    | Success                                 |
| --------------------------------------- | --------------------------------------- |
| ![Mobile Menu](/mockups/Frame%2012.jpg) | ![Mobile Menu](/mockups/Frame%2014.jpg) |
