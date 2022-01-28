import { useState } from 'react';

function Tabs({ entries }) {

    const [tabTitle, setTabTitle] = useState(Object.keys(entries)[0]);

    return (
        <div className="tabs">
            <div className="tabs-title">
                {Object.keys(entries).map(title => {
                    return (
                        <div
                            key={title}
                            className={`title-content ${tabTitle === title ? 'active' : ''}`}
                            onClick={() => setTabTitle(title)}
                        >
                            <h2>{title}</h2>
                        </div>
                    );
                })}
            </div>
            <div className="tabs-content">
                {entries[tabTitle]}
            </div>
        </div>
    );
}

export default Tabs;