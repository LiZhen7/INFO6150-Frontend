import { useState } from 'react';
import Tabs from './Tabs';

import './app.css';

const initialFaqs = {
  'Tab1': `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit eligendi tempora. Harum, maiores. Sed eveniet alias praesentium explicabo, ipsam excepturi ipsum veritatis cupiditate aliquam. Dicta consectetur facilis quod ipsum!`,
  'Tab2': `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nesciunt vitae explicabo debitis, ex suscipit natus porro magnam, ducimus voluptate consequuntur odit corrupti reprehenderit? Repudiandae quam porro aut, deserunt repellat enim quis quasi natus saepe dolor explicabo ipsa similique harum quas veritatis voluptate magni doloremque possimus, rerum quos at, blanditiis aliquid quibusdam perspiciatis? Molestias nisi est corrupti magni dolore porro!`,
  'Tab3': `
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nobis numquam magnam dolor harum laborum nostrum dolorem, corrupti consectetur eaque ipsam voluptatem vel error doloribus provident ipsum. Fuga est atque nihil, nulla pariatur vitae minus aspernatur. Impedit, ex tenetur a modi deleniti aliquam. Natus minus reiciendis harum in optio quod.`,
};

function App() {

  const [tabsFaqs] = useState(initialFaqs);

  return (
    <div className="app">
      <Tabs entries={tabsFaqs} />
    </div>
  );
}

export default App;
