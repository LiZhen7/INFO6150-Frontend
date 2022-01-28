// import { useState } from 'react';

function Reorder({ onReorder }) {
    return (
        <div className="Reorder">
            <button
                type="button"
                onClick={() => onReorder()}
            >Reorder</button>
        </div>
    );
}

export default Reorder;