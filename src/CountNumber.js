import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
const CountNumber = (props) =>
{
    const [count,setcount]=useState(props.count);
    const implemenets = () =>
    {
        if (count > 9)
        {
            setcount(10);
        }
        else
        {
            setcount(count+1);
        }
        
    }
    const decremenets = () =>
    {
        if(count<=0)
        {
            setcount(0)
        }
        else
        {
            setcount(count-1);
        }
    }
    return (
    
        <div className="card">
                <div className="card-body"  style={{textAlign: "center"}}> 
                    <button type="button" onClick={implemenets} className="btn btn-primary btn-block">Click To Increment</button>
                        <h1>{count}</h1>
                    <button type="button" onClick={decremenets} className="btn btn-primary btn-block">Click To Decrement</button>
                </div>
            </div>
       
  
    )
}

export default CountNumber;