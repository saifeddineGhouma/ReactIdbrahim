import React, { Component } from 'react'

 class Skills extends Component {
    render() {
        const {langage,framwork}=this.props
        return (
            <div>
                
                <h2>Skills </h2>

               <ul>
                   <h4>Language Programmation</h4>

<li>
    {langage}
</li>



               </ul>
               <ul>
                   <h4>Framwork</h4>
                   <li>  {framwork}</li>
                   
               </ul>
                
            </div>
        )
    }
}
export default Skills;