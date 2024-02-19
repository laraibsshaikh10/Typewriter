
//In this activity, we are going to take a sentence and display it as an animation.



const sentence = "hello there from lighthouse labs";
//Let's loop through each character of the string and output it to the console.

function timeoutDelay (index) {
  //to go over the length of the sentence
  if (index < sentence.length) {
  
    setTimeout(() => {
    // print the char here
    //using this to print the sentence in one line as opposed to concole.log which would print each character in a separate line
    process.stdout.write(sentence[index]);
    //each time index increments by one
    timeoutDelay(index + 1);
    //each letter should be printed after a 50 ms gap
    }, 50) // <= 1s delay to make it noticeable. Can dial it down later.
  // add a newline character once the above statement is false
  } else {
    process.stdout.write('\n');
  }
}
//to start printing at index 0
timeoutDelay(0);









// setTimeout(() =>const sentence = "hello there from lighthouse labs";
//  {
//   console.log("w0r1d");
// }, 3000);