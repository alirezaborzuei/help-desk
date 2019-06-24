App.js
import react , {component} from "react";
import logo from "./logo.svg";
import Form from "./Form";
class App extends Component {
	state = {
		fields:{}

};
onchange = updatedValue => {
	this.setState({
		fields: {
			...this.state.fields,
			...updatedValue
		}
	});
};
render() {
	return(
	<div className="App">;
	<Form onChange={fields => this.onChange(fields)} />
	<p>
	{JSON.stringify(this.state.fields,null,2)}
	</p>
	</div>
	
	);
}
}
export default App;