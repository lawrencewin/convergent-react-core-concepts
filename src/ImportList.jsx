import imports from "./imports"

/**
 * Function that turns "PascalCase" to "Pascal Case"
 *
 * @param {string} string - Input string
 */
function pascalCaseToHuman(string) {
    return string.replace(/([A-Z])/g, " $1").trimStart()
}

export default function ImportList({ onItemClick }) {
    const handleItemClick = (dir, moduleName) => {
        // Using a dynamic import here to programatically get the module
        import(`./examples/${dir}/${moduleName}`).then((module) => {
            onItemClick(module)
        })
    }
    return (
        <ul>
            {Object.keys(imports).map((dirname) => {
                const displayDirname = pascalCaseToHuman(
                    dirname.substring(dirname.indexOf("_") + 1)
                )
                return (
                    <li key={dirname}>
                        {displayDirname}
                        <ul>
                            {imports[dirname].map((moduleName) => {
                                return (
                                    <li key={moduleName}>
                                        <button
                                            style={{
                                                background: "none",
                                                border: "none",
                                                fontFamily: "inherit",
                                                fontSize: "inherit",
                                                color: "blue",
                                                textDecoration: "underline",
                                                cursor: "pointer",
                                            }}
                                            onClick={() =>
                                                handleItemClick(
                                                    dirname,
                                                    moduleName
                                                )
                                            }
                                        >
                                            {moduleName}
                                        </button>
                                    </li>
                                )
                            })}
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
}
