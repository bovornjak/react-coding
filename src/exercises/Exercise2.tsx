import { ExerciseProps } from "../App";
import ExerciseLayout from "./ExerciseLayout";

const Exercise2: React.FC<ExerciseProps> = ({ heading }) => {
    const users = [
        { name: "Champ", id: 1 },
        { name: "Pui", id: 2 },
        { name: "Plus", id: 3 },
    ];

    return (
        <ExerciseLayout heading={heading}>
            <h4>Users</h4>
            <ul>
                {users.map(u => <li key={u.id}>{u.name}</li>)}
            </ul>
        </ExerciseLayout>
    );
};

export default Exercise2;
