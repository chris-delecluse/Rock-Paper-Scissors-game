import React from 'react';

const BorderWrapper = (): JSX.Element => {
    return (
        <>
            <div className={"absolute border-15 border-gray-300 border-opacity-5 rounded-full h-36 w-36"}></div>
            <div className={"absolute border-15 border-gray-300 border-opacity-10 rounded-full h-44 w-44"}></div>
            <div className={"absolute border-15 border-gray-300 border-opacity-25 rounded-full h-52 w-52"}></div>
        </>
    );
};

export default BorderWrapper;
