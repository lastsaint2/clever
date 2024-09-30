import react from 'react'
import axios from 'axios'
import { useState , useEffect} from 'react'
const Contact=()=>{
    const [ cont,setcont]=useState([])
    useEffect(()=>{
        axios.get('http://localhost/8000//').then((response)=>{
            setcont(response.data)
})
        .catch((err)=>{
            alert(err)
        });
    },[]);
   return(
        <>
        <div className="cunt">
            <form action="" method="post">
            <input type="text"name='fname'placeholder='enter your fname' />
            <input type="text"name='lname'placeholder='enter your last_name' />
            <input type="email"name='email'placeholder='enter your email' />
            <input type="text-area"name='fname'placeholder='description' />
            </form>
        </div>
        
        { cont.map((item,index) =>(
    
        <div className={index}>
            <h1>{item.fname}</h1>
            <h1>{item.lname}</h1>
            <h1>{item.email}</h1>
            <h1>{item.description}</h1>



        </div>
        ))
    }

        

        
        
       
       </>
    )
}
export default Contact