import React from 'react';
import {Bond} from 'oo7';
import {Rspan} from 'oo7-react';
import {InputBond} from 'parity-reactive-ui';

import {BondsWS, Bonds} from 'oo7-parity';

export class App extends React.Component {

	constructor() {
		super();
		// var b = new Bond();
		// // two variables tied to b if changes gets called
		// var c1 = b.map(t => t);
		// var c2 = b.map(t => t);
		// c1.log();
		// c2.log();
		//
		// // c1 changed b
		// c1.tie(number => {
		// 	console.log("b: " + number);
		// 	b.changed('33');
		// 	// two calls would cause a infinite loop (same for two depths)
		// 	// & no depth problem because this.value is changed which will always be the newest update, so it will never be called with old value
		// });
		// var d1 = c1.map(t => t);
		// d1.tie(number => {
		// 	b.changed('44');
		// });
		//
		// // b changed => c1 transferbond => d1 transferbond => b changed to 44 => console log then b changed 33 => triggers transferbonds (infinite loop)
		// b.changed('22');
		//
		// console.log(c2);

		var b = new BondsWS();
		console.log(b);
		new Bonds();

		// var c = new BondsWS().SubscribeBond;
		// console.log(c.test);
		// BondsWS().SubscribeBond.addListener('eth_accounts', [], console.log());



		this.bond = new Bond();
	}

	render() {
		return (<div>
							<InputBond bond={this.bond} placeholder="Go ahead and type some text"/>
							<Rspan>{this.bond.map(t => t.toUpperCase())}</Rspan>
					  </div>);
	}
}
