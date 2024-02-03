import React from "react";
import './Fiels.scss';
import Checker from "../checker/Checker";

export interface FieldPropsInterface {
    indexByPlayer: number;
    index: number;
}

function Field(props: FieldPropsInterface) {

    const checkers = [];
    console.log(props);

    if (!props.index) {
        for (let i = 0; i < 15; i++) {
            checkers.push(<Checker key={i} index={i}/>)
        }
    }

    return <div className="field">
        <div className="checkers">{checkers}</div>
    </div>
}

export default Field;