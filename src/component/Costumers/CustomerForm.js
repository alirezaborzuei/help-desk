
import React , {component} from "react"
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
export default class Form extends React.component{
	state = {
		firstName:"",
		lastName:"",
		username:"",
		email:"",
		password:""
	};
	change = e => {
		this.props.onChange({ [e.target.name] : e.target.value });
		this.setstate({
			[e.target.name] : e.target.value
		});
	};	
	onSubmit = e =>{
		e.preventDefault();
		//this.props.onSubmit(this.state);
		this.setstate({
			firstName:"",
			lastName:"",
			username:"",
			email:"",
			password:""
		});
		this.props.onChange({
			firstName:"",
			lastName:"",
			username:"",
			email:"",
			password:""
		});
	};
	render(){
		return(
		<form>
		<input
		name="firstName"
		placeholder="First name"
		value={this.state.firstName}
		onChange={e =>this.change(e)}
		/>
		<br />
		<input
		name="LastName"
		placeholder="Last name"
		value={this.state.lastName}
		onChange={e =>this.change(e)}
		/>
		<br />
		<input
		name="username"
		placeholder="Username"
		value={this.state.username}
		onChange={e =>this.change(e)}
		/>
		<br />
		<input
		name="email"
		placeholder="Email"
		value={this.state.email}
		onChange={e =>this.change(e)}
		/>
		<br />
		<input
		name="password"
		type="password"
		placeholder="Password"
		value={this.state.password}
		onChange={e =>this.change(e)}
		/>
		<br />
		<button onClick={e => this.onSubmit(e)}>Submit</button>
		</form>
		);
	}
}
