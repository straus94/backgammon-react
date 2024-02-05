import React from "react";
import './Board.scss';
import Field from "../field/Field";
import Cubes from "../cubes/Cubes";
import {useDispatch} from "react-redux";
import {throwCubes, toggleAllow} from "../../store/cubesReducer";

const COUNT_FIELDS_ROW = 24;

function Board() {
    const dispatch = useDispatch();

    const fieldsUp = [];
    const fieldsDown = [];

    for (let i = 0; i < COUNT_FIELDS_ROW; i++) {
        i < (COUNT_FIELDS_ROW / 2)
            ? fieldsDown.push(<Field key={i} index={i} indexByPlayer={0}/>)
            : fieldsUp.push(<Field key={i} index={i} indexByPlayer={0}/>);
    }

    const onThrowCubes  = () => {
        dispatch(throwCubes())
        dispatch(toggleAllow())
    }

    return <div className="board">
        <div className="cubes"><Cubes throwCubes={onThrowCubes}/></div>
        <div className="up">
            {fieldsUp}
        </div>
        <div className="down">
            {fieldsDown}
        </div>
    </div>
}

export default Board;