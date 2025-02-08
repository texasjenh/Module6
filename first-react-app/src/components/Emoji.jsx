import { useState } from "react";

function Emoji () {

    const [emoji, setEmoji] = useState('😊')

    const handleSwithEmoji = () => {
        let newEmoji = emoji === '😊' ? "😒" : "😊"
        setEmoji(newEmoji)
    }

    return (
        <div className="Emoji componentBox">
            Emoji: {emoji}
            <button onClick={handleSwithEmoji}> Change Mood </button>
        </div>
    )
}

export default Emoji

