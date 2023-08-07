import React, {useState} from 'react';
import { MDBContainer,
    MDBNavbar,
     MDBNavbarBrand,
     MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse } from 'mdb-react-ui-kit';
    import { NavLink } from 'react-router-dom';
const Header=()=>{
    const [showBasic, SetShowBasic]=useState(false);
    return(
        <>
            <MDBNavbar className='navbar navbar-expand-lg navbar-dark bg-secondary'>
            <MDBContainer fluid>
            
            <MDBNavbarToggler
            aria-controls='navbar'
            aria-expanded='false'
            aria-label='Toggle navigation'
            className="text-white"
            onClick={()=> SetShowBasic(!showBasic)}

           > </MDBNavbarToggler>
           <MDBCollapse navbar show={showBasic}>
           <MDBNavbarNav className="mr-auto mb-2 md-lg-0">
           <MDBNavbarItem>
            <MDBNavbarLink  className="nav-link"> 
                 <NavLink to="/" className="btn btn-outline-light">
                     Home
                 </NavLink>
            </MDBNavbarLink>
            </MDBNavbarItem>
            
            <MDBNavbarItem>
            <MDBNavbarLink  className="nav-link"> 
                 <NavLink to="/addBlog" className="btn btn-outline-light">
                     AddBlog
                 </NavLink>
            </MDBNavbarLink>
            </MDBNavbarItem>
           </MDBNavbarNav>

           </MDBCollapse>
            </MDBContainer>
            </MDBNavbar>
        </>

    );
};
export default Header