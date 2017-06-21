import React from 'react';
import { Bond } from 'oo7';
import { Rspan, ReactiveComponent } from 'oo7-react';
import { InputBond } from 'parity-reactive-ui';
import { Grid } from 'semantic-ui-react';
import {bonds, formatBlockNumber, formatBalance} from 'oo7-parity';
import Navbar from './comp/my-navbar/navbar.jsx';
import Blocks from './comp/my-blocks/blocks.jsx';
import Transactions from './comp/my-transactions/transactions.jsx';

export class App extends ReactiveComponent {

	constructor() {
		super();
		this.bonds = [];
		this.searchBond = new Bond();
		this.init(5);
	}

	render() {
		return (<div className={'ui stackable'}>
							<Grid>
								<Grid.Row>
									<Grid.Column>
										<Navbar bond={this.searchBond}></Navbar>
									</Grid.Column>
								</Grid.Row>

						    <Grid.Row centered columns={2}>
						      <Grid.Column mobile={16} tablet={16} computer={7}>
										<Blocks bonds={this.bonds}></Blocks>
						      </Grid.Column>
						      <Grid.Column mobile={16} tablet={16} computer={7}>
										<Transactions bonds={this.bonds}></Transactions>
						      </Grid.Column>
						    </Grid.Row>
						  </Grid>
					  </div>);
	}

	init(length) {
		this.bonds.push(bonds.head);
		for (let i=0;i<length-1;i++) {
			this.bonds.push(bonds.blocks[this.bonds[i].parentHash]);
		}
	}
}
