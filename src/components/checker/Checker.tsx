import React from "react";
import './Checker.scss';

interface CheckerPropsInterface {
    index: number;
    fieldIndex: number;
    onChangeField: (index: number) => void
}

const BOX_SIZE = 55;

function Checker(props: CheckerPropsInterface) {
    const style = {
        bottom: `${props.index * BOX_SIZE / 3}px`,
        width: `${BOX_SIZE}px`,
        height: `${BOX_SIZE}px`
    }

    const {onChangeField} = props;

    return <div className="checker" style={style} onClick={() => onChangeField(props.index)}>

    </div>
}

export default Checker;