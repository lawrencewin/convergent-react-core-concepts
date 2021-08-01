/**
 * - Margins -
 *
 * Margins are used to create space around elements, outside of any defined borders. 
 * 
 * You can specify the margin on all four sides of the element with these properties:
 * - margin-top
 * - margi n-right
 * - margin-bottom
 * - margin-left
 * 
 * You can specify the values for each of these properties in 4 different ways:
 * - auto: browser calculates the margin
 * - length: specify a margin in px, pt, cm, etc.
 * - %: specifies a margin in % of the width of the containing element
 * - inherit: specifies that the margin should be inherited from the parent element
 * 
 * Negative values are also allowed which rather than placing it farther from its neighbors it
 * will place it closer.
 * 
 * You can also define margins using a few shorthand properties for example:
 * - margin: 25px 50px 75px 100px
 *      - This means that top margin is 25px, right margin is 50px, bottom margin is 75px, left margin is 100px
 * - margin: 25px 50px 75px
 *      - This means that top margin is 25px, right & left margins are 50px, and bottom margin is 75px
 * - margin: 25px 50px
 *      - This means that top & bottom margin is 25px and right & left margins are 50px
 * - margin: 25px
 *      - This means that all four margins are 25px
 * 
 * Feel free to play around with the margins below to see how it affects the red box!
 */

export default function Margins() {
    return (
    <div>
        <h1>Margins Example</h1>
        <div style={{border: '2px solid red', margin: '25px 300px 25px'}}>
            <h2 style={{textAlign: 'center'}}>Hello Convergent friends!</h2>
        </div>
    </div>
    );

}