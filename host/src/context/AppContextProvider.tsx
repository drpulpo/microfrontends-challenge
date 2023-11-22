import React,{useState,createContext} from "react";

export const AppContext = createContext({});

type AppContextProviderProps = {
    children:any;
}

export const AppContextProvider = (props:AppContextProviderProps) =>{
    const [lang, setLang] = useState('en');
    const {children} = props;

    const value = {
        lang,
        setLang
    }
    return (<AppContext.Provider value = {value}>
        {children}
    </AppContext.Provider>)
}