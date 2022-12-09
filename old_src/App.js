import './App.css';
import { useState , useEffect } from 'react';

const Person = ( props ) => { 

  return (
    <>
    <h1> Student Name : {props.Name} </h1>
    <h2> Roll Number : {props.Roll} </h2>
    <h2> Research Advisor : {props.Advisor} </h2>
    </>
  );
}


const App = () => {
  const college = "IIITH";
  const showpage = 4; 
  const cont = []
  cont[0] = ( <div className="App"> <h1> welcome {college} </h1></div>);

  cont[1] = ( <div className="App"><h1> This is page 1  </h1></div>);

  cont[2] = (
    <div className='App'>
    <>
     <h1> This is page 2 </h1>
     <h2> Let's see what is react wrapper element</h2>
     
    </>
    </div>
  );

  cont[3] = ( 
    <div className='App'>
      <Person 
      Name = { "Seshu" } 
      Roll = {28} 
      Advisor = {"Gangadharan"} 
      />
      <Person
      Name = { "Harish" } 
      Roll = {63} 
      Advisor = {"Zia Abbas"} 
      />
    </div>
  ) ; 



  const [counter , setCounter] = useState (0) ;
  useEffect (() => {
    if ( counter == 10 ) { 
      alert ( "you are at 10")
    }
    
    // alert("Your changes are not saved, you want to leave for sure?")
  } , [counter ])
  // the square bracket at the end is similar to @ in verilog
  cont[4] = (

      // whenever we use something as a function and it starts with use, it called a hook in react

    <div className='App' >
      <button onClick={() => setCounter((x) => (x-1))}> DEC - </button>
      <h1> COUNT = {counter} </h1>
      <button onClick={() => setCounter ( (x) => (x+1) )}> INC + </button>
    </div> 
  );


  return cont[showpage] ;
}

export default App;
