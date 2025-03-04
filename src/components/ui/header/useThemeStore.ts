import { create } from "zustand"
import { persist } from "zustand/middleware"
import { THEME_TYPES } from "@/constants"

const { DARK, LIGHT } = THEME_TYPES

const useThemeStore = create(
    persist(
        (set) => ({
            theme: LIGHT,
            toggleTheme: () =>
                set((state: any) => ({
                    theme: state.theme === LIGHT ? DARK : LIGHT,
                })),
        }),
        {
            name: "theme",
        }
    )
);
export { useThemeStore }


