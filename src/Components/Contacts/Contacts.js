import React, { Component } from 'react'
import {Consumer} from '../context';
import Contact from './Contact';
 class Contacts extends Component {
 /* state= {
    contacts : [
    {id:1,name:"saifeddine",tel:"50908869" , email:"saifgouma@gmail.com"},
    {id:2,name:"Bessem",tel:"205214798" , email:"bessem-bourgaa@gmail.com"},
    {id:3,name:"Amir",tel:"98547123" , email:"amir-zerii@gmail.com"}
    ]
  }*/
  deleteContact(id)
  {
     const {contacts}=this.state;
     const newcontacts=contacts.filter((contact)=>contact.id !== id)
     
     this.setState({contacts : newcontacts })

  }
    render() {
      return(
        <Consumer>
          {
            value => (
  <div>
             {value.contacts.map((contact)=>(
              <Contact key={contact.id} 
              data={contact}

              deleateContactFromContact={this.deleteContact.bind(this,contact.id)}




              />




              ))}
            </div>

              )
          }
        </Consumer>
        )
       
       
    }
    
}


export default Contacts;