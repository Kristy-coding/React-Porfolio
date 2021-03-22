
import React, {useState} from 'react';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import Modal from './components/Modal';



function App() {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () =>{

    // this is going to set it to the opposite of its current state, the modal starts off as false so the first toggle with set it to true 
    setShowModal(!showModal);
  }
  

  return (
    <div>
      <Nav
      // need to pass theses state value to the nav because we are using the nav button to change the state of the modal
      showModal = {showModal}
      setShowModal = {setShowModal}
      toggleModal = {toggleModal}
      
      />
      <Header />
      <main>
        <div>
          {showModal ?
          <Modal onClose = {toggleModal}/> : null}
          <Portfolio />
          <About />
          < ContactForm />

        </div>
      </main> 
    </div>
  );
}

export default App;



