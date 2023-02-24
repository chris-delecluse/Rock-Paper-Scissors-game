import React, { FC } from 'react';
import { useNavigate } from "react-router";
import { GameResultType } from "./gameResult.types";

const GameResult: FC<GameResultType> = ({ player, ia, result }) => {
    const navigate = useNavigate();

    const handlePlayAgain = () => navigate("/");

    return (
        <div className={"flex flex-col mx-20 gap-6"}>
            <p className={"uppercase text-5xl text-center text-white"}>
                {result}
            </p>
            <button className={"uppercase bg-white rounded py-3 hover:bg-gray-300 transition-all ease-linear delay-150"}
                    onClick={handlePlayAgain}>
                play again
            </button>
        </div>
    );
};

export default GameResult;
