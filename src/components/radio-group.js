import React, { Component } from 'react'
import { Radio, GridRow } from 'semantic-ui-react'
import { Helmet } from 'react-helmet'
import { appLogic } from '../app-logic'


class RadioGroup extends Component {

  handleChange = (e, { value }) => this.actions.SET_ACCOUNT(value)

  render() {
    const { currentAccount } = this.props
    return [
      <GridRow key={1}>
        <Helmet>
          <title>{ currentAccount }</title>
        </Helmet>
        { currentAccount }
      </GridRow>,
      <GridRow key={2}>
        <Radio
          label="Instagram"
          onChange={this.handleChange}
          checked={currentAccount === 'instagram'}
          value="instagram"
          name="acctype" />
      </GridRow>,
      <GridRow key={3}>
        <Radio
          label="Youtube"
          onChange={this.handleChange}
          checked={currentAccount === 'youtube'}
          value="youtube"
          name="acctype" />
      </GridRow>
    ]
  }
}

export default appLogic(RadioGroup)