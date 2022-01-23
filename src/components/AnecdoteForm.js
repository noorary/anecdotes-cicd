import React from 'react'
import { connect } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  const handleNewAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.addAnecdote(content)
    props.setNotification(`you added '${content}'`, 5)
  }

  return(
    <div>
      <h3>Add new epic anecdote!</h3>
      <form onSubmit={handleNewAnecdote}>
        <input name="anecdote" />
        <button type="submit">add</button>
      </form>
    </div>
  )
}

// eslint-disable-next-line react-redux/connect-prefer-named-arguments
export default connect(
  null,
  { addAnecdote, setNotification }
)(AnecdoteForm)