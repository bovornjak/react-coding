import * as React from 'react';
import ExerciseLayout from './ExerciseLayout';
import { ExerciseProps } from '../App';

const Exercise5: React.FC<ExerciseProps> = ({ heading }) => {
    const [value, setValue] = React.useState("");
    const handleInputChange = (e: any) => setValue(e.target.value);
    const handleSubmitButtonClick = () => alert(value);

    return (
        <ExerciseLayout heading={heading}>
            <input type="text" onChange={handleInputChange} />
            <button
                disabled={value.length <= 0}
                onClick={handleSubmitButtonClick}
                style={{ marginLeft: '8px' }}
            >
                Submit
            </button>
        </ExerciseLayout>
    );
};

export default Exercise5;
