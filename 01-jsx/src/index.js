// 1) Import the React and ReactDOM libraries 
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell react to take control of that element 
const root = ReactDOM.createRoot(el);
// 4) Create a component
// syntax
// function App(){
//     const name =  'Samantha';
//     const age = 23;
//     return (
//         <h1>
//             Hi, my name is {name} and my age is {age}
//         </h1>

//     );
// }


// 5) Show the component on the screen
root.render(<App />);
