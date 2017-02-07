import React from 'react';

export default function Spiral () {
		var arr = [],
			count;
		for (count = 0; count < 5; count++) {
			arr.push(<div key={count} className="hole" ><div className="box"></div></div>);
		}
		return(
			<div className="container">{arr}</div>
			);
		}
