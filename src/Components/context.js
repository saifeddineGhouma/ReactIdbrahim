import React, { Component } from 'react'

const Context = React.createContext()

   const reducer =(state,action) =>{
    
    switch(action.type)
    {
      case "DELETE_CONTACT":
      return {
        contacts:state.contacts.filter((contact)=>contact.id !== action.payload)
      };
      default :
      return state
    }
   }
export  class Provider extends Component {
   state= {
    contacts : [
    {id:1,name:"saifeddine",tel:"50908869" , email:"saifgouma@gmail.com"},
    {id:2,name:"Bessem",tel:"205214798" , email:"bessem-bourgaa@gmail.com"},
    {id:3,name:"Amir",tel:"98547123" , email:"amir-zerii@gmail.com"}
    ],
    dispatch : action=>this.setState(state=>reducer(state,action))
  }


    render() {
       

        return (
            <div>
                
             <Context.Provider value={this.state}>
                   {this.props.children}
             </Context.Provider>
                
            </div>
        )
    }
}
export const Consumer = Context.Consumer;
 