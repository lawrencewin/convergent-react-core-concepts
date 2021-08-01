/**
 * - Flexbox Layout -
 *
 * Flexbox is a handy styling module to know when developing for web or mobile as it aims to provide a more efficient way to 
 * lay out, align and distribute space among items in a container, even when the size is unknown in order to give the container
 * the ability to alter its items' width/height to best fill the available space (mostly to accomodate to all kind of display 
 * devices and screen sizes). A flex container expands items to fill available free space or shrinks them to prevent overflow.
 *
 * Read more about Flexbox here: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 * 
 * Below we provide a simple example of how to use flexbox to style a container with multiple items. The flex container or 
 * parent in this case is the <div> section and the flex items or children in this example are the <SimpleCard> components
 * within the <div> tag.
 * 
 * Properties of the Parent include:
 * - display: flex; (set to flex to indicate a flex container)
 * - flexDirection: row | row-reverse | column | column-reverse;
 * - flexWrap: nowrap | wrap | wrap-reverse;
 * - justifyContent: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
 * - alignItems: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;
 * - alignContent: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;
 * 
 * Read more about the what each of these options do at https://css-tricks.com/snippets/css/a-guide-to-flexbox/ and feel free to
 * play around with the styling by changing/adding values below to see how it affects the UI. 
 */


import React from "react"
import SimpleCard from "./styling_components/SimpleCard"

export default function Flexbox() {
    return (
        <div>
            <h1>Flexbox Example</h1>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
                <SimpleCard title="Card 1" />
                <SimpleCard title="Card 2" />
                <SimpleCard title="Card 3" />
            </div>
        </div>
    )
}
