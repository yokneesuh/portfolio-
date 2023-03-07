# `Portfolio Template`

This is my take on a simple portfolio template. The base/config is forked from [Cypotat's React/Daisy UI Template](https://github.com/cypotat/react-daisyui-template/).

# How to use this template

1. Click "Use Template" on Github
2. `git clone` your version of the template from bash
3. Change the avatar, experiences, or skills.
4. Don't forget to change the contact information / links :)
5. Push your new changes to Github
   - `git add . `
   - `git commit -m "First Commit"`
   - `git push origin main`

# How to add/change themes

1. All themes are in `tailwind.config.js`, to add themes to your site, use [the official DaisyUI site](https://daisyui.com/docs/themes/) as a reference and modidfy your configuration.
2. Finally, on `src > config.js`, add your new themes, an ID and a corresponding icon to add it to the navbar.

# Changing Meta Data

- This template uses the `Helmet` package. Check `src > index.js` or `public > index.html` for existing meta data information. Otherwise, use `Helmet` documentation to modify it.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
