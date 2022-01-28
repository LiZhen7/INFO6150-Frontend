import { useState } from 'react';

function News({ setNews }) {

    const [title, setTitle] = useState('All');

    function newsTo(target) {
        setNews(target);
    }

    return (
        <div className="news">
            <button className={`news__species ${title === 'All' ? 'active' : ''}`} 
            onClick={() => {newsTo('All'); setTitle('All')}}>
                All
            </button>
            <button className={`news__species ${title === 'Update' ? 'active' : ''}`} 
            onClick={() => {newsTo('Update'); setTitle('Update')}}>
                Updates
            </button>
            <button className={`news__species ${title === "Esports" ? 'active' : ''}`} 
            onClick={() => {newsTo('Esports'); setTitle('Esports')}}>
                Esports
            </button>
            <button className={`news__species ${title === "Community" ? 'active' : ''}`} 
            onClick={() => {newsTo('Community'); setTitle('Community')}}>
                Community
            </button>
        </div>
    );
}

export default News;