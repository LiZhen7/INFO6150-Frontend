import './about.css';

function About() {
    return (
        <div className="about">
            <div className="aboutTitle">
                <h1>WELCOME TO LEAGUE OF LEGENDS</h1>
            </div>
            <div className="aboutIntro">
                <p>This website is about League of Legends, a multiplayer online battle arena video game developed and published by Riot Games in 2009.</p>
                <p>In Home page, it shows some news and activities.</p>
                <p>In Champion page, it lists three different species of champions</p>
                <p>In About page, it makes a brief introduction of this website and the game company</p>
                <p>In Privacy page, it has something similar to privacy police.</p>
                <p>In Login and Register pages, you can do login and register.</p>
                <p>For more website details, you can see in README.</p>
            </div>
            <div className="aboutSubtitle">
                <h2>What We Stand For</h2>
            </div>
            <div className="aboutCard">
                <div className="card">
                    <img className="card__photo" src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.18169-9/14457476_10157757580475556_4864368263627438097_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=258_HYC7TygAX8_Dn9p&_nc_ht=scontent-sea1-1.xx&oh=00_AT-EnSeLv-keWS2xrLW3bEOeaVE85HnbvcaysQ-_TB0rVw&oe=61DEA24B" alt="Gameplay First" />
                    <h3 className="card__title">Gameplay First</h3>
                </div>
                <div className="card">
                    <img className="card__photo" src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/251960551_10166084703755556_6547587087140600323_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=EKtnLidOC0YAX8-u8An&_nc_ht=scontent-sea1-1.xx&oh=00_AT-XOuhCDFht-XPmZotm75Xo5wbO83aqJOak51xmvHNfNQ&oe=61BC57E0" alt="Commit to Quality" />
                    <h3 className="card__title">Commit to Quality</h3>
                </div>
                <div className="card">
                    <img className="card__photo" src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/73097879_10162806271970556_3398745468300165120_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_ohc=Mi4lu06Ex4cAX-5Vi8x&_nc_ht=scontent-sea1-1.xx&oh=00_AT-SVtkmDxtVfNO1H7b1UryCAGmISRhS8Dm4emyGfbwvEQ&oe=61DC14FE" alt="Play Nice & Play Fair" />
                    <h3 className="card__title">Play Nice & Play Fair</h3>
                </div>
                <div className="card">
                    <img className="card__photo" src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/71309707_10162629617430556_2742115990320971776_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_ohc=2z8MJpDFOEYAX_nhDND&_nc_ht=scontent-sea1-1.xx&oh=00_AT84lfFfBMvp8j4v4zCKKLrVBuSSagG3evcQ7bMONHRWBQ&oe=61DD9F21" alt="Learn & Grow" />
                    <h3 className="card__title">Learn & Grow</h3>
                </div>
                <div className="card">
                    <img className="card__photo" src="https://scontent-sea1-1.xx.fbcdn.net/v/t31.18172-8/21728710_10159552040870556_3032129458213053051_o.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=2bYzsMC-JXMAX9rupYO&_nc_ht=scontent-sea1-1.xx&oh=00_AT82YVCChAThrntWKqk7is9rf6NqTjG8pq9lLAIZ6BC-cQ&oe=61DBF711" alt="Think Globally" />
                    <h3 className="card__title">Think Globally</h3>
                </div>
                <div className="card">
                    <img className="card__photo" src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/32914966_10160635783465556_2371983027375964160_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=evhWBdzgQ78AX_w1dot&_nc_ht=scontent-sea1-1.xx&oh=00_AT_BxMb9l-ZwH6-COZbwxzoRLV_UTO1PcWGLAzQPdLYZaA&oe=61DECAB0" alt="Lead Responsibly" />
                    <h3 className="card__title">Lead Responsibly</h3>
                </div>
            </div>
        </div>
    );
}

export default About;