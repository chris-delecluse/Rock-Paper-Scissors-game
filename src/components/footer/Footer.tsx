import React, { useState } from 'react';
import { RulesButton } from "../rulesButton";
import { RulesModal } from "../rulesModal";

const Footer = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleRulesClick = (): void => setIsOpen(!isOpen);

    return (
        <>
            <div className={"text-center mb-12"}>
                <RulesButton handleIsOpen={handleRulesClick}/>
            </div>
            {isOpen && <RulesModal handleIsOpen={handleRulesClick}/>}
        </>
    );
};

export default Footer;
