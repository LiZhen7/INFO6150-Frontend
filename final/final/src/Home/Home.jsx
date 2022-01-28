import { useState } from 'react';
import './home.css';
import News from './News';
import All from './All';
import Update from './Update';
import Esports from './Esports';
import Community from './Community';
import Pic from './HomepagePic.png';

function Home() {

    const [news, setNews] = useState('All');

    return (
        <div className="home">
            <div className='home__news'>
                <img className="home__photo" src={Pic} alt="Homepage" />
                <div className='home__newsList'>
                    <News news={news} setNews={setNews} />
                    {news === 'All' && <All />}
                    {news === 'Update' && <Update />}
                    {news === 'Esports' && <Esports />}
                    {news === 'Community' && <Community />}
                    <button className='news__button' aria-label='News'>Read more Lastest News</button>
                </div>
            </div>
            <div className='home__card'>
                <div className="homeCard">
                    <img className="homeCard__photo" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vex_0.jpg" alt="Vex" />
                    <h3 className="homeCard__name">New Hero: Vex</h3>
                    <div className='homeCard__overlay'>
                        <div className='overlay__text'>Vex,the Gloomist, Now Online!</div>
                    </div>
                </div>
                <div className="homeCard">
                    <img className="homeCard__photo" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gangplank_0.jpg" alt="Patch notes" />
                    <h3 className="homeCard__name">Patch 11.23 notes</h3>
                    <div className='homeCard__overlay'>
                        <div className='overlay__text'>TEAMFIGHT TACTICS PATCH 11.23 NOTES</div>
                    </div>
                </div>
                <div className="homeCard">
                    <img className="homeCard__photo" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nami_3.jpg" alt="April Fools' Day Skins" />
                    <h3 className="homeCard__name">April Fools'Day!</h3>
                    <div className='homeCard__overlay'>
                        <div className='overlay__text'>April Fools' Day Skins Now in the Store!</div>
                    </div>
                </div>
                <div className="homeCard">
                    <img className="homeCard__photo" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jayce_24.jpg" alt="Arcane" />
                    <h3 className="homeCard__name">Arcane Final</h3>
                    <div className='homeCard__overlay'>
                        <div className='overlay__text'>Arcane Final Availiable Now!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;