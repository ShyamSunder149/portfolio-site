import { useState } from 'react';
import About from "./About";
import Projects from "./Projects";

 export const Navigation = () => {
    const [activePage, setActivePage] = useState<string>("About");

    const renderPage = () => {
        switch (activePage) {
            case 'About':
                return <About />;
            case 'Projects':
                return <Projects />;
            default:
                return <div></div>// Default content
        }
    };

    return (
        <div>
            <div className="flex gap-4">
                <button onClick={() => setActivePage('About')} className="text-sky-400">About</button>
                <button onClick={() => setActivePage('Projects')} className="text-sky-400">Projects</button>
            </div>
            <div className="mt-5">
                {renderPage()}
            </div>
        </div>
    );
}

