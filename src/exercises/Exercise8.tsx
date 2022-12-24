import * as React from "react";
import { ExerciseProps } from "../App";
import ExerciseLayout from "./ExerciseLayout";

const Exercise8: React.FC<ExerciseProps> = ({ heading }) => {
    const [value1, setValue1] = React.useState(0);
    const [value2, setValue2] = React.useState(0);
    const [total, setTotal] = React.useState(0);

    const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => setValue1(+e.target.value);
    const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => setValue2(+e.target.value);
    const handleButtonClick = () => setTotal(value1 + value2);

    return (
        <ExerciseLayout heading={heading}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '25%' }}>
                <input
                    placeholder="First number"
                    type="number"
                    name="value1"
                    onChange={handleChange1}
                />
                <input
                    placeholder="Second number"
                    type="number"
                    name="value2"
                    onChange={handleChange2}
                />
                <button onClick={handleButtonClick}>Add two numbers</button>
                <p>{total}</p>
            </div>
        </ExerciseLayout>
    );
};

export default Exercise8;
