import React, { useRef, useState } from 'react'
import "../src/style.css";


const data = ["", "", "", "", "", "", "", "", "",];

export default function App() {

    let [count, setCount] = useState(0);
    const checkTurn = useRef("X");
    const checkWin = useRef(null);
    const cellsContainer = useRef(null);



    const isAWin = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[2] != "") {
            checkWin.current.innerHTML = `Congo! The Winner is <span style = "color : ${data[1] === "X" ? 'skyblue' : 'orange'};">${data[0]}</span> <p>Refresh the page to play again</p>`;
            checkWin.current.style.color = "limegreen";
            checkWin.current.style.fontWeight = "700";
            cellsContainer.current.style.pointerEvents = "none";
        }
        else if (data[3] === data[4] && data[4] === data[5] && data[5] != "") {
            checkWin.current.innerHTML = `Congo! The Winner is <span style = "color : ${data[1] === "X" ? 'skyblue' : 'orange'};">${data[0]}</span> <p>Refresh the page to play again</p>`;
            checkWin.current.style.color = "limegreen";
            checkWin.current.style.fontWeight = "700";
            cellsContainer.current.style.pointerEvents = "none";
        }
        else if (data[6] === data[7] && data[7] === data[8] && data[8] != "") {
            checkWin.current.innerHTML = `Congo! The Winner is <span style = "color : ${data[1] === "X" ? 'skyblue' : 'orange'};">${data[0]}</span> <p>Refresh the page to play again</p>`;
            checkWin.current.style.color = "limegreen";
            checkWin.current.style.fontWeight = "700";
            cellsContainer.current.style.pointerEvents = "none";
        }
        else if (data[0] === data[3] && data[3] === data[6] && data[6] != "") {
            checkWin.current.innerHTML = `Congo! The Winner is <span style = "color : ${data[1] === "X" ? 'skyblue' : 'orange'};">${data[0]}</span> <p>Refresh the page to play again</p>`;
            checkWin.current.style.color = "limegreen";
            checkWin.current.style.fontWeight = "700";
            cellsContainer.current.style.pointerEvents = "none";
        }
        else if (data[1] === data[4] && data[4] === data[7] && data[7] != "") {
            checkWin.current.innerHTML = `Congo! The Winner is <span style = "color : ${data[1] === "X" ? 'skyblue' : 'orange'};">${data[0]}</span> <p>Refresh the page to play again</p>`;
            checkWin.current.style.color = "limegreen";
            checkWin.current.style.fontWeight = "700";
            cellsContainer.current.style.pointerEvents = "none";
        }
        else if (data[2] === data[5] && data[5] === data[8] && data[8] != "") {
            checkWin.current.innerHTML = `Congo! The Winner is <span style = "color : ${data[1] === "X" ? 'skyblue' : 'orange'};">${data[0]}</span> <p>Refresh the page to play again</p>`;
            checkWin.current.style.color = "limegreen";
            checkWin.current.style.fontWeight = "700";
            cellsContainer.current.style.pointerEvents = "none";
        }
        else if (data[0] === data[4] && data[4] === data[8] && data[8] != "") {
            checkWin.current.innerHTML = `Congo! The Winner is <span style = "color : ${data[1] === "X" ? 'skyblue' : 'orange'};">${data[0]}</span> <p>Refresh the page to play again</p>`;
            checkWin.current.style.color = "limegreen";
            checkWin.current.style.fontWeight = "700";
            cellsContainer.current.style.pointerEvents = "none";
        }
        else if (data[2] === data[4] && data[4] === data[6] && data[6] != "") {
            checkWin.current.innerHTML = `Congo! The Winner is <span style = "color : ${data[1] === "X" ? 'skyblue' : 'orange'};">${data[0]}</span> <p>Refresh the page to play again</p>`;
            checkWin.current.style.color = "limegreen";
            checkWin.current.style.fontWeight = "700";
            cellsContainer.current.style.pointerEvents = "none";
        }
    }

    const toggle = (e, num) => {
        if (e.target.innerText !== "") {
            return;
        }

        if (count == 8) {
            checkWin.current.innerHTML = `Ohh! It's is Draw`;
            checkWin.current.style.color = "orangered";
            checkWin.current.style.fontWeight = "700";
        }

        if (count % 2 === 0) {
            e.target.innerText = "X";
            e.target.style.color = "skyblue";
            data[num] = "X";
            setCount(++count);
            changeTurn("O");
            isAWin();
        } else {
            e.target.innerText = "O";
            e.target.style.color = "orange";
            data[num] = "O";
            setCount(++count);
            changeTurn("X");
            isAWin();
        }
    }

    const changeTurn = (turn) => {
        checkTurn.current.innerText = turn;
        checkTurn.current.style.color = turn === "O" ? "orange" : "skyblue";
    }


    return (
        <>
            <main>
                <div className="cells-container" ref={cellsContainer}>
                    <button className="cell br bb" onClick={(e) => { toggle(e, 0) }}></button>
                    <button className="cell bb br" onClick={(e) => { toggle(e, 1) }}></button>
                    <button className="cell bb" onClick={(e) => { toggle(e, 2) }}></button>
                    <button className="cell bb br" onClick={(e) => { toggle(e, 3) }}></button>
                    <button className="cell bb br" onClick={(e) => { toggle(e, 4) }}></button>
                    <button className="cell bb" onClick={(e) => { toggle(e, 5) }}></button>
                    <button className="cell br" onClick={(e) => { toggle(e, 6) }}></button>
                    <button className="cell" onClick={(e) => { toggle(e, 7) }}></button>
                    <button className="cell bl" onClick={(e) => { toggle(e, 8) }}></button>
                </div>
                <div className="info-container">
                    <div className="heading">
                        Tic Tac Toe
                    </div>
                    <div className="next-move" ref={checkWin}>
                        The Next Turn is of :<span ref={checkTurn}>X</span>
                    </div>
                </div>
            </main>
        </>
    )
}

