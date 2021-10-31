import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export default function GifExpertApp() {
    const [ categories, setCategories ] = useState(['Mr Robot']);

    return (
        <>
          <h2>Buscador de GIF's</h2>
          <hr/>
          <AddCategory setCategories={ setCategories } />
          <hr/>
          <ol>
              {
                categories.map(category => 
                    <GifGrid 
                        key= { category }
                        category={ category }
                    />
                )
              }
          </ol>

        </>
    )
}
