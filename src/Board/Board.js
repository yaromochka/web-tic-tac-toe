import "./Board.css"
import React from "react"
import Square from "../Square/Square";


export default function Board( {squares, click} ) {
    return (
        <div className={"board"}>
            {
                squares.map((square, i) =>
                    <Square key={i} value={square} onClick={() => click(i)}/>)
            }
        </div>
    )
}