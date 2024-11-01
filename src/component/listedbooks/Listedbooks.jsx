import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getstoremarkAsread } from "../handle/Handlemark";
import { parse } from "postcss";
import Book from "../book/Book";

const Listedbooks = () => {
    const [readlist,setreadlist]=useState([]);
    const allbooks = useLoaderData();

    useEffect(()=>{
        const storedReadlist = getstoremarkAsread();
        const storedReadlistint = storedReadlist.map(id=>parseInt(id));
        console.log(storedReadlist,storedReadlistint,allbooks);
        const readBooklist = allbooks.filter(book=>storedReadlistint.includes(book.id));
        setreadlist(readBooklist);
    },[])
  return (
    <div className="my-6">
      <h1 className="font-bold mb-2">There are the selected listed books:</h1>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab font-bold"
          aria-label="Read List"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6 text-red-500 font-bold"
        >
          I read  this book:{readlist.length},
          {
            readlist.map(book=><Book key={book.id} book={book}></Book>)
          }
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab font-bold"
          aria-label="My Wish List"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6 text-red-500 font-bold"
        >
          I wish to read
        </div>

       
       
      </div>
    </div>
  );
};

export default Listedbooks;
