import * as React from 'react';
import { ExerciseProps } from '../App';

const ExerciseLayout: React.FC<React.PropsWithChildren<ExerciseProps>> = ({ heading, children }) => {
    return (
        <>
            <h3>{heading}</h3>
            <div>
                {children}
            </div>
        </>
    );
};

export default ExerciseLayout;
