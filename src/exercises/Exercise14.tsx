import * as React from "react";
import { ExerciseProps } from "../App";
import ExerciseLayout from "./ExerciseLayout";

const Exercise14: React.FC<ExerciseProps> = ({ heading }) => {
    const [value, setValue] = React.useState({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = { [e.target.name]: e.target.value };
        console.log(data);
        setValue({ ...value, ...data });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submit: ', value);
    };

    return (
        <ExerciseLayout heading={heading}>
            <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                    <input
                        placeholder="Name"
                        type="text"
                        name="name"
                        onChange={handleChange}
                    />
                    <input
                        placeholder="Age"
                        type="number"
                        min="1"
                        name="age"
                        onChange={handleChange}
                    />
                    <input
                        placeholder="Date"
                        type="date"
                        name="date"
                        onChange={handleChange}
                    />
                    <input
                        placeholder="File"
                        type="file"
                        name="file"
                        onChange={handleChange}
                    />
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </div>
            </form>
        </ExerciseLayout>
    );
};

export default Exercise14;
