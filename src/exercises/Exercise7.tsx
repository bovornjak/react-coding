import * as React from "react";
import { ExerciseProps } from "../App";
import ExerciseLayout from "./ExerciseLayout";

const Child: React.FC = () => {
    return (
        <div>
            <h4>Child</h4>
        </div>
    );
};

const Parent: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div>
            <h3>Parent Start</h3>
            {children}
            <h3>Parent End</h3>
        </div>
    );
};

const Exercise7: React.FC<ExerciseProps> = ({ heading }) => {
    return (
        <ExerciseLayout heading={heading}>
            <Parent>
                <Child />
            </Parent>
        </ExerciseLayout>
    );
};

export default Exercise7;
