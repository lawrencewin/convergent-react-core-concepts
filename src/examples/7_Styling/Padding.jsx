/**
 * - Padding -
 *
 * Padding is used to create space around an element's content, inside of any defined borders.
 * 
 * Similarly to margins, padding has four different properties for specifying the padding for 
 * each side of the element:
 * - paddingTop
 * - paddingRight
 * - paddingBottom
 * - paddingLeft
 * 
 * Each of the padding properties can be specified the following ways:
 * - length: specify padding in px, pt, cm, etc.
 * - %: specify padding in terms of % of the width of the containing element
 * - inherit: specifies padding should be inherited from the parent element
 * 
 * Similar padding shorthand properties apply for padding as margins:
 * 
 * - padding: 25px 50px 75px 100px
 *      - This means that top padding is 25px, right padding is 50px, bottom padding is 75px, left padding is 100px
 * - padding: 25px 50px 75px
 *      - This means that top padding is 25px, right & left paddings are 50px, and bottom padding is 75px
 * - padding: 25px 50px
 *      - This means that top & bottom padding is 25px and right & left paddings are 50px
 * - padding: 25px
 *      - This means that all four padding propertiess are 25px
 * 
 * Feel free to play around with the paddings below to see how it affects the red box!
 */

export default function Padding() {
    return (
        <div>
            <h1>Padding Example</h1>
            <div style={{border: '2px solid red', padding: '20px 100px'}}>
                <h2 style={{textAlign: 'center'}}>Hello Convergent friends!</h2>
            </div>
        </div>
        );
}
