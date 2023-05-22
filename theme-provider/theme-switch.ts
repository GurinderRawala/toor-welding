import { useCallback, useEffect } from "react"
import { useToorWeldingCtx } from "../app-context"
import { Palette } from "@mui/material"

export const useThemeSwitch = () => {
    const { mode, setCtx } = useToorWeldingCtx()

    useEffect(() =>{
        const storeTheme = window.localStorage.getItem("mode")
        if(!storeTheme){
            return
        }
        setCtx({
            mode: storeTheme as Palette["mode"]
        })
    }, [setCtx])

    const switchMode = useCallback((newMode: Palette["mode"]) =>{
        window.localStorage.setItem('mode', newMode)
        setCtx({mode: newMode})
    }, [setCtx])

    return { mode, switchMode }
}