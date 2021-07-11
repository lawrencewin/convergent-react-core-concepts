/**
 * Props(short for properties) is a plain Javascript object that is passed into component from another component, similar to function parameters. When the props passed into a component change,
 * this event will trigger a render-update for that component, similar to State.  If a Component needs to alter one of its attributes at some point in time,
 * that attribute should be part of its state, otherwise it should just be a prop for that Component, as props are immutable within a component, and can only be changed by the parent
 * component that passes in the props to its child component.
 *
 */

import React, { useState } from "react"
import DisplayCount from "./Counter"

export default function Props() {
    /**
     * The following code is functionally exactly the same as the code from the State example: it displays a counter text and two buttons that users can use to increment or decrement the
     * count, which will update visually in real-time by triggering a render update each time the counter variable is changed. The key difference is that the following code uses a child
     * Counter class to display the count, rather than displaying the count directly in the main class. Storing the count in the state of Props.jsx is still necessary because we still need
     * to re-render the main component when the count is altered, in order to then re-render the child component and pass in the new count as a prop. In order to display the child class
     * from the main class, we simply import the class and use it like any other react-component, and you can see the syntax to pass in props to a component below(we are also passing in
     * an onClick prop to both of our buttons). There is a border around the child class to highlight the fact that this code uses two classes. For the following example, it really
     * isn't necessary to use props and two classes since there is very little code and it is very straightforward. Props are more commonly used when you're dealing with many complex
     * components and don't want to cram everything into one class and want to break things up into separate components, such as the different screens you will have when building an app.
     */
    const [count, setCount] = useState(0)

    function incrementCount() {
        setCount((count) => count + 1)
    }

    function decrementCount() {
        setCount((count) => count - 1)
    }
    return (
        <div>
            Props Example
            <DisplayCount count={count}></DisplayCount>
            <button onClick={incrementCount}> Increment </button>
            <button onClick={decrementCount}> Decrement </button>
        </div>
    )
}
