import React,{useState} from 'react';
import InformationTable from './InformationTable';


const style = {
    table: {
      borderCollapse: 'collapse'
    },
    tableCell: {
      border: '1px solid gray',
      margin: 0,
      padding: '5px 10px',
      width: 'max-content',
      minWidth: '150px'
    },
    form: {
      container: {
        padding: '20px',
        border: '1px solid #F0F8FF',
        borderRadius: '15px',
        width: 'max-content',
        marginBottom: '40px'
      },
      inputs: {
        marginBottom: '5px'
      },
      submitBtn: {
        marginTop: '10px',
        padding: '10px 15px',
        border:'none',
        backgroundColor: 'lightseagreen',
        fontSize: '14px',
        borderRadius: '5px'
      }
    }
  }
  
  function PhoneBook(props) {
  
    const [user,setUser] = useState({
      userFirstname:"",
      userLastname:"",
      userPhone:""
    })
    
    const onFieldChange = (e) =>{
     let name = e.target.name;
     let value = e.target.value;
      setUser({...user,
              [name]:value
           })
      }

    const load = () =>{
      props.passNote(user)
    }
  
    
    return (
        <div>
      <form onSubmit={e => { e.preventDefault() }} style={style.form.container}>
        <label>First name:</label>
        <br />
        <input 
          style={style.form.inputs}
          className='userFirstname'
          name='userFirstname' 
          onChange={onFieldChange}
          type='text'
        />
        <br/>
        <label>Last name:</label>
        <br />
        <input 
          style={style.form.inputs}
          className='userLastname'
          name='userLastname' 
          onChange={onFieldChange}
          type='text' 
        />
        <br />
        <label>Phone:</label>
        <br />
        <input
          style={style.form.inputs}
          className='userPhone' 
          name='userPhone' 
          onChange={onFieldChange}
          type='text'
        />
        <br/>
        <input 
          style={style.form.submitBtn} 
          className='submitButton'
          type='submit' 
          value='Add User' 
          onClick={load}
        />
      </form> 

      
     
      
      </div>
      )
  }

  export default PhoneBook;

 

  


  