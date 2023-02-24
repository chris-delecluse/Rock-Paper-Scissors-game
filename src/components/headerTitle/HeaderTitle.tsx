import React from 'react';

const HeaderTitle = (): JSX.Element => {
    return (
        <div className={"flex flex-col justify-center gap-0 mx-0 p-0 leading-4 text-white"}>
            <p className={"uppercase"}>Rock</p>
            <p className={"uppercase"}>Paper</p>
            <p className={"uppercase"}>Scissors</p>
        </div>
    );
};

export default HeaderTitle;
