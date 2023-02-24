import React, { FC, useState } from 'react';
import { useNavigate } from "react-router";
import { BorderWrapper } from "../borderWrapper";
import { GameItemProps } from "./gameItem.types";

const GameItem: FC<GameItemProps> = ({ imgPath, borderColor, name, handleSelectItem, gameIsWin }) => {
    const [selected] = useState<string>(name);
    const navigate = useNavigate();

    const handleOnClick = () => {
        handleSelectItem!(selected);
        navigate(`/${selected}`);
    }

    return (
        <div onClick={handleOnClick}
             className={`z-10 rounded-full h-28 w-28 flex justify-center items-center bg-blue-50 border-15 ${borderColor} cursor-pointer relative}`}>
            <img src={imgPath} alt="rock, paper or scissors"/>
            {gameIsWin && <BorderWrapper/>}
        </div>
    );
};

export default GameItem
