import React, {useState, useEffect} from 'react';
import LoadingPage from '../components/Loading';
import JoinUsSection from '../components/JoinUs';

const JoinUs = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 3000));
      setLoading((loading) => !loading);
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <LoadingPage Open={true} />
    )
  } else {
    return (
      <JoinUsSection />
    )
  }
}

export default JoinUs; 
