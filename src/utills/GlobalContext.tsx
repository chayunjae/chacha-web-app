import { createContext } from "react";

export type GlobalContextProps = {
  theme: string;
};
let GlobalContext = createContext<GlobalContextProps>({ theme: "full" });

export const changeTheme = (type: string) => {
  GlobalContext = createContext<GlobalContextProps>({ theme: type });
};

export default GlobalContext;
