import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Contact.css'
import {Consumer} from '../context';

 class Contact extends Component {

   state={
    showContactToggle:true
   }


   Delete =(id,dispatch) =>
   {
   dispatch({
    type:'DELETE_CONTACT',
    payload:id
   })
   
   }
    showContact(name)
    {
        console.log(this.state.showContactToggle)
        this.setState({
            showContactToggle:!this.state.showContactToggle
        })

    }
    render() {
         const {id,name,tel , email}=this.props.data;
      return(
         <Consumer>
           {
            value =>{
              const {dispatch}=value;
              return (

 <div>
                         <div className="card" >
  <div className="card-body">
    <h5 className="card-title">
     {name} <i onClick={this.showContact.bind(this,name)} className="fa fa-sort-down"style={{cursor:'grab'}}></i>
     <i className="fa fa-times" style={{color:'red',float:'right',cursor:'pointer'}} onClick={this.Delete.bind(this,id,dispatch)}>
     </i>
    </h5>
    {(this.state.showContactToggle) ? (
        <ul className="list-group">

  <li className="list-group-item">{tel}</li>
  <li className="list-group-item">{email}</li>
</ul>
        ):null}

    
  
  </div>
</div>
                
            </div>
                )

              


              }
           }

         </Consumer>

        )
     
            }
    
}
Contact.defaultProps = {
    name:"default name",
    tel:"+216 00 000 000",
    email:"mail@mail.com"
}
Contact.propTypes = {
  data: PropTypes.object.isRequired,
 
}
export default Contact;