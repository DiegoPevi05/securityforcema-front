import React, {useState, useEffect} from 'react';
import ContactUs from '../components/ContactUs';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar';
import Reasons from '../components/Reasons';
import GadgetElement from '../components/Sidegadget';
import Sidebar from '../components/Sidebar';
import LoadingPage from '../components/Loading';
import UsComponent from '../components/Us';
import NewsComponent from '../components/News';
import axios from 'axios';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const [webContent, setWebContent] = useState([])
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios({method: 'GET', url: BACKEND_URL+"/api/content-web/all"}).then(response => {
          setWebContent(response.data);
          console.log(response.data)
          setLoading((loading) => !loading);
        })
      } catch (error) {
        console.error(error)
      }
    }
    fetchData();
  }, [])

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  if (loading) {
    return <LoadingPage Open={true} />
  } else {
    return (
      <>
        <GadgetElement contactData ={webContent['contact']}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />
        <HeroSection heroData ={webContent['hero']}/>
        <NewsComponent newsData={webContent['news']}/>
        <UsComponent usData = {webContent['us']}/>
        <Reasons reasonsData={webContent['reasons']}/>
        <InfoSection industriesData={webContent['industries']}/>
        <FAQ faqsData={webContent['faqs']}/>
        <ContactUs contactData={webContent['contact']}/>
        <Footer contactData={webContent['contact']}/>
      </>
    )
  }
}

export default Home



