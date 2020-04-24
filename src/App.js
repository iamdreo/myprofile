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
import {Helmet} from 'react-helmet'
import ReactGA from 'react-ga';


ReactGA.initialize('UA-162013835-1');
ReactGA.pageview(window.location.pathname + window.location.search);



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

         <Helmet>
    <title>Andrew Ole's Portfolio</title>
    <meta name="description" content="Andrew Ole is a full stack developer experienced in React and other technologies obsessed with creating amazing user experiences from front end to backend and giving my users the best possible experience " />
    <link rel="canonical" href="https://andrewole.com.ng" />
  </Helmet>

      {loading ?  (
        <CircularProgress style={{margin: 300, marginLeft: '50%', color: 'black'}}  />
      ) : (
      <div>
      
      <Header />

     
      <Banner />
     
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
