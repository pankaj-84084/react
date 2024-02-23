import React, { useEffect, useState } from 'react'

export const UseEffectCom = () => {

  const [count, setState] = useState(0);
  const [data, setData] = useState(100);



  //use for every render
  // useEffect(() => {
  //   console.warn("useEffect" + `${count}`);
  // })

  //use for first time component render    
  // useEffect(() => {
  //   console.warn("useEffect" + `${count}`);
  // },[])

  //user for only count change
  // useEffect(() => {
  //   console.warn("useEffect" + `${count}`);
  // },[count])


  // jab component pura load ho chuka tab iske andar ka function chlega ... ek baar kyukiki blank arrray hai 
  //unmounting ka matlab ja component pura load ho chuka ? like document.ready ?

  //   useEffect(() => {
  //     return () => {
  //         // You can add your code for unmounting phase of component
  //         console.log("Functional Component Removed ");
  //     };
  // }, []);


  //about,contact,incr decr, todo,useeffect  in navbaar..
 
  return (
    <div>

      <div>___________________ UseEffect 1 ______________________</div>
      <div>Count {count}</div>
      <button onClick={() => setState(count + 1)}>ChangeCount</button>
      <div>Data {data}</div>
      <button onClick={() => setData(data + 10)}>ChangeData</button>
    </div>
  )
}
