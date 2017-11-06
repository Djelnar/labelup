import React, { Component } from 'react'
import { Container, Grid, Button, GridRow } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import AccountsRow from './components/accounts-row'
import RadioGroup from './components/radio-group'
import chunk from 'lodash.chunk'
import { appLogic } from './app-logic'


class App extends Component {

  async componentDidMount() {
    const { FETCH_ACCOUNTS } = this.actions
    const { currentAccount } = this.props
    FETCH_ACCOUNTS(currentAccount)
  }
  componentWillReceiveProps({ currentAccount }) {
    const { FETCH_ACCOUNTS } = this.actions
    if (currentAccount !== this.props.currentAccount) {
      FETCH_ACCOUNTS(currentAccount)
    }
  }

  handleClick = e => {
    const { FETCH_ACCOUNTS }  = this.actions
    const { nextPage, currentAccount } = this.props
    FETCH_ACCOUNTS(currentAccount, nextPage)
  }

  render() {
    const { accountList, totalCount, onNextPage } = this.props
    return (
        <Grid
        container
        columns={3} >
          <RadioGroup />
          {
          chunk(accountList, 3).map((e, i) =>
              <AccountsRow
                items={e} key={i} />
            )
          }
          <GridRow>
          { onNextPage && <Button onClick={this.handleClick} >Загрузить еще {onNextPage}</Button>}
          </GridRow>
          <GridRow>
            <p>Показано аккаунтов: {accountList.length} из {totalCount}</p>
          </GridRow>
        </Grid>
    )
  }
}


export default appLogic(App)