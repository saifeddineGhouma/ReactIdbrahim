import React, { Component } from 'react'

 class Contact extends Component {
    render() {
        const {name,tel , email}=this.props;
        return (
            <div>
                <h2>Contacts : {name}</h2>
                <ul>
                    <li>
                        Tel: {tel}
                    </li>
                    <li>email : {email}</li>
                </ul>
                
            </div>
        )
    }
    
}
Contact.defaultProps = {
    name:"default name",
    tel:"+216 00 000 000",
    email:"mail@mail.com"
}
export default Contact;