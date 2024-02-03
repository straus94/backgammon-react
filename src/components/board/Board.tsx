import React from "react";
import './Board.scss';
import Field from "../field/Field";

const COUNT_FIELDS_ROW = 24;

function Board() {

    const fieldsUp = [];
    const fieldsDown = [];

    for (let i = 0; i < COUNT_FIELDS_ROW; i++) {
        i < (COUNT_FIELDS_ROW / 2)
            ? fieldsDown.push(<Field key={i} index={i} indexByPlayer={0}/>)
            : fieldsUp.push(<Field key={i} index={i} indexByPlayer={0}/>);
    }


    return <div className="board">
        <div className="up">
            {fieldsUp}
        </div>
        <div className="down">
            {fieldsDown}
        </div>
    </div>
}

export default Board;