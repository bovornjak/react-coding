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

export interface ExerciseProps {
    heading: string;
}

function App () {
    const divider = <div>-----------------------------------------</div>;

    return (
        <div className="App">
            <Exercise1 heading="1. Display simple text" />
            {divider}
            <Exercise2 heading="2. Display array of users" />
            {divider}
            <Exercise3 heading='3. Show/hide element on screen' />
            {divider}
            <Exercise4 heading="4. Two-way data binding" />
            {divider}
            <Exercise5 heading="5. Disable a button" />
            {divider}
            <Exercise6 heading="6. Update parent state" />
            {divider}
            <Exercise7 heading="7. Dynamically add child components" />
            {divider}
            <Exercise8 heading="8. Sum of two numbers" />
            {divider}
            <Exercise9 heading="9. Counter app" />
            {divider}
            <Exercise10 heading="10. Fetch data from an API" />
            {divider}
        </div>
    );
}

export default App;
