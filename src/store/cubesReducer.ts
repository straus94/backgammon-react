import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    firstCube: 3,
    secondCube: 4,
    isAllow: true
}

export const cubesSlice = createSlice({
    name: 'cubes',
    initialState,
    reducers: {
        throwCubes: (state) => {
            state.firstCube = Math.floor(Math.random() * 6) + 1;
            state.secondCube = Math.floor(Math.random() * 6) + 1;
            cubesSlice.actions.toggleAllow();
        },
        toggleAllow: (state) => {
            console.log(state);

            return {...state, isAllow: !state.isAllow};
        }
    }
});

export const {throwCubes, toggleAllow} = cubesSlice.actions;

export default cubesSlice.reducer;
