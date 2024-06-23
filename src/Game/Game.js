import "./Game.css"
import React, {useState} from "react"
import Board from "../Board/Board";
import {calculateWinner} from "../winner";


export default function Game() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)

    const winner = calculateWinner(board)

    // const [countX, setNewCountX] = useState(0)
    // const [countO, setNewCountO] = useState(0)

    const handleClick = (index) => {
        const boardCopy = [...board]
        // Определить был ли победитель или ячейка уже нажата
        if (winner || boardCopy[index]) return
        // Определить чей ход Х ? О
        boardCopy[index] = xIsNext ? "X" : "O"
        // Обновить стейт
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }


    const startNewGame = () => {
        return (
            <button className={"start__ng"} onClick={() => {
                setBoard(Array(9).fill(null));
                setXIsNext(true);
                }
            }>Новая игра</button>
        )
    }

    return (
        <div>
            <div className={"header__text"}>
                <p className={"countX"}>Побед X: 0</p>
                <p className={"countO"}>Побед O: 0</p>
            </div>
            <div className={"wrapper"}>
                { startNewGame() }
                <Board squares={board} click={handleClick}/>
                {/*<p> { winner ? "Победитель: " + winner : "Следующий ход: " + (xIsNext ? "X" : "O") } </p>*/}
                <p>{ winner ? "Победитель: " + winner : "Следующий ход: " + ( xIsNext ? "X" : "O") }</p>
            </div>
        </div>
    )
}