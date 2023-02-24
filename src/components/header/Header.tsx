import React from 'react';
import { HeaderTitle } from "../headerTitle";
import { Score } from "../score";

const Header = (): JSX.Element => {
    return (
        <header className={"px-4 py-2 mt-8 w-96 mx-auto rounded border-1 border-b-blue-50 flex justify-between"}>
            <HeaderTitle />
            <Score />
        </header>
    );
};

export default Header;

