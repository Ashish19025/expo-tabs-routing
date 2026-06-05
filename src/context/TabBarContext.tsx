import { createContext } from "react";

// TabBarContext is a context object that provides a function to hide or show the tab bar.
export const TabBarContext = createContext<{
    // istabbarvisible is a function that takes a boolean value (hidden) and returns void.
    // This function can be used to hide or show the tab bar based on the value of hidden.
    istabbarvisible: (hidden:boolean) => void;
}>({
    // The default value for istabbarvisible is an empty function that does nothing.
    istabbarvisible: () => {},
});
