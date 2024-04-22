import React, { useState } from 'react';
import { firestore } from '../firebase';
import { collection, addDoc } from '@firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

import '../component/addforest.css';

const Add = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const submit = async () => {
        console.log('Submitting forest details:', { title, description, imageUrl });

        try {
            // Generate a unique ID for the forest entry
            const forestId = uuidv4();

            // Add forest details to Firestore
            await addDoc(collection(firestore, 'forests'), {
                id: forestId, // Unique ID for the forest entry
                title: title,
                desc: description,
                imageUrl: imageUrl // Image URL
            });

            // Reset form fields after successful submission
            setTitle('');
            setDescription('');
            setImageUrl('');

            alert('Forest details added successfully!');
        } catch (error) {
            console.error('Error adding forest details:', error);
            alert('An error occurred while adding forest details. Please try again later.');
        }
    }

    return (
        <div className='addsec'>
            <h2>Add Forest Details</h2>
            <div className='inputbox'>
                <div className='inputfield'>
                    <label>Title</label>
                    <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='inputfield'>
                    <label>Description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className='inputfield'>
                    <label>Image URL</label>
                    <input type='text' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                </div>
                <button className='but' onClick={submit}>Submit</button>
            </div>
        </div>
    );
};

export default Add;
