import React, { Component } from 'react'

class AddContact extends React.Component {
	 state={
		name:'',
		phone:'',
		email:''
		
	}
  render(){
  	 const {name,phone, email}=this.state;
    return (

<div className="contact_add">
<div className="row">
<div className="col-md-4">
</div>
<div className="col-md-4">


  <div className="form-group">
    <label htmlFor="email">Name :</label>
    <input type="text" className="form-control" defaultValue={name}  id="name" onChange={this.onChangeInput}/>
  </div>
  <div className="form-group">
    <label htmlFor="pwd">Phone:</label>
    <input type="tel" className="form-control" defaultValue={phone} id="phone" onChange={this.onChangeInput}/>
  </div>
  <div className="form-group">
    <label htmlFor="pwd">E-mail:</label>
    <input type="email" className="form-control" defaultValue={email} id="email" onChange={this.onChangeInput}/>
  </div>
  <button type="submit" className="btn btn-success">Add New Contact</button>

</div>
<div className="col-md-4">
</div>
</div>

</div>





    	)
  }
}
export default AddContact;