import { ExerciseProps } from "../App";
import ExerciseLayout from "./ExerciseLayout";

const Exercise1: React.FC<ExerciseProps> = ({ heading }) => {
    return (
        <ExerciseLayout heading={heading}>
            <div>React typescript is cool!</div>
        </ExerciseLayout>
    );
};

export default Exercise1;
