import React from 'react'
import { Dropdown, Icon, Menu } from 'semantic-ui-react'

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
    {/* <Dropdown text='Misc' pointing className='link item'>
      <Dropdown.Menu>
        <Dropdown.Item>
          Mining Calculator
        </Dropdown.Item>
        <Dropdown.Item>
          APIs
        </Dropdown.Item>
        <Dropdown.Item>
          Verify Contract
        </Dropdown.Item>
        <Dropdown.Item>
          Byte To Opcode
        </Dropdown.Item>
        <Dropdown.Divider />
      </Dropdown.Menu>
    </Dropdown> */}
  </Menu>
)

export default DropdownNav
