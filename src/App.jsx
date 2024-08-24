import React, { useState } from "react";
import List from "./components/List";
import Item from "./components/Item";
import Form from "./components/Form";

export default function App() {
  const [data,setData] = useState([
    { id: 1, content: "Hello", name: "Rik"},
    { id: 2, content: "World", name: "Kil"},
    { id: 3, content: "React", name: "Jack"},
    { id: 4, content: "Vite", name: "Bel"},
]);
  const remove = id => {
    setData(data.filter(item => item.id !== id));
  }

  const add = (content,name) => {
    const id = data[data.length -1].id + 1;
    setData([...data, {id,content,name}]);
  };
  return (
    <div style={{ maxWidth: 600, margin: "20px auto" }}>
      <Form add={ add }/>
      <h1>Yaycha</h1>
      <List>
        {data.map(item => {
          return (
            <Item 
            key={item.id}
            item={item} 
            remove={remove} 
            />)
        })}
      </List>
    </div>
  );
}
