import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './Redux/Counterslice'

function Counter() {
  const dispach=useDispatch()
  const count=useSelector((state)=>state.Counterslice.count)
  const [amount,setamount]=useState()

 const handleIncrement=()=>{
    if(amount==''){
      alert('Please enter a number')
    }else{
      dispach(incrementByAmount(parseInt(amount)))
    }
  }
  return (
  

<div >

<div style={{height:'70vh'}} className='w-100 d-flex justify-content-center align-items-center  rounded p-5 '>
    <div className='d-flex justify-content-center align-items-center border rounded p-5 w-50 flex-column'>
        <h1 style={{fontSize:'100px',color:"white" }}>{count}</h1>
        <div>
            <button onClick={()=>dispach(increment())}  className='m-1' style={{backgroundColor:'orange',width:'100px', height:'50px'}}>Increment</button>
            <button onClick={()=>dispach(reset())} className='m-1'  style={{backgroundColor:'RED',width:'100px', height:'50px'   }}>Reset</button>
            <button onClick={()=>dispach(decrement())} className='m-1' style={{backgroundColor:'GREEN', width:'100px', height:'50px'}}>Decrement</button>
        </div>
        <div className='d-flex mt-5'>
            <input onChange={e=>setamount(e.target.value)} type="text" className='form-control' placeholder='Enter an amount t be incremented' />
            <button onClick={handleIncrement} className='btn btn-primary ms-3'>INCREMENT AMOUNT</button>



        </div>
        
    </div>














</div>















</div>



  )
}

export default Counter