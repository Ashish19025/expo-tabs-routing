import { createContext } from "react";

export const TabBarContext = createContext<{
    istabbarvisible: (hidden:boolean) => void;
}>({
    istabbarvisible: () => {},
});
