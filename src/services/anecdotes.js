import axios from 'axios'

const baseUrl = '/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0, id: getId() }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const update = async (anecdote) => {
  console.log(anecdote)
  const updated = await axios.put(`${baseUrl}/${anecdote.id}`, anecdote)
  return updated.data
}

export default { getAll, createNew, update }