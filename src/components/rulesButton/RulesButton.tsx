import React, { FC } from 'react';
import { RulesButtonProps } from "./rulesButton.types";

const RulesButton: FC<RulesButtonProps> = ({ handleIsOpen }): JSX.Element => {
    return (
        <button
            className={"uppercase text-white border-1 border-b-blue-50 rounded-md px-8 py-2 hover:bg-blue-50 hover:text-blue-700 transition-all ease-linear delay-150"}
            onClick={handleIsOpen}
        >
            Rules
        </button>
    );
};

export default RulesButton;
