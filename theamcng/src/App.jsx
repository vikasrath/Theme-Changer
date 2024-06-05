import React, { useContext, useEffect } from "react";
import themecontext from "./Context/Themecontext/Themecontext";
import ThemeBtn from "./Components/Theamebtn/Themebtn";
import Card from "./Components/Card/Card";

function App() {
    const { thememode } = useContext(themecontext);
    
    // Change theme mode in html
    useEffect(() => {
        const htmlElement = document.documentElement; 
        htmlElement.classList.remove("light", "dark");
        htmlElement.classList.add(thememode);
        
    }, [thememode]);

    return (
        <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    <ThemeBtn />
                </div>

                <div className="w-full max-w-sm mx-auto">
                    <Card />
                </div>
            </div>
        </div>
    );
}

export default App;
