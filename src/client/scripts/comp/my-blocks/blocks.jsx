import React from 'react';
import {bonds, formatBlockNumber, formatBalance} from 'oo7-parity';
import { Rspan, Rdiv, Ra, ReactiveComponent } from 'oo7-react';
import { Bond, TimeBond } from 'oo7';
import { AccountIcon } from 'parity-reactive-ui';
import { Feed, Icon } from 'semantic-ui-react'
import { Block } from './block.jsx';

const computeTime = ([t1,t2]) => (t1.getTime() - t2.getTime()) / 1000;
const computeTimeDiff = ([t1,t2]) => Math.floor((t1 - t2.getTime()) / 1000);
const getParent = b => bonds.blocks[b.parentHash];

class Blocks extends ReactiveComponent {
  constructor() {
    super(['bonds', 'filter']);
    this.time = new TimeBond();
  }

  render() {
    const filterBlocks = b => b.hash.startsWith(this.state.filter) || b.hash.startsWith(this.state.filter,2);

    if (this.state.bonds === null || this.state.bonds === undefined){
      return (<div style={{border: '2px solid black', padding: '15px 5% 15px 5%'}}>
                <Icon name='warning circle' style={{height: '100%'}} />
                blocks loading
              </div>
      )
    } else {
      const blocks = this.state.bonds.filter(filterBlocks);
      return (<div style={{border: '2px solid black', padding: '15px 5% 15px 5%'}}>
                <h1 style={{fontWeight:'bold'}}>Blocks</h1>
                <Feed style={{margin:'auto', width:'300px'}}>
                  {blocks.map((block,i) => {
                    return (
                      <Feed.Event key={i}>
                        <Feed.Label>
                          <AccountIcon address={block.author}></AccountIcon>
                        </Feed.Label>
                        <Feed.Content>
                          <Feed.Summary>
                            <a> Block {formatBlockNumber(block.number)} </a> is mined
                            <Feed.Date><Rspan> {Bond.all([this.time, block.timestamp]).map(computeTimeDiff)}s ago</Rspan></Feed.Date>
                          </Feed.Summary>
                          <Feed.Extra text>
                            <Block block={block} minerRegistry={true} hash={true} parentHash={true} totalDifficulty={true} difficulty={true} timestamp={true} blockNumber={false}></Block>
                          </Feed.Extra>
                          <Feed.Meta>
                            <a>{block.transactions.length} txns</a> in <Rspan>
                                          {i === (blocks.length-1)
                                          ? Bond.all([block.timestamp,getParent(block).timestamp]).map(computeTime)
                                          : Bond.all([block.timestamp,blocks[i+1].timestamp]).map(computeTime)} sec</Rspan>
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
}

export default Blocks;
