import paperImg from "../assets/img/icon-paper.svg";
import scissorsImg from "../assets/img/icon-scissors.svg";
import rockImg from "../assets/img/icon-rock.svg";
import { GameItemData } from "./gameItemData.types";

export const gameItemData: GameItemData[] = [
    { name: 'paper', imgPath: paperImg, borderColor: "border-blue-500" },
    { name: 'scissors', imgPath: scissorsImg, borderColor: "border-yellow-500" },
    { name: 'rock', imgPath: rockImg, borderColor: "border-red-500" },
];
