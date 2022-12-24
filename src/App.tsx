import * as React from 'react';
import './App.css';
import Exercise1 from './exercises/Exercise1';
import Exercise2 from './exercises/Exercise2';
import Exercise3 from './exercises/Exercise3';
import Exercise4 from './exercises/Exercise4';
import Exercise5 from './exercises/Exercise5';
import Exercise6 from './exercises/Exercise6';
import Exercise7 from './exercises/Exercise7';
import Exercise8 from './exercises/Exercise8';
import Exercise9 from './exercises/Exercise9';
import Exercise10 from './exercises/Exercise10';
import Exercise11 from './exercises/Exercise11';
import Exercise12 from './exercises/Exercise12';
import Exercise13 from './exercises/Exercise13';
import Exercise14 from './exercises/Exercise14';
import Exercise15 from './exercises/Exercise15';

export interface ExerciseProps {
    heading: string;
}

function App () {
    return (
        <div className="App">
            <Exercise15 heading="15. Controlled/Uncontrolled component" />
            <Exercise14 heading="14. Forms in react" />
            <Exercise13 heading="13. Fetch user data" />
            <Exercise12 heading="12. Codility" />
            <Exercise11 heading="11. Day of the week" />
            <Exercise10 heading="10. Fetch data from an API" />
            <Exercise9 heading="9. Counter app" />
            <Exercise8 heading="8. Sum of two numbers" />
            <Exercise7 heading="7. Dynamically add child components" />
            <Exercise6 heading="6. Update parent state" />
            <Exercise5 heading="5. Disable a button" />
            <Exercise4 heading="4. Two-way data binding" />
            <Exercise3 heading='3. Show/hide element on screen' />
            <Exercise2 heading="2. Display array of users" />
            <Exercise1 heading="1. Display simple text" />
        </div>
    );
}

export default App;
