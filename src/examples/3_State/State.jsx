/**
 * State is a plain Javascript object that contains information about what is rendered on the screen for a given React component. State is similar to props, but
 * the main difference between the two is that state is managed within the component whereas props are passed to the component. Think of state as a collection of variables
 * that are rendered on the screen that will cause the component to re-render/render update each time one of these variables is updated, and use state when you want a dynamic component
 * such as a counter that visually updates to reflect each time the state is updated.
 *
 * NOTE: Prior to the introduction of Hooks in React 16.8, state was only accessible in class components and thus functional components that required state would have to be
 * transformed into class components. Now that we have Hooks and can use state in functional components, we recommend that you make all of your components functional components
 * and use hooks(refer to 2. Components and 5. Hooks) as functional components are more lightweight and simpler to write
 *
 */

import React, { useState } from "react"

export default function State() {
    /**
     * The following code renders a basic counter with text that displays the current count and two buttons that allow users to either increment or decrement the count. State is necessary
     * here in order to visually update the count on the screen each time a user clicks on the increment or decrement button. In order to use state in a functional component, you must use the
     * useState hook(see 5. Hooks for more detail) and import it from react.
     */
    const [count, setCount] = useState(0)

    /**
     * Use an arrow function to update count, which takes the previous count in case there are multiple calls to setCount, as opposed to the following incorrect code
     * setCount(count-1)
     * setCount(count-1)
     * Count takes the value of count when the component is rendered. Thus, if count was 4, then this code would set count to three twice, rather than setting it to 2.
     * Using this arrow function is necessary when you want to update a state variable multiple times within a function, and want to use the previously updated values each time you make a
     * change(not always required)
     */

    function incrementCount() {
        setCount((count) => count + 1)
    }

    function decrementCount() {
        setCount((count) => count - 1)
    }
    return (
        <div>
            State Example
            <p> Counter: {count} </p>
            <button onClick={incrementCount}> Increment </button>
            <button onClick={decrementCount}> Decrement </button>
        </div>
    )
}
