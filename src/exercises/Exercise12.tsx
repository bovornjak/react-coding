import * as React from "react";
import { ExerciseProps } from "../App";
import ExerciseLayout from "./ExerciseLayout";
import { UserData } from "./types";

const Exercise12: React.FC<ExerciseProps> = ({ heading }) => {
    const [loading, setLoading] = React.useState(false);
    const [searchText, setSearchText] = React.useState("");
    const [userData, setUserData] = React.useState<UserData | null>(null);

    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const fetchUserData = async () => {
        try {
            setLoading(true);
            await sleep(1000);
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const json = await response.json();
            json.map((data: UserData) => {
                if (data.name.toLowerCase().includes(searchText)
                    || data.phone.includes(searchText)
                    || data.email.toLowerCase().includes(searchText)
                    || data.website.toLowerCase().includes(searchText)) {
                    setUserData(data);
                }
                return null;
            });
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error(error);
        }
    };

    let searchTimeout: NodeJS.Timeout;
    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text =e.target.value;

        clearTimeout(searchTimeout);

        searchTimeout = setTimeout(() => {
            console.log(text);
            setSearchText(text);
        }, 500);
    };

    const handleSubmit = () => !!searchText && fetchUserData();

    return (
        <ExerciseLayout heading={heading}>
            <input
                placeholder="Search text"
                type="text"
                onChange={handleTextChange}
            />
            <button type="submit" onClick={handleSubmit}>
                {loading ? <>Loading...</> : <>Search</>}
            </button>
            {!loading && !!userData && (
                <>
                    <p><strong>Name: </strong> {userData.name}</p>
                    <p><strong>Phone:</strong> {userData.phone}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Website:</strong> {userData.website}</p>
                </>
            )}
        </ExerciseLayout>
    );
};

export default Exercise12;
