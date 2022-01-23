import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const Filter = (props) => {

  const handleChange = (event) => {
    const filter = event.target.value
    props.setFilter(filter)
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter anecdotes
      <input name='filter' onChange={handleChange}></input>
    </div>
  )
}

// eslint-disable-next-line react-redux/connect-prefer-named-arguments
export default connect(
  null,
  { setFilter }
)(Filter)