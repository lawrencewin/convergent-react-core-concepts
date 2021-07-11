# Listening To Events

Events are crucial to creating any responsive and dynamic React App. They're used to listen for inputs, handle user interaction, and more. 

## What is an Event Exactly?

Events are a Javascript construct. They fire based off of certain conditions, such as a user click, a browser window resizing, or an error occuring, and they allow for you to respond to them through handlers, functions that run once the event is fired. 

Before we dive into how to respond to an event in React, let's examine how to respond to events in native JS. 

## A Simple JS Form

Take this simple HTML form below. Here, we're collecting emails to put in our database. In our email input, we want to prevent users from using forbidden characters, such as "~", ":", "^", etc.

Note that our input has id `formEmail` and our button has id `submitButton`.

```html
<input type="email" id="formEmail" />
<button id="submitButton">Submit Email</button>
```

Here's the JS to process this.

```javascript
const button = document.getElementById("submitButton")
const emailInput = document.getElementById("formEmail")

const FORBIDDEN_CHARS = new Set([",", "^", "$", "~", ":", "&", "*", "(", ")", "+", "=", "?", "<", ">", "`", "\"", "'"])

emailInput.addEventListener("input", (event) => {
    const { target, data } = event
    // target = emailInput (from above)
    if (FORBIDDEN_CHARS.had(newChar)) {
        target.value = target.value.substring(0, target.value.length - 1)
    }
})

button.addEventListener("click", (event) => {
    const email = emailInput.value
    putEmailInDatabase(email) // do our collection logic
})
```

Here, we listen to two events on two elements, `input` on `emailInput` and `click` on `submitButton`. `input` listens for any value changes to `<input>` HTML elements, and `click` listens for any click on the HTML element. We use `addEventListener` to bind handlers to the two events.

For the `input` handler, we take in an `event` parameter, an `Event` object that contains some important readonly properties. We destructure two of the properties, `target` and `data`. 
- `target` points to the HTML element that's the subject of the event itself. In this case, `target` is equal to the `emailInput` object. 
- `data` is unique to the `input` event. It represents the change to the current value of the target. In this case, it's the newest character in the text input. 

You can view documentation on the `Event` object / interface on the [Mozilla docs](https://developer.mozilla.org/en-US/docs/Web/API/Event). The `InputEvent` object documentation is viewable [here](https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/data).

Afterwards, we see if the new character is forbidden or not. If the new char is forbidden, we cut it off of the input's current value using `substring`.

For the `click` handler, all we do is get the `emailInput`'s current value and run some abstracted logic to upload the email to the database. The event parameter is not used in this case, due to the simple logic.

## React Equivalent

Given the JS example, let's see the difference in implementing the same form for ReactJS.

```javascript
import { useState } from "react"

const FORBIDDEN_CHARS = new Set([",", "^", "$", "~", ":", "&", "*", "(", ")", "+", "=", "?", "<", ">", "`", "\"", "'"])

function BasicForm () {
    const [ email, setEmail ] = useState("")
    const handleEmailChange = (event) => {
        const value = event.target.value
        const lastChar = value.charAt(value.length)
        if (!FORBIDDEN_CHARS.has(lastChar)) {
            setEmail(value)
        }
    }
    const handleClick = (event) => {
        putEmailInDatabase(email)
    }
    return (
        <div>
            <input type="email" value={email} onChange={handleEmailChange} />
            <button onClick={handleClick}>Submit Email</button>
        </div>
    )
}
```

Let's look over the differences between native JS and React.

Firstly, note how the UI and JS logic are intermixed, rather than separated. Rather than binding event handlers using `addEventListener` on an element object, event handlers in React are binded on the UI elements themselves. In my opinion, this is cleaner and more intuitive to understand.

Secondly, lets look at the handler for the email input. Instead of binding the handler to an `input` event, we bind it to a `change` event. This is mostly similar, with the exception that the `data` attribute is not included in the `event` object parameter for the handler. If you wanted to, you could replace `onChange` with `onInput` and get the extra `data` param, but the standard for listening for input events generally is `onChange`. With the `<input>` element, we're also controlling its value through our state variable `email`. This state variable is then set appropriately in the handler to not include forbidden chars. This is a React practice called a "controlled input", and it is part of what makes React powerful. Rather than editing the `<input>` element itself each `change` event, you vet whether the new input is valid before re-rendering. 

Finally, this whole `BasicForm` component is immediately reusable, where our HTML / JS native code would need modifications to scale. If we're collecting emails on a footer, this component could also be used in some contact page, some popup modal, or in some header. 

## A Complete List of Events and Other Resources

To view more on React Forms, React Events, and JS Events in general, use the resources below:

- [Mozilla JS Event Introduction](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#ways_of_using_web_events)
- [React Forms](https://reactjs.org/docs/forms.html)
- [React Event Handling Events](https://reactjs.org/docs/handling-events.html)
- [All React Events](https://reactjs.org/docs/events.html)