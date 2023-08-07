import React from 'react';
import {useParams,Link,useHistory} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { MDBBtn } from 'mdb-react-ui-kit'; 

const ViewBlogs=()=>{
    const{users} =useSelector(state=>state.data);
    const {id}=useParams();
    const history=useHistory();
    const singleUser=users.find((item)=>item.id===Number(id));
    return(
        <div className='container py-4'>
        
            
               <p className= "display-4">BlogPost Details</p>
               <Link className="btn btn-secondary" to="/">
                   Back
               </Link>
               <hr/>
               {/* <div className='display:flex justify-content:center'> */}
               <ul className="list-group w-50 display:flex justify-content:center ">
               <li className="list-group-item bg-light">ID: {singleUser.id}</li>
               
               <li className="list-group-item bg-light">TITLE: {singleUser.title}</li>

               <li className="list-group-item bg-light">COTEGORY: {singleUser.cotegory}</li>
               
               <li className="list-group-item bg-light">DESCRIPTION: {singleUser.description}</li>
               
               </ul>
               {/* </div> */}
               
               


            </div>
        

    )
}
export default ViewBlogs