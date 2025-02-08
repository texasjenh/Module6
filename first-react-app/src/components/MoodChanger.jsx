import { useState } from "react";

function MoodChanger() {
    const [mood, setMood] = useState('happy');

    const handleWinLotto = () => {
        setMood('ecstatic')
    };

    const handleRunningLate = () => {
        let newMood = 'stressed';
        if (mood === 'stressed') newMood = 'really stressed';
        else if (mood === 'really stressed') newMood = 'giving up';

        setMood(newMood)
    }

    const handleGettingMarried = () => {
        let newMood = 'proposal';
        if (mood === 'proposal') newMood = 'parties';
        else if (mood === 'parties') newMood = 'ceremony';

        setMood(newMood)
    }

    return (
        <div className="MoodChanger componentBox">
            Current Mood: {mood}

            <button
                onClick={() => setMood('tired')}>
                    Stayed Up Late
            </button>

            <button
                onClick={() => setMood('hungry')}>
                    Skipped Lunch
            </button>

            <button
                onClick={() => setMood('focused')}>
                    Meet Deadlines
            </button>

            <button
                onClick={() => setMood('Maniacal')}>
                    Overly Excited
            </button>

            <button onClick={handleRunningLate}>Running Late</button>
            <button onClick={handleWinLotto}>Win Lotto</button>
            <button onClick={handleGettingMarried}>Getting Married</button>

        </div>
    )
}

export default MoodChanger;