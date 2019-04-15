import React, { Component, Fragment } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.css';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import About from './components/about/about';
import Whatido from './components/portfolio/whatido';
import Services from './components/services/services';
import Footer from './components/footer/footer'
import Contact from './components/contact/contact';
import Slide from '@material-ui/core/Slide';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      loading: true,
    }
  }

  componentDidMount() {
    
    this.setState({
      loading: false
    })
    
  }
  

  

  
  render() {
    const {loading} = this.state;
    return (
      
      <Fragment>
      {loading ?  (
        <CircularProgress style={{margin: 300, marginLeft: '50%', color: 'black'}}  />
      ) : (
      <div>
      
      <Header />
      <Slide direction="left" in={!loading} mountOnEnter timeout={3000}>
      <Banner />
      </Slide>
      <About id="about"/>
      
      <Whatido id="portfolio"/>
      <Services/>
      <Contact id="contact"/>
      <Footer />
      
      </div>
      )
      }
      </Fragment>
    )
  }
}

export default App;
