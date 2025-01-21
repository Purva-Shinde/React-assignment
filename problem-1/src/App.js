import React ,{useState} from 'react';
 import './App.css';

function App() {
  const [inputText,setInputText]=useState('');
  const [char,setChar]=useState([]);

  const handleChange=(value)=>{
    setInputText(value);
  }
  const handleSubmit=()=>{
    const count = {}
   const text = inputText.replace(/\s+/g, "");
    for(let i =0;i<text.length;i++){
       let char = text[i]

      if(count[char]){
        count[char] +=1
      }else{
        count[char] = 1;
      }
    }
    console.log(count);

    setChar(Object.entries(count)
    .map(([char,count])=> `${char}-${count}`)
  );
  console.log("char",char)
  }
  return (
    <div className="App">
       <input type="text" value={inputText} onChange={(e)=>handleChange(e.target.value)}     />
       <button onClick={handleSubmit}>Submit</button>
      <ol>
       {
        char.map((value,index)=>(
          <li key={index}>{value}</li>

        ))

       }
        </ol>
    </div>
  );
}

export default App;
