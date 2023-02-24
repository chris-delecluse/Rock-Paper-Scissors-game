import React from 'react';
import { Route, Routes } from "react-router";
import { Home } from "../pages/home";
import { SelectedView } from "../pages/selected";
import { Layout } from "../components/layout";
import { GameProvider } from "../context/game";

const Router = (): JSX.Element => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={
                    <GameProvider>
                        <Home/>
                    </GameProvider>
                }/>
                <Route path="/:selected" element={
                    <GameProvider>
                        <SelectedView/>
                    </GameProvider>
                }/>
            </Route>
            <Route path="*" element={<h1>404 - Not Found</h1>}/>
        </Routes>
    );
};

export default Router;
