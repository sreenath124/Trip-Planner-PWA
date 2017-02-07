import React from 'react';

export default class TripInput extends React.Component {
	constructor(props){
		super(props);
		this.from=undefined;
		this.to=undefined;
		this.stop=undefined;
	}
	enter(){
		var list=[];
		if(this.from.value.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/) && this.to.value.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)){
			list.push(this.from.value,this.to.value,this.stop.value);
			this.props.input(list);
		}
		else{
			alert("Enter correct locations");
		}
	}
	render() {
		if(this.props.data.loc[0]!=undefined){
			this.from.value="";
			this.to.value="";
			this.stop.value="";
			this.from.placeholder=this.props.data.loc[0].origin;
			this.stop.placeholder=this.props.data.stops;
			this.to.placeholder=this.props.data.loc[this.stop.placeholder-1].dest;
		}
		return (

			<div className="trip_input">

				<h2>Plan Your Journey </h2>
				
				<input className="from" type="text" name="from" ref={from => this.from = from} placeholder="From" />
			
				<input className="to" type="text" name="to" ref={to => this.to = to} placeholder="To"/>
			
				<input className="stop" type="text" name="stop" ref={stop => this.stop = stop} placeholder="Stops"/>
				<button width="50px" height="50px" onClick={this.enter.bind(this)}>LET'S GO</button>
			</div>

		)
	}

};

