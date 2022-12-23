import * as React from "react";
import { ExerciseProps } from "../App";
import ExerciseLayout from "./ExerciseLayout";

interface UserData {
    name: string;
    website: string;
    email: string;
    phone: string;
}

const Exercise10: React.FC<ExerciseProps> = ({ heading }) => {
    const [userData, setUserData] = React.useState<UserData | null>(null);

    const fetchUserData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const json = await response.json();
        setUserData(json);
    };

    React.useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <ExerciseLayout heading={heading}>
            <h3>User data</h3>
            <p>
                <strong>Name: </strong>
                <span>{userData?.name}</span>
            </p>
            <p>
                <strong>Website: </strong>
                <span>{userData?.website}</span>
            </p>
            <p>
                <strong>Email: </strong>
                <span>{userData?.email}</span>
            </p>
            <p>
                <strong>Phone: </strong>
                <span>{userData?.phone}</span>
            </p>
        </ExerciseLayout>
    );
};

export default Exercise10;
