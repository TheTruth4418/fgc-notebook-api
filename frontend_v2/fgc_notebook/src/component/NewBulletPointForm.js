import { Component } from "react";
class NewBulletPointForm extends Component{
    state={
        description: ""
    }

    dataObj={
        description: this.state.description,
        id:this.props.id,
        type:this.props.type
    }

    onChange = (e) => {
        this.setState({
            description:e.target.value})
        this.dataObj.description = e.target.value
    }

    onSubmit= (e) => {
        e.preventDefault()
    }

    onCancel = (e) => {
        e.preventDefault();
        this.props.removeForm()
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <label>Description:</label>
                <input type="text" onChange={this.onChange}/>
                <button onClick={()=>this.props.submit(this.dataObj)}>Add </button>
                <a href="/" onClick={this.onCancel}>Cancel</a>
            </form>
        )
    }
}


export default (NewBulletPointForm)