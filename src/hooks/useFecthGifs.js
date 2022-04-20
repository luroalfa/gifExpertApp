// Hook
import { useState, useEffect } from 'react';
//Helpers
import { getGifs } from '../helpers/getGifs'



export const useFecthGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getGifs(category).then(imgs => {
      setTimeout(() => {
        setState(
          {
            data: imgs,
            loading: false,
          }
        )
      }, 1000)
    })
  }, [category]);
  return state; //{data:[], loading:true}
};
