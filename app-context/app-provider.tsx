import React, { Dispatch, FC, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react";
import { noop } from "lodash";

export declare type ToorWeldingContext = {
    mode: 'light' | 'dark';
    setCtx:  Dispatch<SetStateAction<{mode: 'light' | 'dark'}>>
}

export const defaultCtx: ToorWeldingContext = {
    mode: 'dark',
    setCtx: noop
}

export const ToorWelding = createContext<ToorWeldingContext>(defaultCtx)
export const useToorWeldingCtx = () => useContext(ToorWelding)

export const AppProvider: FC<PropsWithChildren> = ({children}) => {
    const [ctx, setCtx] = useState<{mode: 'light' | 'dark'}>({mode: 'dark'})

    return (
        <ToorWelding.Provider value={{
            ...ctx,
            setCtx
        }}>{children}</ToorWelding.Provider>
    )
}