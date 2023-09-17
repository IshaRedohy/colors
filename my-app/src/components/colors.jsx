import { useState } from "react";

const Colors = () => {
    const colors = ["red", "yellow","orange","green","blue"]
    const [color, setColor] = useState('red')
    const handleClick = () => {
        setColor(colors[Math.floor(Math.random() * colors.length)])
    }
    return (
        <div style={{background: `${color}`}}>
            <h1>{color}</h1>
            <button onClick={handleClick}>Change</button>
        </div>
    );
}

export default Colors;