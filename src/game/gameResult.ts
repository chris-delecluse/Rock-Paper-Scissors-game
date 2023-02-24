import { GameItemData } from "./gameItemData.types";

export const gameResult = (player: GameItemData, ia: GameItemData) => {
    const win: string = "you win";
    const lose: string = "you lose";
    const draw: string = "draw";

    let score: string | null = localStorage.getItem("gameResult");
    if (!score) score = "0";

    let result: string = "";

    if (player.name === ia.name) result = draw;
    if (player.name === "paper" && ia.name === "rock") result = win;
    if (player.name === "paper" && ia.name === "scissors") result = lose;
    if (player.name === "rock" && ia.name === "paper") result = lose;
    if (player.name === "rock" && ia.name === "scissors") result = win;
    if (player.name === "scissors" && ia.name === "paper") result = win;
    if (player.name === "scissors" && ia.name === "rock") result = lose;

    if (result === win) localStorage.setItem("gameResult", (~~score + 1).toString());

    return result;
}
