import React from 'react';
import { Header } from "../header";
import { Footer } from "../footer";
import { Outlet } from 'react-router';

const Layout = (): JSX.Element => {
    return (
        <div className={"flex flex-col justify-between h-screen relative"}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;
