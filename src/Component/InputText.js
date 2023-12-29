import React, { useEffect, useState } from 'react'
import './inputText.css'
import Popup from './Popup'; 
import './style.css'



function InputText() {
  const [inputText, setInputText] = useState('')
  const [queue, setQueue] = useState([])
  const [newQueue, setNewQueue] = useState([])
  const [endClicked, setEndClicked] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);

// adding list in a queue
  const enqueue = () => {
    if (!inputText) {

    } else {
      setQueue([...queue, inputText])
      setInputText('')
    }
  }
  const enqueueNew = (newVal) => {
    setNewQueue([...newQueue, newVal])
  }

 
  // dequeuing queue 

  const dequeue = () => {
    if (queue.length === 0) {
     return;
    }
    const firstVal = queue[0];
    console.log(firstVal);
    enqueueNew(firstVal);
    setQueue((setInputText) => setInputText.slice(1));
  };

  // dequeuing queue from the first position after every 10 sec
  useEffect(() => {
    const intervalId = setInterval(dequeue, 10000);
    if (queue.length === 0) {
      if (endClicked === true) {
        console.log("Success_queue")
        setPopupOpen(!isPopupOpen);
        setEndClicked(false);
      }
    }

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [queue,setPopupOpen,setEndClicked,endClicked,isPopupOpen,dequeue]); // Re-run the effect when the todoItems change


  // code for the end button if end button is empty
  const endBtn = () => {
    setEndClicked(true);
    
    if (queue.length === 0) {

      setEndClicked(false);
      setPopupOpen(!isPopupOpen);

    }
  }

// code for reset button

  const resetBtn = () => {
    setInputText('')
    setQueue([])
    setNewQueue([])
    setEndClicked(false)
  }




  return (
    <>
    <div className='container'>
      <div className='row m-5 '>
        <div className=' col sub-sec '>

          <div className='div' >

            <input type='text'
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder='enter your text' />
            <button class="btn  ms-2 p-2" onClick={enqueue}>Add</button>
          </div>

          
            <div className='queue'> 
            <ul className='showText'>
              {
                queue.map((elem, ind) => {
                  return (
                    <li className='list-group-flush'  key={ind}>{elem}

                    </li>
                  )
                })
              }
            </ul>
            
          </div>
        </div>


        <div className='col third-sec'>
          
          <div className='dequeue'>
          <ul>
            {
              newQueue.map((elem, ind) => {
                return (
                  <li className='animation slide-out-right' key={ind}>{elem}</li>
                )
              })
            }
          </ul>
          </div>
          
          
          <div className='button' >
          
            <button  class="btn  ms-2 p-2" onClick={endBtn}>End</button>
            
            {isPopupOpen && <Popup onClose={endBtn} />}
          

          {/* <button onClick={endBtn} >End</button> */}
          <button  class="btn ms-2 p-2" onClick={resetBtn}>Reset</button>
          
          </div>
        </div>
      </div>
      </div>



    </>
  )
}

export default InputText
