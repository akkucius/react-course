//Assignment no 1

// Your task is to add the missing logic to a transformToObjects() function that transforms a list of numbers into a list of JavaScript objects.

// For the provided input [1, 2, 3] the transformToObjects() function should return [{val: 1}, {val: 2}, {val: 3}].

// function transformToObjects(numberArray) {
//     // Todo: Add your logic
//     // should return an array of objects    
//     return numberArray.map((numData) => {          
//       return {'val' : numData}
//     }); 
// }

//Assignment no 2

// This is a quick exercise to get started with React and JSX code: Your task is to edit the JSX code of a provided React component such that it displays a h1 element with the text "Exercise done!" on the page.

// Important: The custom JSX code must be added inside the existing <div> element.

// import React from 'react';

// // don't change the Component name "App"
// export default function App() {
//     return (
//         <div>
//             <p>Practicing React...</p>
//             <h1>Exercise Done!</h1>
//         </div>
//     );
// }

// Assignment no 3

// Your task is to build a custom <ExerciseComponent /> that outputs the text "First exercise - done!" on the screen.

// Use the empty ExerciseComponent.js file for your new component code and output this component inside the already existing App component thereafter (replace the existing JSX code in App with your own component).

// The final app should display this basic output: First exercise - done!
// App.js
// import React from 'react';
// import ExerciseComponent from "./ExerciseComponent";
// // don't change the Component name "App"
// export default function App() {
//     return <ExerciseComponent> </ExerciseComponent>
// }


// exerciseComponent.js

// import React from 'react';
// // Todo: Add your component code
// // Important: Use export default function MyCmp() { ... }, don't define "export default" on a separate line!

// export default function ExerciseComponent(){
//     return <p>First exercise - done!</p>;
// };