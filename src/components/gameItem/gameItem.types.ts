import { GameItemData } from "../../game";

export type GameItemProps = & GameItemData & {
    handleSelectItem?: (name: string) => void;
    gameIsWin?: string;
};
