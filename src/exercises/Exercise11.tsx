import * as React from "react";
import { ExerciseProps } from "../App";
import ExerciseLayout from "./ExerciseLayout";

const Exercise11: React.FC<ExerciseProps> = ({ heading }) => {
    const [dayOfWeek, setDayOfWeek] = React.useState("");
    const [numberOfDays, setNumberOfDays] = React.useState(0);
    const [result, setResult] = React.useState("[result]");

    const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const handleDayOfWeekChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = e.target.value;
        setDayOfWeek(val);
        setResult(findNextDayOfWeek(val, numberOfDays));
    };
    const handleNumberOfDaysChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = +e.target.value;
        setNumberOfDays(val);
        setResult(findNextDayOfWeek(dayOfWeek, val));
    };

    const findNextDayOfWeek = (dayOfWeek: string, numberOfDays: number) => {
        if (!dayOfWeek) return "Please select day of week";

        // find index
        let nextDayOfWeekIndex = 0;
        for (let i = 0; i < daysOfTheWeek.length; i++) {
            if (daysOfTheWeek[i] === dayOfWeek) {
                nextDayOfWeekIndex = (i + numberOfDays) % 7;
                break;
            }
        }

        return daysOfTheWeek[nextDayOfWeekIndex];
    };

    return (
        <ExerciseLayout heading={heading}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
                <select name="dayOfWeek" value={dayOfWeek} onChange={handleDayOfWeekChange}>
                    <option value="">Select day of week</option>
                    {daysOfTheWeek.map((day) => <option key={day} value={day}>{day}</option>)}
                </select>
                <input type="number" min="0" value={numberOfDays} onChange={handleNumberOfDaysChange} />
                <p>{result}</p>
            </div>
        </ExerciseLayout>
    );
};

export default Exercise11;
