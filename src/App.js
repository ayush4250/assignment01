import React, {useState} from 'react';
//import Page1 from './UI/Page1';
import Home from './assignment1/Home';
//import PhoneBook from './phonebook/PhoneBook';
//import InformationTable from './phonebook/InformationTable';


function App() {
// const [addphone, setaddphone] = useState([]);


//   const addPhone = (user) =>{
//      setaddphone((prev)=>{
//        return [...prev,user]
//      })

//   }

  return (
    <div>
       {/* <PhoneBook passNote={addPhone} />
       {addphone.map((item,index)=>{
         return (
           <InformationTable 
           key={index}
           fname={item.userFirstname}
           phone={item.userPhone}
           lname={item.userLastname}


          />
         )
       })} */}

       <Home />


    </div>
  )
}

export default App
