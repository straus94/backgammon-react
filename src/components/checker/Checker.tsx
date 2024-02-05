import React from "react";
import './Checker.scss';

interface CheckerPropsInterface {
    index: number;
}

const BOX_SIZE = 55;

function Checker(props: CheckerPropsInterface) {
    const style = {
        bottom: `${props.index * BOX_SIZE / 3}px`,
        width: `${BOX_SIZE}px`,
        height: `${BOX_SIZE}px`
    }

    return <div className="checker" style={style}>

    </div>
}

export default Checker;