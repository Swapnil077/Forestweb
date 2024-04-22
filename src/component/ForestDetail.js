
// ForestDetail.js (New Component)

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';
import { getDocs, collection, doc, getDoc } from 'firebase/firestore';
import '../component/forestdetails.css'

const ForestDetail = () => {
    const { id } = useParams();
    const [forest, setForest] = useState([]);

    useEffect(() => {
        const fetchForest = async () => {
            try {
                // const forestDoc = await getDocs(doc(firestore, 'forests', id));
                const querySnapshot = await getDocs(collection(firestore, 'forests'));
                const forestData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

                forestData.forEach((forest) => {
                    if (forest.id === id) {
                        setForest(forest);
                    }
                });

            } catch (error) {
                console.error('Error fetching forest:', error);
            }
        };

        fetchForest();
    }, [id]);

    if (!forest) {
        return <div>Loading...</div>;
    }

    return (
        <div className='main'>
            <div className='cont'>
                <h2>{forest.title}</h2>
                <img src={forest.imageUrl} alt={forest.title} />
                <p>{forest.desc}</p>
            </div>
        </div>
    );
};

export default ForestDetail;
