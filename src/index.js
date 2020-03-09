import React, { useState, useEffect } from 'react';
import './styles.css'

export default function Loading (props) {
  const [show, setShow] = useState(false);

  useEffect(()=>{
    setShow(props.show)
    console.log(show)
  })

  if(!show) return null;
  return  <div className="loading">
              <div className="loader">
                <div className="inner one"></div>
                <div className="inner two"></div>
                <div className="inner three"></div>
              </div>
          </div>
             
}
