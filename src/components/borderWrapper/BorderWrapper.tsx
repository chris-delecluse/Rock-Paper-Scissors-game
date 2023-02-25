import React from 'react';

const BorderWrapper = (): JSX.Element => {
    return (
        <>
            <div className={"absolute border-100 border-gray-50 border-opacity-5 rounded-full h-36 w-36"}></div>
            <div className={"absolute border-150 border-gray-50 border-opacity-5 rounded-full h-36 w-36"}></div>
            <div className={"absolute border-200 border-gray-50 border-opacity-5 rounded-full h-36 w-36"}></div>
        </>
    );
};

export default BorderWrapper;
