import React, {useState, useEffect} from 'react';
import { MDBValidation, MDBInput, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { createUserStart, updateUserStart } from '../redux/actions';
import { toast } from 'react-toastify';


const initialState={
    title:"",
    description:""
}
const AddEditBlogs=()=>{
    const [formValue, setFormValue]=useState(initialState);
    const [editMode, setEditMode]=useState(false);
    const {users}=useSelector(state=>state.data);
    const {title, cotegory,description}=formValue;
    const history =useHistory();
    const dispatch=useDispatch();
    const{id}=useParams();

    useEffect(()=>{
      if(id){
        setEditMode(true)
        const singleUser=users.find((item)=>item.id === Number(id));
        setFormValue({...singleUser});

      }else{
        setEditMode(false);
        setFormValue({...initialState})
      }

    },[id])
    const handleSubmit=(e)=>{
      e.preventDefault();
      if(title && description){
        if(!editMode){

        
        dispatch(createUserStart(formValue));
        toast.success("blog posted successsfully");
        setTimeout(()=>history.push("/"), 500);
        }else{
          dispatch(updateUserStart({id, formValue}));
          setEditMode(false);
          toast.success("Blog edited successsfully");
          setTimeout(()=>history.push("/"), 500);
        }
      }
    };
    const onInputChange=(e)=>{
        let {name, value}=e.target;
        setFormValue({...formValue, [name]:value});
    };
    return(
        
       <MDBValidation className="row g-3"
       style={{marginTop:"100px"}}
       noValidate
       onSubmit={handleSubmit}
       >

       <p className="fs-2 fw-bold">{!editMode ? "Add Blog" : "Edit Blog"}</p>
       <div 
       style={{
        margin:"auto",
        padding:"15px",
        maxWidth:"400px",
        alignContent:"center"
       }}
       >
       <MDBInput
        value={title || ""}
        name="title"
        type="text"
        onChange={onInputChange}
        required
        label="Title"
        Validation="Please Enter Title"
        invalid
       />

        <br/>
        <MDBTextArea
        value={cotegory || ""}
        name="cotegory"
        type="text"
        onChange={onInputChange}
        required
        label="Cotegories"
        Validation="Please Enter Cotegory Type"
        invalid
       />

       <br/>
        <MDBTextArea
        value={description || ""}
        name="description"
        type="text"
        onChange={onInputChange}
        required
        label="Description"
        Validation="Please Enter Description"
        invalid
       />
     <br/>

     <div className="col-12">
     <MDBBtn style={{marginRight:"10px"}} type="submit" color="secondary">
     {!editMode ? "Add" : "Edit blog"}
     </MDBBtn>
     <MDBBtn onClick={()=> history.push("/")} color="secondary">
      Back
     </MDBBtn>

     </div>
       </div>

       </MDBValidation>


    )
}
export default AddEditBlogs