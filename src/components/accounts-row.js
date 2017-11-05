import React from 'react'
import {GridColumn, GridRow, Card} from 'semantic-ui-react'


const renderCard = ({ name, followers, postPrice }, i) =>
  <GridColumn key={i} >
    <Card
      centered
      header={name}
      meta={'подпичсиков: ' + followers}
      extra={'цена: ' + postPrice}
    />
  </GridColumn>

export default ({items}) =>
   <GridRow>
     {items.map(renderCard)}
  </GridRow>