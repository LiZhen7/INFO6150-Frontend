import { useState } from 'react';
import Assassins from './Assassins';
import Mages from './Mages';
import Nav from './Nav';
import Tanks from './Tanks';

import './champion.css';

function Champion() {

    const [species,setSpecies] = useState('Assassins');

    return (
        <div className='champion'>
            <div className='championTitle'>
                <h3>CHOOSE YOUR</h3>
                <h1>CHAMPION</h1>
                <p>With more than 140 champions, you'll find the perfect match for your playstyle. Master one, or master them all.</p>
            </div>
            <Nav species={species} setSpecies={setSpecies} />
            {species === 'Assassins' && <Assassins />}
            {species === 'Mages' && <Mages />}
            {species === 'Tanks' && <Tanks />}
        </div>
    );
}

export default Champion;