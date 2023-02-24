import React, { useEffect, useState } from 'react';

const Score = (): JSX.Element => {
    const [score, setScore] = useState<string>(localStorage.getItem("gameResult") ?? "0");

    return (
        <div className={"flex flex-col items-center bg-blue-50 p-2 px-4 rounded"}>
            <p className={"uppercase text-xs text-blue-700"}>Score</p>
            <p className={"text-2xl font-bold text-gray-700"}>{score}</p>
        </div>
    );
};

export default Score;
