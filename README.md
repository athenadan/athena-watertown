1. What is destructuring? why would you use it?
   to re-generate an array with fewer and more
2. What library renders React to the web?
   react-dom
3. Var is dead? Why? What should you use instead?
   var is scoped to the module/file. let and const are guarded by scope blocks
4. How should you copy an object? Is it a deep or shallow copy?
   spread operator. it is a shallow copy
5. What tool did we use to generate our React app?
   create-react-app
6. What is babel? Why should we use it?
   a utility to bundle all the html/css/js/etc files together into a small code base for deployment
7. converts ES5+ javascript to javascript that is compatible with older browsers
8. Prettier. autoformatting standardizes code so that
9. WHat hook did we useuseState
10. When does react re-render?
    Periodically, based on when it's most efficient/useEffect
11. useEffect
12. we did not set it up to only run once...it would loop into setState, setState called useEffect
13. JSONServer
    makes fetches realistic and persists data
14. What tool did we use to make an HTTP call?
    fetch
15. What is React's flavor of HTML?
    JSX
16. Name at least 3 differences class > className; for > htmlFor; object styles are camel cased (not kebab-cased)
17. Is JSX required?
    no
18. What is JSX compiled down to?
    javascript - react.createElement
19. What tool is checking our code quality?
    ESLint. yes. good question
20. Debugging:
    add "debugger" on the line where you'd like to break; reload the page using Chrome DevTools
21. no - it's using
22. predicate
23. map, every,

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
