import { useState } from 'react';

function Nav({ setSpecies }) {
    const [title, setTitle] = useState('Assassins');

    function navTo(target) {
        setSpecies(target);
    }

    return (
        <div className="nav">
            <button className={`title-content ${title === 'Assassins' ? 'active' : ''}`} 
            onClick={() => {navTo('Assassins'); setTitle('Assassins')}}>
                ASSASSINS
            </button>
            <button className={`title-content ${title === 'Mages' ? 'active' : ''}`} 
            onClick={() => {navTo('Mages'); setTitle('Mages')}}>
                MAGES
            </button>
            <button className={`title-content ${title === "Tanks" ? 'active' : ''}`} 
            onClick={() => {navTo('Tanks'); setTitle('Tanks')}}>
                TANKS
            </button>
        </div>
    );
}

export default Nav;