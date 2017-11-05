import React, { Component } from 'react'
import { Container, Grid, Button, GridRow } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import AccountsRow from './components/accounts-row'
import RadioGroup from './components/radio-group'
import { connect } from 'react-redux'
import { getUsers } from './api'
import chunk from 'lodash.chunk'
import { FETCH_ACCOUNTS } from './actions-types'
import fetchAccounts from './actions/fetch-accounts'

class App extends Component {

  async componentDidMount() {
    const { account, fetchUsers } = this.props
    fetchUsers(account)
  }
  componentWillReceiveProps({account, fetchUsers}) {
    if (account !== this.props.account) {
      fetchUsers(account)
    }
  }

  handleClick = e => {
    const { account, fetchUsers } = this.props
    const { nextPage } = this.props.fetchAccounts.pagination
    fetchUsers(account, nextPage)
  }

  render() {
    const { accounts } = this.props.fetchAccounts
    
    const { totalCount, onNextPage } = this.props.fetchAccounts.pagination
    return (
        <Grid
        container
        columns={3} >
          <RadioGroup />
          {
          chunk(accounts, 3).map((e, i) =>
              <AccountsRow
                items={e} key={i} />
            )
          }
          <GridRow>
          { onNextPage && <Button onClick={this.handleClick} >Загрузить еще {onNextPage}</Button>}
          </GridRow>
          <GridRow>
            <p>Показано аккаунтов: {accounts.length} из {totalCount}</p>
          </GridRow>
        </Grid>
    )
  }
}

const mapStateToProps = ({ accounts, fetchAccounts }, ownProps) => ({
  account: accounts.account,
  fetchAccounts
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUsers: (list, page = 0) => {
    dispatch(fetchAccounts(list, page))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
