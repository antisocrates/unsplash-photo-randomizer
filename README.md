# Unsplash Photo Randomizer

This project:

- was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- uses Material UI.
- uses the official [Unsplash-js](https://github.com/unsplash/unsplash-js) API client.
- uses [react-toastify](https://github.com/fkhadra/react-toastify) as a user friendly pop-up for error and informational
  messages.
- uses HTML5 form validation.
- uses the builtin react dotenv to store the access token for the API.

## Instructions

Rename `.env.example` to `.env` and provide your Unsplash API Access Key.

Furthermore, in the project directory run:

### `yarn start`

Finally, open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

- `utils` contains helper functions.
- `types` contains interfaces and enums used in components.
- `components` contains react functional components.
- `services` contains the unsplash service.

## Other Information

I initially tried to use the [GET /photos/random](https://unsplash.com/documentation#get-a-random-photo) endpoint from
Unsplash API, but according to the documentation it doesn't support the color parameter.

So i opted to use the [GET /search/photos](https://unsplash.com/documentation#search-photos) endpoint which does support
the query, color and orientation parameters.

In order to get a random photo from the above endpoint the total amount of photos must be known, and therefore two api
calls had to be done.

With the first one we find the total amount of available photos for the specified parameters.

With the second one we randomly select a photo to fetch out of the available count.
