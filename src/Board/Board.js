import "./Board.css"
import React from "react"
import Square from "../Square/Square";


export default function Board() {
    return (
        <div className={"board"}>
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
        </div>
    )
}