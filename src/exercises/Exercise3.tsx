import * as React from 'react';
import ExerciseLayout from './ExerciseLayout';
import { ExerciseProps } from '../App';

const Exercise3: React.FC<ExerciseProps> = ({ heading }) => {
    const [display, setDisplay] = React.useState(true);
    const handleToggleButtonClick = () => setDisplay(!display);

    return (
        <ExerciseLayout heading={heading}>
            <button onClick={handleToggleButtonClick}>
                {`${display ? 'Hide' : 'Show'} Element Below`}
            </button>
            <div style={{ display: `${display ? 'block' : 'none'}` }}>Toggle Challenge</div>
        </ExerciseLayout>
    );
};

export default Exercise3;
