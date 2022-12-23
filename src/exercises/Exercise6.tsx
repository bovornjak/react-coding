import * as React from "react";
import { ExerciseProps } from "../App";
import ExerciseLayout from "./ExerciseLayout";

interface ChildProps {
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Child: React.FC<ChildProps> = ({ setValue }) => {
    return (
        <div style={{ border: '1px solid black', padding: '8px' }}>
            <div>Child</div>
            <button onClick={() => setValue("Parent has been updated!")}>Change parent value</button>
        </div>
    );
};

const Exercise6: React.FC<ExerciseProps> = ({ heading }) => {
    const [value, setValue] = React.useState("I need to be updated from my child");

    return (
        <ExerciseLayout heading={heading}>
            <div style={{ border: '1px solid black', padding: '8px', marginBottom: '8px' }}>
                <div>Parent</div>
                <span>{value}</span>
            </div>
            <Child setValue={setValue} />
        </ExerciseLayout>
    );
};

export default Exercise6;
