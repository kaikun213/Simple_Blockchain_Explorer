import React from 'react';
import DropdownNav from './dropdown.jsx';
import { Grid } from 'semantic-ui-react';
import { InputBond } from 'parity-reactive-ui';

const Logo = () => (<div>
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
)

class Navbar extends React.Component {
  constructor(){
    super();

  }

  render() {

    const Search = () => (
        <InputBond bond={this.props.bond} placeholder="Search by Address"/>
    )

    return (<Grid>
              <Grid.Row verticalAlign='bottom'>
                <Grid.Column mobile={8} tablet={8} computer={4}>
                  {Logo()}
                </Grid.Column>
                <Grid.Column mobile={8} tablet={8} computer={4}>
                  {Search()}
                </Grid.Column>
                <Grid.Column mobile={16} tablet={16} computer={8}>
                  {DropdownNav()}
                </Grid.Column>
              </Grid.Row>
            </Grid>
    );
  }

}

export default Navbar;
