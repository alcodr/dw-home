export type footerNavigation = {
    page: String[],
    company: String[],
    legal: String[]
}

export type darkState = {
    dark: boolean,
    toggleDark: (dark: boolean) => void
}