import { useEffect, useState } from "react";
import "./main.css";
export default function TictakApp() {
    const [value, setValue] = useState(new Array(9).fill(""));
    const [turnx, setTurn] = useState(true);
    const [winner, setStatus] = useState("");
    const [winningcell, setwinningcell] = useState([]);
    function handleclick(idx) {
        if (winner) return;
        if (!value[idx]) {
            let btnarray = [...value];
            btnarray[idx] = turnx ? "X" : "O";
            setTurn(!turnx);
            setValue(btnarray);
        }
    }

    const winneing = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [0, 4, 8],
        [2, 4, 6],
        [2, 5, 8]
    ];

    useEffect(
        function winneingpatter() {
            for (let i = 0; i < winneing.length; i++) {
                const [x, y, z] = winneing[i];

                if (value[x] && value[x] == value[y] && value[x] == value[z]) {
                    setStatus("win");
                    setwinningcell([x, y, z]);
                    return;
                }
            }
            if (value.every(cell => cell !== "")) {
                setStatus("draw");
            }
        },
        [value]
    );

    function handlereset() {
        const resetArray = new Array(9).fill("");
        setValue(resetArray);
        setTurn(true);
        setStatus("");
        setwinningcell([]);
    }
    return (
        <div className="main">
            <div className="row">
                <button className={`btn ${winningcell.includes(0) ? "win-btn" : ""} `} onClick={() => handleclick(0)}>
                    {value[0]}
                </button>
                <button className={`btn ${winningcell.includes(1) ? "win-btn" : ""} `} onClick={() => handleclick(1)}>
                    {value[1]}
                </button>
                <button className={`btn ${winningcell.includes(2) ? "win-btn" : ""} `} onClick={() => handleclick(2)}>
                    {value[2]}
                </button>
            </div>
            <div className="row">
                <button className={`btn ${winningcell.includes(3) ? "win-btn" : ""} `} onClick={() => handleclick(3)}>
                    {value[3]}
                </button>
                <button className={`btn ${winningcell.includes(4) ? "win-btn" : ""} `} onClick={() => handleclick(4)}>
                    {value[4]}
                </button>
                <button className={`btn ${winningcell.includes(5) ? "win-btn" : ""} `} onClick={() => handleclick(5)}>
                    {value[5]}
                </button>
            </div>
            <div className="row">
                <button className={`btn ${winningcell.includes(6) ? "win-btn" : ""} `} onClick={() => handleclick(6)}>
                    {value[6]}
                </button>
                <button className={`btn ${winningcell.includes(7) ? "win-btn" : ""} `} onClick={() => handleclick(7)}>
                    {value[7]}
                </button>
                <button className={`btn ${winningcell.includes(8) ? "win-btn" : ""} `} onClick={() => handleclick(8)}>
                    {value[8]}
                </button>
            </div>
            {winner == "win" ? (<p>Winner is {turnx ? "O" : "X"}</p>
            ) :
                winner == "draw" ? (<p>Draw</p>) :
                    (<p>{turnx ? "Turn X" : "Tun  O"}
                    </p>
                    )}
            <button onClick={handlereset} className="reset">reset</button>
        </div>
    );



}
