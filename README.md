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

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# STUDY
### useEffice
1. useEffect(callback)
- G???i callback m???i khi component re-reder
- G???i sau khi component ???????c th??m v??o DOM - g???i sau render
2. useEffect(callback, [])
- Ch??? g???i callback 1 l???n khi component mounted
3. useEffect(callback, [deps])
- Callback ch??? ???????c g???i l???i m???i khi deps thay ?????i
---------
1. Callback lu??n ???????c g???i sau khi component mounted
2. Clean up function lu??n ??c g???i tr?????c khi component unmounted
3. Clean up function lu??n ??c g???i tr?????c khi callback ???????c g???i tr??? l???n component mounted

### useLayoutEffice

* Ti???n tr??nh th???c hi???n c???a useEffect vs useLayoutEffect

*** useEffect
1. C???p nh???t l???i state
2. C???p nh???t l???i DOM(mutated)
3. Render UI
4. G???i clean up n???u deps thay ?????i
5. G???i useEffect callback

*** useLayoutEffect
1. C???p nh???t l???i state
2. C???p nh???t l???i DOM(mutated)
3. G???i clean up n???u deps thay ?????i
4. G???i useEffect callback
5. Render UI

### useRef

- L??u c??c gi?? tr??? c???a m???t tham chi???u b??n ngo??i function component

### useReducer

* So s??nh useState vs useReducer v???i b??i to??n Up/Down

*** useState
1. Init state: 0
2. Actions: Up (state + 1) / Down (state - 1)

*** useReducer
1. Init state: 0
2. Actions: Up (state + 1) / Down (state - 1)
3. Reducer
4. Dispatch

### useContext vs Context

1. Create context
2. Provider
3. Consumer