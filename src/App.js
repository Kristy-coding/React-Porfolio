
import React from 'react';


import About from './components/About';
import Portfolio from './components/Portfolio';
import Modal from './components/Modal';
import Header from './components/Header';
import Nav from './components/Nav';
import ContactForm from './components/Contact'

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
          <ContactForm/>
          <Modal/>
        </div>
      </main> 
    </div>
  );
}

export default App;



