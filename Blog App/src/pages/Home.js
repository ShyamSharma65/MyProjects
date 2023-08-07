import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {deletUserStart, loadUsersStart } from "../redux/actions";
import { MDBTable, MDBTableHead,MDBTableBody, MDBBtn, MDBIcon, MDBTooltip, MDBSpinner,  } from "mdb-react-ui-kit";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Likes from './Likes';



const Home=()=>{
    const dispatch = useDispatch();
    const {users, loading, error}= useSelector((state)=>state.data);

    useEffect(()=>{
        dispatch(loadUsersStart());
    }, []);
    if(loading){
        return (
            <MDBSpinner style={{marginTop:"150px"}} role="status">
            <span className="visually-hidden">Loading...</span>
            </MDBSpinner>
        );

    }

    const handleDelete =(id)=>{
        if(window.confirm("Are you sure you want to delete the blog")){
        dispatch(deletUserStart(id));
        toast.success("Blog delete successfully")
        }

    };
    return(
        <div className="container"  style={{marginTop:"150px"}}>
        <MDBTable>
        <MDBTableHead dark>
        <tr>
            <th scope="col">#</th>
            <th scope="col">TITLE</th>
            <th scope="col">ACTION</th>
        </tr>

        </MDBTableHead>
        {users && users.map((item, index)=>(
            <MDBTableBody key={index}>
            <tr>
                <td scope="row">{index+1}</td>
                <td scope="row">{item.title}</td>
                <td>
                    <MDBBtn 
                    className='m-2'
                    tag='a'
                    color='none'
                    onClick={()=>handleDelete(item.id)}>
                    <MDBTooltip title="Delete" tag="a">
                    {/* <MDBIcon
                     fas 
                     icon="trash"
                      style={{color:"#dd4b39"}}
                       size="lg"/> */}
                       Delete
                    </MDBTooltip>

                    </MDBBtn> {" "}
                    <MDBBtn
                    className='m-2'
                    tag='a'
                    color='none'>
                    <Link to={`/editBlog/${item.id}`}>
                    <MDBTooltip title="Edit" tag="a">
                    {/* <MDBIcon
                     fas 
                     icon="trash"
                      style={{color:"#dd4b39"}}
                       size="lg"/> */}
                       Edit
                    </MDBTooltip>{"  "}
                    

                    </Link>
                    </MDBBtn> 
                    <MDBBtn
                    className='m-2'
                    tag='a'
                    color='none'>
                    <Link to={`/viewBlog/${item.id}`}>
                    <MDBTooltip title="View" tag="a">
                     <MDBIcon
                     fasicon="trash"
                      style={{color:"#dd4b39"}}
                       size="lg"/> 
                       View
                    </MDBTooltip>

                    </Link>
                    </MDBBtn>
                    
                    <Likes/>
                </td>


            </tr>

            </MDBTableBody>

        ))}
        </MDBTable>
           
        </div>

    )
}
export default Home