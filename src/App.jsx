import { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";

function App() {

  const [data, setData] = useState([]);

  const fillData = (cardData)=> {
        setData((prev)=>[...prev, cardData])
  }

  const removeData = (dataIndex) => {

    setData((prev)=>{
      return prev.filter((item, index)=>{
          if(index !== dataIndex) {
              return {item}
          }
      })
    })
  }
  
  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center">
      <div className="container mx-auto ">
        <Cards removeData={removeData} data={data}/>
        <Form fillData={fillData}/>
      </div>
    </div>
  );
}

export default App;
