
import React from 'react';
 import Nav from './components/Nav';

import About from './components/About';
import Projects from './components/Projects';
import Modal from './components/Modal';

function App() {

  //const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      
      <Nav />
      <main>
        <div>
          <Projects />
          <About />
          <Modal/>
        </div>
      </main> 
    </div>
  );
}

export default App;



