/**
 * Hooks are special functions introduced in React 16.8 that allow you to "hook into" React features. You should use hooks
 * whenever you need to use state in a functional component: hooks only work in functional components, as class components can just directly access state.
 * As mentioned previously, we strongly recommend using functional components with hooks as they are essentially equialvent to classes but more lightweight and simpler.
 *
 * useState is a Hook that lets you add React state to function components: it is by far the most commonly used hook and likely the only hook you will you end up using.
 * When you declare a state variable with useState, it returns a pair — an array with two items. The first item is the current value, and the second is a function that lets you
 * update it. The value can be of any type: String, Integer, Array, Object, etc., but you are required to use the function provided to update it
 * See https://reactjs.org/docs/hooks-state.html for more detail
 *
 */

import React, { useState } from "react"

export default function UseState() {
    /**
     * The following code allows a user to select the type of pet they want, and then updates the pet state variable to determine whether to render the cat information or dog information.
     * The code also uses ternary expressions, which are essentially equivalent to if/else statements, but can be used to determine what to render -- in this case, it is first checking
     * that the pet has been set and showing rendering nothing(null) if it has not, and then rendering either the cat or dog info. See more about ternary operators here:
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator. An alternative to using ternary operators it to use a child class and pass in the type
     * of pet as a prop, and the child class can then determine whether to return a cat class or a dog class that will display the info.
     */

    const [pet, setPet] = useState("")
    const cat = { name: "Max", age: 10, breed: "Siamese" }
    const dog = { name: "Kenji", age: 6, breed: "Shiba" }

    function handleCat() {
        setPet("cat")
    }

    function handleDog() {
        setPet("dog")
    }

    return (
        <div>
            useState Example
            <p> Choose your pet! </p>
            <button onClick={handleCat}> Cat </button>
            <button onClick={handleDog}> Doge </button>
            {pet != "" ? (
                pet == "cat" ? (
                    <div>
                        <img
                            src={require("../../assets/cat.jpg").default}
                            style={{ width: "25%", height: "25%" }}
                            alt="cat"
                        ></img>
                        <p> Name: {cat.name} </p>
                        <p> Age: {cat.age} </p>
                        <p> Breed: {cat.breed} </p>
                    </div>
                ) : (
                    <div>
                        <img
                            src={require("../../assets/dog.jpg").default}
                            style={{ width: "30%", height: "30%" }}
                            alt="dog"
                        ></img>
                        <p> Name: {dog.name} </p>
                        <p> Age: {dog.age} </p>
                        <p> Breed: {dog.breed} </p>
                    </div>
                )
            ) : null}
        </div>
    )
}
