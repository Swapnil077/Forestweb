import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import { Link } from 'react-router-dom';
import '../component/home.css';
import ForestList from './list';
import { getDocs } from 'firebase/firestore';
import { collection } from 'firebase/firestore';

const Home = () => {
  const [forests, setForests] = useState([]);

  // Inside your useEffect hook, add console.log statements
useEffect(() => {
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, 'forests'));
      const forestData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setForests(forestData);
  } catch (error) {
      console.error('Error fetching forests:', error);
  }
    // try {
    //   const querySnapshot = await firestore.collection('forests').get();
    //   const forestData = querySnapshot.docs.map(doc => doc.data());
    //   console.log('Fetched data:', forestData); // Add this line for debugging
    //   setForests(forestData);
    // } catch (error) {
    //   console.error('Error fetching forests:', error);
    // }
  };

  fetchData();
}, []);


  return (
    <div>
      <div className='main'>
        <div className='logo'>
          <h2>Forests</h2>
        </div>
        <div className='add'>
          <ul>
            <li>
              <Link to='/add'>+ Add forests</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='list'>
        <h3 className='listtex'>List of Forests</h3>
          <ForestList/>
      </div>
    </div>
  );
};

export default Home;
