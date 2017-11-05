import React, { Component } from 'react'
import { Radio, GridRow } from 'semantic-ui-react'
import {connect} from 'react-redux'
import { SET_ACCOUNT } from '../actions-types'
import { Helmet } from 'react-helmet'


class RadioGroup extends Component {

  handleChange = (e, { value }) => this.props.setAccount(value)

  render() {
    const {account} = this.props
    return [
      <GridRow key={1}>
        <Helmet>
          <title>{account}</title>
        </Helmet>
        {account}
      </GridRow>,
      <GridRow key={2}>
        <Radio
          label="Instagram"
          onChange={this.handleChange}
          checked={account === 'instagram'}
          value="instagram"
          name="acctype" />
      </GridRow>,
      <GridRow key={3}>
        <Radio
          label="Youtube"
          onChange={this.handleChange}
          checked={account === 'youtube'}
          value="youtube"
          name="acctype" />
      </GridRow>
    ]
  }
}

const mapStateToProps = ({accounts}, ownProps) => ({
  account: accounts.account
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setAccount: payload => {
    dispatch({
      type: SET_ACCOUNT,
      payload
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RadioGroup)