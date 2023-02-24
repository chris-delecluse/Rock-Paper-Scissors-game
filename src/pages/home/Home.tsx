import React, { useContext } from 'react';
import { GameItem } from "../../components/gameItem";
import triangleImg from "../../assets/img/bg-triangle.svg";
import { GameContext } from "../../context/game/GameContext";
import { gameItemData } from "../../game";

const Home = () => {
    const { handleSelectItem } = useContext(GameContext);

    return (
        <div className={"mx-12 flex justify-center"}>
            <div className={"flex flex-wrap gap-24 justify-center w-96 relative"}>
                <img className={"absolute -top-50 -left-50 z-0 translate-y-10"}
                     src={triangleImg} alt="triangle background"/>
                {gameItemData.map((data, index) => (
                    <GameItem key={index} {...data} handleSelectItem={handleSelectItem}/>
                ))}
            </div>
        </div>
    );
};

export default Home;
