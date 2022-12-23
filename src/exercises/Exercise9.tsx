import * as React from "react";
import { ExerciseProps } from "../App";
import ExerciseLayout from "./ExerciseLayout";

const Exercise9: React.FC<ExerciseProps> = ({ heading }) => {
    const [counter, setCounter] = React.useState(0);

    const handleIncrementClick = () => setCounter(counter + 1);
    const handleDecrementClick = () => setCounter(counter - 1);

    return (
        <ExerciseLayout heading={heading}>
            <h3>Counter: {counter}</h3>
            <button onClick={handleIncrementClick}>Increment</button>
            <button onClick={handleDecrementClick}>Decrement</button>
        </ExerciseLayout>
    );
};

export default Exercise9;
