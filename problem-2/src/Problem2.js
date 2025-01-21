import React, { useState } from 'react'
import axios from 'axios'

function Problem2() {
    const [data,setData]=useState([]);
   const handleSubmit = async()=>{
    debugger
    const randomNumber = Math.floor(Math.random()*9)+1;
    try {
        const response =  await axios.get(`https://swapi.dev/api/people/${randomNumber}`);
        console.log(response.data.name);
        if(response){
            setData((prev)=>[...data,response.data.name]);
        }
    } catch (error) {
        
    }
   }
   const handleDelete = (index)=>{
    const updatedData = data.filter((_,i)=>i !== index);
    setData(updatedData);

   }
  return (
    <div>
    <button onClick={handleSubmit}>Submit</button>
      <table>
        <thead>
            <tr>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
        {
            data.map((value,index)=>(
                <tr  key={index}>

                <td style={{display:'flex',justifyContent:"center",alignItems:'center'}}>{value} <p style={{marginLeft:'10px'}} onClick={()=>handleDelete(index)}>Delete</p></td>

            </tr>

            ))
        }
             
        </tbody>
      </table>
    </div>
  )
}

export default Problem2
