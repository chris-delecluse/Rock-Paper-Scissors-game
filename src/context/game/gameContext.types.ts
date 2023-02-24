import { ReactNode } from "react";

export type GameProviderProps = {
    children: ReactNode;
}

export type GameContextType = {
    selectedItem: string | null;
    handleSelectItem: (name: string) => void;
}
