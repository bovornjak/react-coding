import * as React from 'react';
import ExerciseLayout from './ExerciseLayout';
import { ExerciseProps } from '../App';

const Exercise4: React.FC<ExerciseProps> = ({ heading }) => {
    const [value, setValue] = React.useState("");
    const handleInputChange = (e: any) => setValue(e.target.value);

    return (
        <ExerciseLayout heading={heading}>
            <input
                type="text"
                placeholder="Enter Text"
                value={value}
                onChange={handleInputChange}
            />
            <p>{value}</p>
        </ExerciseLayout>
    );
};

export default Exercise4;
