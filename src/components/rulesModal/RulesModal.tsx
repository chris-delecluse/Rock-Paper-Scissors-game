import React, { FC } from 'react';
import { RulesModalProps } from "./rulesModal.types";
import rulesImg from "../../assets/img/image-rules.svg";
import closeIcon from "../../assets/img/icon-close.svg";

const RulesModal: FC<RulesModalProps> = ({ handleIsOpen }): JSX.Element => {
    return (
        <div className={"h-screen w-full absolute bg-blue-50 flex flex-col justify-between z-20"}>
            <h2 className={"uppercase text-center mt-12 text-4xl"}>rules</h2>

            <div className={"flex justify-center"}>
                <img src={rulesImg} alt="rules of the rock paper scissors game"/>
            </div>

            <div className={"text-center"}>
                <img className={"mx-auto mb-12 cursor-pointer bg-blue-100 rounded-full p-2 hover:bg-blue-200 transition-all ease-linear delay-150"}
                    onClick={handleIsOpen} src={closeIcon} alt="close icon"/>
            </div>
        </div>
    );
};

export default RulesModal;
