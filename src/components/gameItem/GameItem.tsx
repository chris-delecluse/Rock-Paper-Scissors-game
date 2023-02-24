import React, { FC, useState } from 'react';
import { useNavigate } from "react-router";
import { GameItemData } from "../../game";

export type GameItemProps = & GameItemData & {
    handleSelectItem?: (name: string) => void;
}

const GameItem: FC<GameItemProps> = ({ imgPath, borderColor, name, handleSelectItem }) => {
    const [selected] = useState<string>(name);
    const navigate = useNavigate();

    const handleOnClick = () => {
        handleSelectItem!(selected);
        navigate(`/${selected}`);
    }

    return (
        <div onClick={handleOnClick}
             className={`z-10 rounded-full h-28 w-28 flex justify-center items-center bg-blue-50 border-black border-15 ${borderColor} cursor-pointer`}>
            <img src={imgPath} alt="rock, paper or scissors"/>
        </div>
    );
};

export default GameItem
