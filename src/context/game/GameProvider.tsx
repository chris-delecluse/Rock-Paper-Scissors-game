import { FC, useState } from 'react';
import { GameContext } from './GameContext';
import { GameProviderProps } from "./gameContext.types";

const GameProvider: FC<GameProviderProps> = ({ children }) => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const handleSelectItem = (name: string) => {
        setSelectedItem(name);
    };

    return (
        <GameContext.Provider value={{ selectedItem, handleSelectItem }}>
            {children}
        </GameContext.Provider>
    );
};

export default GameProvider;
