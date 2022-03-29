import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifApp = () => {

   
    const [categories, setCategories] = useState(["Dragon Ball" ]);

    /* const handleAdd = () => {
        setCategories( [...categories, "MonsterHunter"] );        
        setCategories( cats => [...cats, "MonsterHunter"] );        
         } */    

    return (
        <>
            <h2> GifApp </h2>
            < AddCategory setCategories={ setCategories }/> {/* anything we send here is received as a props */}
            <hr/> {/*  REACT tag to place a black line */}        
            <ol>
                {
                    categories.map( category =>  (
                        <GifGrid 
                            key={ category }
                            category={ category }  /* the propp category is the category iterated category of categories */
                        /> 
                        ))
                }
            </ol>
        </>
    );
}

export default GifApp;