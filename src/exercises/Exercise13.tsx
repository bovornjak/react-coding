import * as React from "react";
import { ExerciseProps } from "../App";
import ExerciseLayout from "./ExerciseLayout";
import { UserData } from "./types";

const Exercise13: React.FC<ExerciseProps> = ({ heading }) => {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(json => setUsers(json));
    }, []);

    const filterUser = () => {
        const filterUser: UserData[] = users?.filter((u: UserData) => u.id === 1);
        return filterUser.length > 0 ? filterUser[0].name : "no result";
    };

    return (
        <ExerciseLayout heading={heading}>
            <ol>
                {users.map((u: UserData) => <li key={u.name}>{u.name}</li>)}
                <br />
                <div><strong>Filter user:</strong> {filterUser()}</div>
            </ol>
        </ExerciseLayout>
    );
};

export default Exercise13;
