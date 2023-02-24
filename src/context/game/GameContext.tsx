import { createContext } from "react";
import { GameContextType } from "./gameContext.types";

export const GameContext = createContext<GameContextType>({
    selectedItem: null,
    handleSelectItem: () => {},
});
