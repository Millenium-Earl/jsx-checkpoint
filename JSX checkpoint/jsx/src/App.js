
import './App.css';
import React from 'react';
import pic from "./120397507_1764055877076965_1814299763441692679_n.jpg";


function App() {
  return (
    <div className="App">
     <ElCode />  
       </div>
  );
}

const ElCode = props => {
  return ( 
  <>
  <div style={{border: 'solid 1px black',maxWidth:'100vw'}}>
  <h1 className="title red">Just a random useless page</h1>
  <img src={pic} alt={"No idea what happened here"} />
  <img src={"120613454_3855719811109203_8467518845483816158_o.jpg"} alt={"No idea what happened here"} style={{height: '692px'}} />
  </div>
<video width={320} height={240} controls>
<source src="myVideo.mp4" type="video/mp4" />
</video>
</>
  )
}

export default App;
