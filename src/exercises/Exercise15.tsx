import React from "react";
import { ExerciseProps } from "../App";
import ExerciseLayout from "./ExerciseLayout";

const Exercise15: React.FC<ExerciseProps> = ({ heading }) => {
    const nameRef = React.createRef<HTMLInputElement>();

    const handleClick = () => console.log(nameRef, nameRef.current, nameRef.current?.value);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value);

    return (
        <ExerciseLayout heading={heading}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '25%' }}>
                {/* Uncontrolled Components */}
                <input placeholder="Name" ref={nameRef} />
                <button onClick={handleClick}>Submit</button>

                {/* Controlled Components */}
                <input placeholder="Age" onChange={handleInputChange} />
            </div>
        </ExerciseLayout>
    );
};

export default Exercise15;
