import React from "react";
import GlobalStyles from "./styles/GlobalStyles";

import Layout from "./components/Layout";
import { getOriginalNode } from "typescript";

const App: React.FC = () => {
    return(
        <>
            <GlobalStyles/>
            <Layout/>
        </>
    )
}

export default App;