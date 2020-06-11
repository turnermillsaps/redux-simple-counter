const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', e => dispatch({ type: "INCREMENT" }));

// Dispatch the "DECREMENT" action every time the -1 button is pressed
const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', e => dispatch({ type: "DECREMENT"}));

// Dispatch the "INCRBYFIVE" action every time the +5 button is pressed
const incrByFive = document.getElementById('incrByFive');
incrByFive.addEventListener('click', e => dispatch({ type: "INCRBYFIVE" }));

// Dispatch the "INCRBYFIVE" action every time the +5 button is pressed
const decrByFive = document.getElementById('decrByFive');
decrByFive.addEventListener('click', e => dispatch({ type: "DECRBYFIVE" }));