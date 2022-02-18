import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetrominus";


const cell = ({ type }) => (
    <StyledCell type={'L'} color={TETROMINOS['L'].color}> CELL
    </StyledCell>
)
export default cell;