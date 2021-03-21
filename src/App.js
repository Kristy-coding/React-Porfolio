
import React from 'react';


import About from './components/About';
import Portfolio from './components/Portfolio';

import Header from './components/Header';
import Nav from './components/Nav';


function App() {

  //const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Nav/>
      <Header />
      <main>
        <div>
          <Portfolio />
          <About />
        </div>
      </main> 
    </div>
  );
}

export default App;



