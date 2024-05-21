import React from "react";
import Card from "./Card";

function Cards({data, removeData}) {
  return <div className="w-full overflow-auto max-h-96 p-4 flex justify-center gap-4 flex-wrap">
    {data.map((item, index)=>(
      <Card index={index} removeData={removeData} key={index} name={item.name} email={item.email} imageUrl={item.imageUrl}/>
    ))}
  </div>;
}

export default Cards;
