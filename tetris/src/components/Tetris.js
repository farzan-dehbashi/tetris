import React from "react";
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import { createStage } from "../gameHelpers";
import { StyledTetrisWrapper } from "./styles/StyledTetris";
import { StyledTetris } from "./styles/StyledTetris";

const Tetris = () => {
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
        <div>
            <Stage stage={createStage()}/>
            <aside>
                <div>
                <Display text = "Score"/>
                <Display text = "Rows" />
                <Display text = "Level"/>
                </div>
                <StartButton />

            </aside>

        </div>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris;