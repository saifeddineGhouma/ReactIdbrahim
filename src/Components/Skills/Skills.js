import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class Skills extends Component {
    render() {
        const {langage,framwork,experience}=this.props

        return (
            <div>
                
                <h2 >Skills </h2>

               <ul>
             
<li>
    {langage} :   {framwork}  :  {experience} Month
</li>



               </ul>
              
                
            </div>
        )
    }
}
Skills.propTypes = {
  experience: PropTypes.string.isRequired
}
export default Skills;