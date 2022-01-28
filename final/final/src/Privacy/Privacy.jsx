import { useState } from 'react';
import PrivacyAccordion from './PrivacyAccordion';

import './privacy.css';

const privacyContent = {
    'P1': `
    Last Modified: December 15, 2021
    `,
    'P2': `
    Welcome to League of Legends! Our privacy notice explains what info we collects when you visit or use our Services, as well as ways we might use or share it. We’re only describing our own practices—this notice doesn’t apply to third parties we don’t own or control, including other companies you might interact with on or through our Services.
    `,
    'P3': `
    Riot Games, Inc. is headquartered in Los Angeles. Riot Games, Inc. and its subsidiaries are part of a global group of affiliated gaming companies with offices and operations around the world (see International Data Processing). When we say “Riot Games” (or similar things like “we” or “us”), we’re referring to the Riot Games entity or, where applicable, entities that control and are responsible for your info (see Contact Us to see who that is).
    `,
    'P4': `
    We encourage you to use the notice’s interactive features to guide you. We’ve written summaries to identify the key issues discussed in many sections at a glance. However, these summaries are intended solely to simplify things and the full notice should be read as it takes priority in the event of any ambiguity or conflicts (so be sure to read the whole thing carefully!). Click on the “+” links for further details about particular topics that interest you.
    `,
    'P5': `
    If you don’t understand any parts of the notice, Contact Us with questions.
    `,
};

const accordionContent = {
    'I. INFO WE COLLECT': `
    We collect info in three main ways:
    1.You provide some of it directly (such as by registering for an account).
    2.We record some of it automatically (including with technologies like cookies).
    3.We receive some of it from third parties (like social media companies).
  `,
    'II. HOW WE COLLECT INFO': `
    In addition to info you provide, we and our partners automatically record some info about how you use and navigate our Services. We may combine this info with other info we gather from or about you as described in this notice, including to enforce our Terms of Service and for analytics and advertising purposes.
  `,
    'III. HOW WE USE AND SHARE INFO': `
    We use and share your info in accordance with the legal bases set out below to help us provide, operate, improve, understand, customize, support and market the Services.
  `,
};

function Privacy() {
    const [accordionFaqs] = useState(accordionContent);

    return (
        <div className='privacy'>
            <h1>Privacy Notice</h1>
            {Object.keys(privacyContent).map(title => {
                return (
                    <div key={title} className="privacy__content">
                        {privacyContent[title]}
                    </div>
                );
            })}
            <PrivacyAccordion entries={accordionFaqs} />
        </div>
    );
}

export default Privacy;