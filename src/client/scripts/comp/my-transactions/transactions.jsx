import React from 'react';
import { Feed, Icon } from 'semantic-ui-react';
import { Transaction } from 'parity-reactive-ui';
import { bonds } from 'oo7-parity';
import { Hash, Rspan, ReactiveComponent, Ra } from 'oo7-react';
import { TimeBond, Bond } from 'oo7'
// import { Transaction } from './transaction.jsx';


const computeTimeDiff = ([t1,t2]) => Math.floor((t1 - t2.getTime()) / 1000);

class Transactions extends ReactiveComponent {
  constructor() {
    super(['bonds']);
    this.transactions = [];
    this.time = new TimeBond();
  }

  render() {
    if (this.state.bonds === null || this.state.bonds === undefined){
      return (<div style={{border: '2px solid black', padding: '15px'}}>
                <Icon name='warning circle' style={{height: '100%'}} />
                transcations loading
              </div>
      )
    } else {
      this.init(5);
      return (<div style={{border: '2px solid black', padding: '15px'}}>
                <h1 style={{fontWeight:'bold'}}>Transactions</h1>
                <Feed style={{margin:'auto', width:'300px'}}>
                  {this.transactions.map((txn,i) => {
                    return (
                      <Feed.Event key={i}>
                        <Feed.Label>
                          <Icon name='send'></Icon>
                        </Feed.Label>
                        <Feed.Content>
                          <Feed.Summary>
                            <Ra>TX# <Hash value={txn.hash}></Hash></Ra>
                            <Feed.Date><Rspan> {Bond.all([this.time, bonds.blocks[txn.blockHash].timestamp]).map(computeTimeDiff)}s ago</Rspan></Feed.Date>
                          </Feed.Summary>
                          <Feed.Extra text>
                            <Transaction transaction={txn}></Transaction>
                          </Feed.Extra>
                          <Feed.Meta>

                          </Feed.Meta>
                        </Feed.Content>
                      </Feed.Event>
                    )
                  })}
              </Feed>
              </div>
      );
    }
  }


  init(length) {
    this.transactions = [];
    this.state.bonds.map(b => {
      for (let i=0;i<b.transactions.length;i++) {
        if (this.transactions.length<length) this.transactions.push(bonds.transaction(b.transactions[i]));
      }
    })
  }

}

export default Transactions;
