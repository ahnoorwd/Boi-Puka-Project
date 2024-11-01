import React from 'react';
import { useParams } from 'react-router-dom';

const Bookdetail = () => {
    const {bookID} = useParams();


    return (
        <div>
            <h1>Book's Details: {bookID} </h1>
        </div>
    );
};

export default Bookdetail;