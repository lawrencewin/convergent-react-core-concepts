/**
 * Hooks are special functions introduced in React 16.8 that allow you to "hook into" React features. You should use hooks
 * whenever you need to use state in a functional component: hooks only work in functional components, as class components can just directly access state.
 * As mentioned previously, we strongly recommend using functional components with hooks as they are essentially equialvent to classes but more lightweight and simpler.
 *
 * "useEffect is a Hook used for side effects. A functional React component uses props and/or state to calculate the output. If the functional component
 * makes calculations that don’t target the output value, then these calculations are named side-effects. Examples of side-effects are fetch requests(back-end api calls),
 * manipulating DOM(Document Object Model -- a tree-like structure that contains all the elements and it's properties of a website as its nodes), timer functions like setTimeout(), etc.
 * These side-effects are independent of the component rendering. useEffect takes two arguments:
 * callback is the callback function containing side-effect logic. useEffect() executes the callback function after React has committed the changes to the screen.
 * dependencies is an optional array of dependencies. useEffect() executes callback only if the dependencies have changed between renderings.
 * Put your side-effect logic into the callback function, then use the dependencies argument to control when you want the side-effect to run.
 * That’s the sole purpose of useEffect()".
 *
 * tldr; use useEffect() when you want to call a function after a component is rendered that does not affect how the component is rendered(side-effect) to improve performance
 * Credit to https://dmitripavlutin.com/react-useeffect-explanation/ and https://reactjs.org/docs/hooks-effect.html
 */

import React, { useState, useEffect } from "react"

export default function UseEffect() {
    /**
     * This example is taken directly from the reactjs useEffect hook documentation. useEffect is neccessary here because setting the document title is
     * a side-effect: it does not affect how the component is rendered, but still uses information from the component to perform a callback function after the
     * component is rendered
     */
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `You clicked ${count} times`
    })
    return (
        <div>
            useEffect Example
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}

/* Examples of each dependency of useEffect()

// function MyComponent() {
//     useEffect(() => {
//       // Runs after EVERY rendering
//     });
//   }

// function MyComponent() {
//   useEffect(() => {
//     // Runs ONCE after initial rendering
//   }, []);
// }

// function MyComponent({ prop }) {
//   const [state, setState] = useState('');
//   useEffect(() => {
//     // Runs ONCE after initial rendering
//     // and after every rendering ONLY IF `prop` or `state` changes
//   }, [prop, state]);
// }

*/
