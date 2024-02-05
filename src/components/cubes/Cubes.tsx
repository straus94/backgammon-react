import React from "react";
import './Cubes.scss';
import {useSelector} from "react-redux";

interface CubesPropsInterface {
    throwCubes: () => void
}

function Cubes(props: CubesPropsInterface) {
    const state = useSelector((state: any) => state.cubes);
    console.log(state);
    const {firstCube, secondCube, isAllow} = useSelector((state: any) => state.cubes);
    console.log(isAllow);

    return <div className="cubes">
        <div className="cube">{firstCube}</div>
        <div className="cube">{secondCube}</div>
        <button className="throw" onClick={props.throwCubes} disabled={!isAllow}>Try cubes</button>
    </div>
}

export default Cubes;