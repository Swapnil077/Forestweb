// ForestList.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import '../component/list.css';
import { useNavigate } from 'react-router-dom';


const ForestList = () => {
    const [forests, setForests] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(firestore, 'forests'));
                const forestData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setForests(forestData);
                console.log(forests);

            } catch (error) {
                console.error('Error fetching forests:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="forests-container">
            {forests.map((forest, index) => (
                <div key={index} className="forest-card">
                    <h3>{forest.title}</h3>
                    <img src={forest.imageUrl} alt={forest.title} onClick={() => navigate(`/${forest.id}`)} />
                    <Link to={`/${forest.id}`} className='but'>View</Link>
                </div>
            ))}
        </div>
    );
};

export default ForestList;



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { firestore } from '../firebase';
// import { collection, getDocs } from 'firebase/firestore';
// import '../component/list.css';

// const ForestList = () => {
//     const [forests, setForests] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const querySnapshot = await getDocs(collection(firestore, 'forests'));
//                 const forestData = querySnapshot.docs.map(doc => doc.data());
//                 setForests(forestData);
//             } catch (error) {
//                 console.error('Error fetching forests:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div className="forests-container">
//             {forests.map((forest, index) => (
//                 <div key={index} className="forest-card">
//                     <h3>{forest.title}</h3>
//                     <img src={forest.imageUrl} alt={forest.title} />
//                     <Link to={`/forest/${forest.id}`} className='but'>View</Link>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ForestList;
