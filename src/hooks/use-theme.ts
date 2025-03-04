import { useThemeStore } from "@/components/ui/header/useThemeStore";
import { applyThemePreference } from "@/utils/theme";
import { useEffect } from "react";

const selector = (state: any) => state.theme
export const useTheme = () => {
    const theme = useThemeStore(selector)
    useEffect(() => {
        applyThemePreference(theme)
    }, [theme])
}
