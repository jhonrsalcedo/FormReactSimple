import React, {Component} from 'react';


class Form extends Component{
   state ={
                nombreValue:'',
            apellidoValue:''
        };

    handleSubmit = (e) =>{
          
     console.log(this.state);
     e.preventDefault();
     
        };
   
    handleInputChange = (e) =>{
        this.setState({
           [e.target.name]: e.target.value,
           
        });
    }
 
    render(){
        // console.log('render', this.state)
        return(
            <div>
                <h2>Controlled Form</h2>
                <form onSubmit={this.handleSubmit}>
                <label>Nombre </label>
                    <input
                    type="text"
                    id="nombre-id"
                    name="nombreValue"
                    onChange={this.handleInputChange}
                    value={this.state.nombre}
                    />
                    <label>Apellido </label>
                     <input
                    type="text"
                    id="apellido-id"
                    name="apellidoValue"
                    onChange={this.handleInputChange}
                    value={this.state.apellido}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default Form;