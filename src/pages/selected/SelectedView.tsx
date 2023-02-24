import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from "../../context/game/GameContext";
import { GameItem } from "../../components/gameItem";
import { GameItemData, gameItemData, gameResult } from "../../game";
import { GameItemSkeleton } from "../../components/gameItemSkeleton";
import { GameResult } from "../../components/gameResult";

const SelectedView = () => {
    const { selectedItem } = useContext(GameContext);
    const [gameItem, setGameItem] = useState<GameItemData>();
    const [iaGameItem, setIaGameItem] = useState<GameItemData>();
    const [gameIsWin, setGameIsWin] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const item = gameItemData.find((item) => item.name === selectedItem);
        setGameItem(item);

        const timer = setTimeout(() => {
            const iaItem = gameItemData[Math.floor(Math.random() * gameItemData.length)];
            setIaGameItem(iaItem);
            setGameIsWin(gameResult(item!, iaItem));
            setIsLoading(false);
        }, 700);

        return () => clearTimeout(timer);
    }, [selectedItem]);

    const PlayerGameItem = gameIsWin === "you win" ? <GameItem {...gameItem!} gameIsWin={gameIsWin}/> : <GameItem {...gameItem!} />
    const IaGameItem = gameIsWin === "you lose" ? <GameItem {...iaGameItem!} gameIsWin={gameIsWin}/> : <GameItem {...iaGameItem!} />

    return (
        <div className={"mx-12 flex justify-center"}>
            <div className={"flex flex-col gap-14"}>
                <div className={"w-96 flex justify-around"}>
                    <div className={"flex flex-col gap-6"}>
                        {PlayerGameItem}
                        <p className={"text-center text-white uppercase text-xs"}>you picked</p>
                    </div>
                    <div className={"flex flex-col gap-6"}>
                        {isLoading ? <GameItemSkeleton/> : IaGameItem}
                        <p className={"text-center text-white uppercase text-xs"}>the house picked</p>
                    </div>
                </div>
                {gameIsWin ?
                    <GameResult player={gameItem!} ia={iaGameItem!} result={gameIsWin}/> :
                    <div className={"h-28 mt-2"}></div>
                }
            </div>
        </div>
    );
};

export default SelectedView;
