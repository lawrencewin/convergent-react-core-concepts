import { useState } from "react"
import styles from "./AddListeners.module.css"

function OnClickDemo() {
    const [buttonClicks, setButtonClicks] = useState(0)
    const [pClicks, setPClicks] = useState(0)

    // Listening for events requires a function to be passed into the component you want to listen to.
    // These functions are called every time the listened component is clicked on.
    const handleButtonClick = () => setButtonClicks(buttonClicks + 1)
    const handlePClick = () => setPClicks(pClicks + 1)

    return (
        <div>
            <h3>onClick Event Demo</h3>
            <p>This is useful for detecting button and link clicks.</p>
            {/* This button takes in the handleButtonClick handler we defined above. */}
            <button onClick={handleButtonClick}>You've clicked this {buttonClicks} times.</button>
            {/* This paragraph also takes the handlePClick handler we defined above. */}
            <p onClick={handlePClick}>
                But you can listen for a click on any html element.
                {pClicks === 0 ? (
                    " Try clicking on this paragraph and see what happens."
                ) : (
                    <span>
                        You've clicked on this paragraph <strong>{pClicks}</strong> times.
                    </span>
                )}
            </p>
        </div>
    )
}

function OnChangeDemo() {
    const [defaultText, setDefaultText] = useState("")
    const [controlledText, setControlledText] = useState("")
    const [selectValue, setSelectValue] = useState("")
    const [radioValue, setRadioValue] = useState(null)

    const toSpongebobCase = (str) => {
        let ret = ""
        for (const c of str) {
            if (Math.random() > 0.5) {
                // toggle the char case
                if (c === c.toUpperCase()) ret += c.toLowerCase()
                else ret += c.toUpperCase()
            } else {
                ret += c
            }
        }
        return ret
    }

    // Runs when a radio button is clicked
    const handleRadioChange = (e) => setRadioValue(e.target.value)
    // Runs when the second text field is typed in
    const handleTextChange = (e) => setControlledText(toSpongebobCase(e.target.value))
    // Runs when a dropdown option is clicked
    const handleSelectChange = (e) => setSelectValue(e.target.value)

    return (
        <div>
            <h3>onChange Event Demo</h3>
            <p>
                This event is central to handling inputs and forms. It listens for any change in
                value for the binded input.
            </p>
            <p>Here's a simple example with a text field. This component isn't fully controlled.</p>
            <div>
                {/* Accepts a function with one parameter, where an JS Event object is passed in. Here, I define the arrow function inline. */}
                <input type="text" onChange={(event) => setDefaultText(event.target.value)} />
                <p>
                    <strong>Above Text Value:</strong> {defaultText}
                </p>
            </div>
            <p>
                What does it mean to be controlled? A controlled component is an input whose value
                is dictated by React. Here's a fully controlled component text field below.
            </p>
            <div>
                {/* We can control the input's value through our handler. Here, we're just spongebob-casing everything, but you can do much more. */}
                <input type="text" onChange={handleTextChange} value={controlledText} />
                <p>
                    <strong>Above Text Value (Spongebob-cased):</strong> {controlledText}
                </p>
            </div>
            <p>
                <code>onChange</code> extends past text inputs. It also works for selects:
            </p>
            <div>
                <select
                    placeholder="Choose the best build team case."
                    onChange={handleSelectChange}
                >
                    <option>AI Technology</option>
                    <option>Data Analysis</option>
                    <option>Social Impact</option>
                    <option>Productivity Technology</option>
                    <option>Business Technology</option>
                    <option>Internet of Things</option>
                    <option>Remote Technology</option>
                </select>
                <p>
                    <strong>The best Convergent build team case:</strong> {selectValue}
                </p>
            </div>
            <p>For radio buttons:</p>
            <div>
                {/* You might be wondering what this code below does. Here, I'm converting a JS object holding an id, label, and value into React 
                elements that include a label and an input. The reason I'm doing this is that there are values reused in rendering each radio-label 
                group, and each radio-label group is the same, save for the id of the input, the input's value, and the label text. Why copy-paste 
                a radio-label group thrice when you can just write this once? Plus, this scales for many more radio options. */}
                {[
                    { id: "op1", label: "Option 1", value: "Taylor Swift" },
                    { id: "op2", label: "Option 2", value: "TSwizzle" },
                    {
                        id: "op3",
                        label: "Option 3",
                        value: "The actress who plays Bombalurina in Tom Hooper's 'Cats'",
                    },
                ].map(({ id, label, value }) => {
                    return (
                        <div>
                            <label htmlFor={id}>{label}</label>
                            <input
                                type="radio"
                                id={id}
                                onChange={handleRadioChange}
                                value={value}
                                checked={radioValue === value}
                            />
                        </div>
                    )
                })}
                <p>
                    <strong>Best artist:</strong> {radioValue}
                </p>
            </div>
            <p>
                And more. The only input <code>onChange</code> doesn't work on is the file input,
                where a ref is used to get access to the user-selected file. That will be covered in
                another lesson.
            </p>
        </div>
    )
}

function OnFocusOnBlurDemo() {
    const [val, setVal] = useState(1)
    const [text, setText] = useState("Enter a number between 1 and 10.")

    const handleChange = (e) => setVal(e.target.value)
    const handleFocus = () => setText("Entering...")
    const handleBlur = (e) => {
        const num = parseFloat(e.target.value)
        if (num) {
            if (1 <= num && num <= 10) {
                setText(`${num} is between 1 and 10.`)
                setVal(num)
            } else {
                setText(`${num} is not between 1 and 10.`)
                setVal(Math.min(Math.max(1, num), 10))
            }
        } else {
            setText(`"${e.target.value}" is not parsable as a number.`)
        }
    }

    return (
        <div>
            <h3>On Focus and On Blur Demo</h3>
            <p>
                Sometimes, when you want to control the value of a text field, you'll want to run
                validation logic before or after a user has finished typing rather than as the user
                is typing. This is where the <code>onFocus</code> and <code>onBlur</code> events
                come into play.
            </p>
            <p>
                The focus event occurs once you enter a text field, and the blur event occurs once
                you leave the text field. Try it below.
            </p>
            <div>
                <input
                    type="text"
                    value={val}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                <p>
                    <strong>Message: {text}</strong>
                </p>
            </div>
        </div>
    )
}

function OnSubmitDemo() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Name: ${name}\nEmail: ${email}\nPlace form logic here.`)
    }

    return (
        <div>
            <h3>On Submit Demo</h3>
            <p>
                When working with an HTML form, the <code>onSubmit</code> element detects the click
                of a submit button inside the form.
            </p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label
                        htmlFor="onSubmitNameInput"
                        style={{ width: 55, display: "inline-block", marginBottom: 4 }}
                    >
                        Name:{" "}
                    </label>
                    <input
                        id="onSubmitNameInput"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label
                        htmlFor="onSubmitEmailInput"
                        style={{ width: 55, display: "inline-block", marginBottom: 4 }}
                    >
                        Email:{" "}
                    </label>
                    <input
                        id="onSubmitEmailInput"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}

function OnKeyPressDemo() {
    const [textDown, setTextDown] = useState("")
    const [textUp, setTextUp] = useState("")
    const [textPress, setTextPress] = useState("")

    const handleKeys = (e, type) => {
        let txt = "",
            fn = null
        switch (type) {
            case "press":
                txt = `Pressed ${e.key}`
                fn = setTextPress
                break
            case "down":
                txt = `Key Down ${e.key}`
                fn = setTextDown
                break
            case "up":
                txt = `Released ${e.key}`
                fn = setTextUp
                break
            default:
                return
        }
        fn(txt)
        setTimeout(() => fn(""), 3000)
    }
    return (
        <div>
            <h3>On Key Change Demo</h3>
            <p>
                Sometimes, you might even want to listen for a precise keyboard press, such as an
                "enter" or "shift". Javascript and React allow for this through the key press
                events: specifically the <code>onKeyPress</code>, <code>onKeyDown</code>, and{" "}
                <code>onKeyUp</code>.
            </p>
            <p>
                Each event is distinct. <code>onKeyDown</code> fires when any key is pressed,{" "}
                <code>onKeyUp</code> is fired when a key is released, and <code>onKeyPress</code> is
                fired when a character is produced from a key press. Try it in the textarea below.
            </p>
            <textarea
                onKeyDown={(e) => handleKeys(e, "down")}
                onKeyPress={(e) => handleKeys(e, "press")}
                onKeyUp={(e) => handleKeys(e, "up")}
                rows={10}
                cols={60}
                style={{
                    fontSize: 16,
                    fontFamily: "sans-serif",
                    lineHeight: "130%",
                }}
            ></textarea>
            <div style={{ marginTop: 8, marginBottom: 8 }}>
                <div>
                    Key Press:{" "}
                    <span className={`${styles.keyspan} ${textPress ? styles.in : styles.hidden}`}>
                        {textPress}
                    </span>
                </div>
                <div>
                    Key Down:{" "}
                    <span className={`${styles.keyspan} ${textDown ? styles.in : styles.hidden}`}>
                        {textDown}
                    </span>
                </div>
                <div>
                    Key Up:{" "}
                    <span className={`${styles.keyspan} ${textUp ? styles.in : styles.hidden}`}>
                        {textUp}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default function EventListeners() {
    return (
        <div>
            <h1>Useful Events</h1>
            <OnClickDemo />
            <OnChangeDemo />
            <OnFocusOnBlurDemo />
            <OnSubmitDemo />
            <OnKeyPressDemo />
            <h3>More Events:</h3>
            <p>
                You can view more React Events at the{" "}
                <a href="https://reactjs.org/docs/events.html#generic-events">
                    official ReactJS docs
                </a>
                , and you can read more on events on Mozilla's{" "}
                <a href="https://developer.mozilla.org/en-US/docs/Web/Events">JS docs</a>.
            </p>
        </div>
    )
}
