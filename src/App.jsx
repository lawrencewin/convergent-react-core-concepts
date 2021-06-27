import { useState } from "react"
import ImportList from "./ImportList"

function App() {
    const [currModule, setCurrModule] = useState(null)
    const ReactComponent = currModule?.default || null
    return (
        <div style={{ fontFamily: "sans-serif" }}>
            <div>List of topics</div>
            <ImportList
                onItemClick={(module) => {
                    console.log(module)
                    setCurrModule(module)
                }}
            />
            <hr />
            {ReactComponent ? <ReactComponent /> : null}
        </div>
    )
}

export default App
