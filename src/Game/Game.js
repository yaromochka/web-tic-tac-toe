import "./Game.css"
import React, { useState } from "react"
import Board from "../Board/Board";
import { calculateWinner } from "../winner";

let countX = 0
let countO = 0

export default function Game() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)

    const winner = calculateWinner(board)

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

    if (winner === "X") countX += 0.5
    if (winner === "O") countO += 0.5

    return (
        <div>
            <div className={"header__text"}>
                <p className={"countX"}>Побед X: { countX }</p>
                <p className={"countO"}>Побед O: { countO }</p>
            </div>
            <div className={"wrapper"}>
                { startNewGame() }
                <Board squares={board} click={handleClick} />
                <p>{ winner ? "Победитель: " + winner : "Следующий ход: " + ( xIsNext ? "X" : "O") }</p>
            </div>
        </div>
    )
}