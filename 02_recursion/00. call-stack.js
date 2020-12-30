/**
 * JavaScript engine uses a call stack to manage execution contexts:
 * the Global Execution Context and Function Execution Contexts.
 *
 * The call stack works based on the LIFO principle i.e., last-in-first-out.
 * When you execute a script, the JavaScript engine creates a Global Execution Context and pushes it on top of the call stack.
 * Whenever a function is called, the JavaScript engine creates a Function Execution Context for the function,
 * pushes it on top of the Call Stack, and starts executing the function.
 *
 * When the current function completes, the JavaScript engine pops it off the call stack and resumes the execution where
 * it left off in the last code listing.
 */

function wakeup() {
  takeShower();
  eatBreakfast();
  console.log("Ready to go to work.");
}

function takeShower() {
  return "Showering";
}

function eatBreakfast() {
  const meal = cookFood();
  return `eating ${meal}`;
}

function cookFood() {
  const items = ["eggs", "rice", "Oatmeal"];
  return items[Math.floor(Math.random() * items.length)];
}
