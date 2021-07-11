/**
 * There are two ways for a component to access its props and set up its function parameters: accept the entire props object and use props.FIELD_NAME, or use
 * object destructuring syntax: ({ FIELD1, FIELD2, ... }). I prefer the latter, as it allows you to see all of the props being passed in within that component
 * and is less error-prone, although there is no actual difference between the two in terms of performance, just based on preference.
 */

//Object Destructuring
export default function displayCount({ count }) {
    return (
        <div style={{ borderStyle: "dotted" }}>
            <p> Counter: {count} </p>
        </div>
    )
}

//No destructuring
// export default function displayCount(props) {
//     return <div style={{borderStyle: "dotted"}}>
//         <p> Counter: {props.count} </p>
//     </div>
// }
