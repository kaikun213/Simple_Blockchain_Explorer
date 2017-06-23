import React from 'react';
import { Grid, Menu, Dropdown, Checkbox } from 'semantic-ui-react';
import { InputBond } from 'parity-reactive-ui';
import { DropdownBond } from './DropdownBond.jsx';
import { Bond } from 'oo7';
import { Rspan } from 'oo7-react';

class Navbar extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (<Grid>
              <Grid.Row verticalAlign='bottom'>
                <Grid.Column mobile={8} tablet={8} computer={4}>
                  {Logo()}
                  <Checkbox toggle label='update' defaultChecked={true} onChange={(event, data) => this.props.checked.changed(data.checked)}/>
                </Grid.Column>
                <Grid.Column mobile={8} tablet={8} computer={4}>
                  <InputBond bond={this.props.bond} placeholder="Filter by Address" fluid />
                  {/* <DropdownBond bond={this.props.bond}></DropdownBond>
                  <Rspan>{this.props.bond}</Rspan> */}
                </Grid.Column>
                <Grid.Column mobile={16} tablet={16} computer={8}>
                  {DropdownNav()}
                </Grid.Column>
              </Grid.Row>
            </Grid>
    );
  }


}


const Logo = () => (<span style={{marginRight:'20px'}}>
          <div>
            <img src="parity.jpg" alt="Parity Logo" height="64" width="64"/>
            <span style={{
              marginTop: '10px',
              fontSize: '50px',
              fontWeight: 'bold',
            }}>Parity</span>  <br />
            <span style={{
              fontSize: '20px',
              fontStyle: 'italic'}}>Blockchain Explorer</span>
          </div>
        </span>
)

const DropdownNav = () => (
  <Menu>
    <Menu.Item>
      Home
    </Menu.Item>
    <Dropdown text='Blockchain' pointing className='link item'>
      <Dropdown.Menu>
        <Dropdown.Header>Blockchain</Dropdown.Header>
        <Dropdown.Item>View Txns</Dropdown.Item>
        <Dropdown.Item>View Pending Txns</Dropdown.Item>
        <Dropdown.Item>View Contract Internal Txns</Dropdown.Item>
        <Dropdown.Item>Cancellations</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>
          View Blocks
          <Dropdown.Menu>
            <Dropdown.Item>
              FORKED Blocks (Reorgs)
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Item>
        <Dropdown.Item>
          View Uncles
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown text='Account' pointing className='link item'>
      <Dropdown.Menu>
        <Dropdown.Item>
          All Accounts
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>
          Normal Accounts
        </Dropdown.Item>
        <Dropdown.Item>
          Certified Accounts
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>
          Verified Contracts
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown text='Token' pointing className='link item'>
      <Dropdown.Menu>
        <Dropdown.Item>
          View tokens
        </Dropdown.Item>
        <Dropdown.Item>
          ERC20 Token Search
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>
          View Token Transfers
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>
          Top 1000 Token Holders
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Item>
      Chart
    </Menu.Item>
  </Menu>
)

export default Navbar;
