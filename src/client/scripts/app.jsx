import React from 'react';
import { Bond } from 'oo7';
import { Rspan, ReactiveComponent } from 'oo7-react';
import { InputBond } from 'parity-reactive-ui';
import { Grid } from 'semantic-ui-react';
import {bonds, formatBlockNumber, formatBalance} from 'oo7-parity';
import Navbar from './comp/my-navbar/navbar.jsx';
import Blocks from './comp/my-blocks/blocks.jsx';
import Transactions from './comp/my-transactions/transactions.jsx';
import { Block } from './comp/my-blocks/block.jsx';

export class App extends ReactiveComponent {

	constructor() {
		super();
		this.bonds = [];
		this.staticBlocks = [];
		this.update = true;

		this.searchBond = new Bond();
		this.checked = new Bond();
		this.checked.tie(this.setUpdate.bind(this));
		this.searchBond.tie(search => this.update ? this.setUpdate.call(this, search === '') : '');
		this.init(5);
	}

	render() {
		return (<div className={'ui stackable'}>
							<Grid>
								<Grid.Row>
									<Grid.Column>
										<Navbar bond={this.searchBond} checked={this.checked}></Navbar>
									</Grid.Column>
								</Grid.Row>
								{this.update ?
						    <Grid.Row centered columns={2}>
						      <Grid.Column mobile={16} tablet={16} computer={7}>
										<Blocks bonds={this.bonds} filter={this.searchBond}></Blocks>
						      </Grid.Column>
						      <Grid.Column mobile={16} tablet={16} computer={7}>
										<Transactions bonds={this.bonds}></Transactions>
						      </Grid.Column>
						    </Grid.Row> :
								<Grid.Row centered columns={2}>
									<Grid.Column mobile={16} tablet={16} computer={7}>
										<Blocks bonds={this.staticBlocks} filter={this.searchBond}></Blocks>
									</Grid.Column>
									<Grid.Column mobile={16} tablet={16} computer={7}>
										<Transactions bonds={this.staticBlocks}></Transactions>
									</Grid.Column>
								</Grid.Row> }
						  </Grid>
					  </div>);
	}

	init(length) {
		this.bonds.push(bonds.head);
		for (let i=0;i<length-1;i++) {
			this.bonds.push(bonds.blocks[this.bonds[i].parentHash]);
		}
	}

	setUpdate(bool) {
			if (!bool) {
				Bond.all(this.bonds).then(blocks => {
					this.update = bool;
					this.staticBlocks = blocks;
				})
			} else {
				this.update = bool;
			}
	}

}
