import React from 'react';
import '../App.css';
import CopyContainer from './CopyContainer';
import Header from './Header';
import ImageContainer from './ImageContainer';
import Footer from './Footer';

class App extends React.Component {
  componentDidMount() {
    document.getElementById('foo').addEventListener('wheel', this.handleCopyScroll);
  }
  componentDidUpdate() {
    console.log('updated')
  }
  componentWillUnmount() {
    document.getElementById('foo').addEventListener('wheel', this.handleCopyScroll);
  }
  state = {
    copyToggle: false
  };
  handleCopyOne = () => {
    this.setState(() => ({ copy: false }));
  }
  handleCopyTwo = () => {
    this.setState(() => ({ copy: true }));
  }
  handleCopyScroll = (e) => {
    const y = window.scrollY;
    if (y <= 850) {
      this.setState(() => ({ copy: false }));
    } else {
      this.setState(() => ({ copy: true }));
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="video">
          <video id="video-long" src="https://res.cloudinary.com/dnqc6pmtp/video/upload/v1537132089/robott.mp4" autoPlay loop muted />
          <img className="gif" id="giftop" src="https://res.cloudinary.com/dnqc6pmtp/image/upload/v1537133610/landing-page/robott.gif" alt="droids"/>
        </div>
        <CopyContainer
          selectedCopy={this.state.copy}
          handleCopyOne={this.handleCopyOne}
          handleCopyTwo={this.handleCopyTwo}
          handleCopyScroll={this.handleCopyScroll}
        />
        <div className="video" id="boxed-video">
          <video id="boxed" src="https://res.cloudinary.com/dnqc6pmtp/video/upload/v1537132465/landing-page/roboto.mp4" autoPlay loop muted />
          <img className="gif" src="https://res.cloudinary.com/dnqc6pmtp/image/upload/v1537133794/landing-page/roboto-gif.gif" alt="droids"/>
          <p>Model #451233548 meeting his creator</p>
          <a href="#">Start building your new droid</a>
        </div>
        <ImageContainer />
        <div className="video" id="end-video">
          <video id="boxed" src="https://res.cloudinary.com/dnqc6pmtp/video/upload/v1537132561/landing-page/sophia.mp4" autoPlay loop muted />
          <img className="gif" src="https://res.cloudinary.com/dnqc6pmtp/image/upload/v1537133836/landing-page/sophiagif.gif" alt="droids"/>
          <p>Model P-Sophia</p>
          <a href="#">Shop presets</a>
        </div>
        <div className="bottom-line"></div>
        <Footer />
      </div>
    );
  }
}

export default App;