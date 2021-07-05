/** 
 * - Promises and Async / Await -
 * 
 * Most functions operate quickly, running the written code sequentially and returning a value quickly. However, some operations require 
 * us to wait: from reading files to making a network request to another server. 
 * 
 * For example, lets say we want to use a function that downloads an image for us. Images can get pretty large, so the download will take time.
 */ 

// This will take time
function downloadImage (url) {}

// We'll use our "download function" here
let url = "https://www.somewebsite.com/someimage.jpg"
let imageBits = downloadImage(url)
// ... some other important code to run ... 
// doSomethingWith(imageBits) 

/**
 * There's two of ways to go about writing code for such a download.
 * 
 * We can try method #1: blocking. Blocking means that while we download our image, we don't move forward until the image download is complete.
 * An implementation of blocking might look like this
 * 
 * let imageBits = downloadImage(url)
 * while (imageBits < FULLY_DOWNLOADED_SIZE) {
 *   continue // wait for the imageBits to be fully downloaded
 * }
 * ... important code ...
 * doSomethingWith(imageBits)
 * 
 * This might not seem so bad at first due to its simplicity, but the fact is that this highly inefficient. If the important code is independent from 
 * the download, then waiting for the download to complete is time wasted. Plus, blocking means that the program grinds completely to the halt, which isn't
 * what we want.
 * 
 * 
 * The second, and better way is to use a Promise. Rather than waiting for something to complete before moving forward, we program such that we start a 
 * download and "promise" that at some point in the future, the "promise" of a full download will be completed. Execution can continue once we make that 
 * "promise", and on the "promise" being fulfilled, or "resolved", we're notified and are able to run dependent code afterwards.
 * 
 * Below is a promise implementation of the above code 
 */

function downloadImageWithPromise (url) {
    return new Promise((resolve, reject) => {
        // The code below will take 3 seconds to run
        setTimeout(() => {
            const image = new ArrayBuffer(1000) // imagine that this is our image we took 3 sec to download
            const isGood = () => Math.random() > 0.25
            if (isGood) {
                resolve(image) // Once the image is done, we complete the promise by passing the image into this resolve function
            } else {
                reject("Image was bad") // If the image is bad (1/4 of the time), then we "reject", or fail to fulfill our promise with a reason, akin to throwing an error
            }
        }, 3000)
    })
}
// We have our new downloadImageWithPromise method, but how do we use our image once it's downloaded
url = "https://www.somewebsite.com/someimage.jpg"
const imagePromise = downloadImageWithPromise(url) // This function returns a promise, not an image. How do we run code dependent on that image?
// ... some independent important code ... <--- This will run once we make a promise. No waiting involved
imagePromise.then((imageBits) => { 
    // The answer to the above question is promise chaining with "then". Here, we pass in a function that will run once the image is complete. 
    console.log("Donwload complete")
    // doSomethingImportantWith(imageBits)
}).catch((error) => {
    // If the promise is rejected, we can catch the rejection here
    console.error(error)
})

// You can work with promises in two ways. The first way is through .then() and .catch() chaining above. The second way is through asynchronous functions.
// Below, you will see async code that downloads "http://www.somewebsite.com/someimage.jpg" like above.

async function runAsyncCode (url) {
    try {
        const imageBits = await downloadImageWithPromise(url)
        console.log("Download complete")
        // doSomethingImportantWith(imageBits)
    } catch (error) {
        console.error(error)
    }
}
runAsyncCode("http://www.somewebsite.com/someimage.jpg")

// Note the two keywords, async and await, in the above code block. 
// The "async" denotes that a function is asynchronous and will be working with promises. 
//   The "async" keyword next to a function also denotes that if the function has a return value, the value will be wrapped in a promise. Take the example 
//   below:

// Note that the async keyword also works with arrow functions
const asyncRet = async (x, y) => x + y // same as below
const promiseRet = (x, y) => new Promise( (resolve, reject) => resolve(x + y) ) // same as above

// The "await" next to the "downloadImageWithPromise" function abstracts the .then() chaining, where the function will wait for the promise to resolve and 
//   assign the full result to imageBits. This way, you can write asynchronous code just as if it was regular. 
//   "Await" is only usable in asynchronous functions, so if you're working with asynchronous code in a synchronous scope, you'll either need to use .then() 
//   chaining or wrap the async code you want to run in an async function.