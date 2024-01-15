module.exports = {
    useTabs: false,
    tabWidth: 4,
    trailingComma: "all",
    bracketSpacing: true,
    bracketSameLine: true,
    jsxSingleQuote: true,
    arrowParens: "always",
    plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
    importOrder: [
        "^react",
        "@indriver/*",
        "@^",
        "<THIRD_PARTY_MODULES>",
        "public/*",
        "shared/*",
        "entities/*",
        "features/*",
        "widgets/*",
        "pages/*",
        "app/*",
        "^[./]",
    ],
    importOrderSortSpecifiers: true,
    overrides: [
        {
            files: ["*.js", "*.jsx"],
            options: {
                parser: "babel",
            },
        },
        {
            files: ["*.ts", "*.tsx"],
            options: {
                parser: "typescript",
            },
        },
        {
            files: ["*.json", ".*rc"],
            options: {
                parser: "json",
                tabWidth: 2,
            },
        },
        {
            files: ["*.md", "*.mdx"],
            options: {
                parser: "mdx",
            },
        },
    ],
};
