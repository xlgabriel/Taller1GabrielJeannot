
import { useState } from "react";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['first category']);
  const [category, setCategory] = useState('');

  const onAddCategory = () => {
    // setCategories([...categories, 'hola'])
    setCategories(list => [...list, category])
    setCategory('')
  }

  const onSetCategory = (evt) => {
    setCategory(evt.target.value)
  }

  return(

    <>
      <h1>GifExpertGabriel</h1>
      <input type="text" value={category}
        onChange={(event) => onSetCategory(event)}/>
      <button onClick={() => onAddCategory()}> Add Category </button>
      <ol>
        {
          categories.map(
            (category, key) =>
            {
              return <li key={key}> {category}</li>
            }
          )
        }
      </ol>
    </>
    )

}