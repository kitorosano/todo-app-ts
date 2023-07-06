import React, { useState } from 'react'
import { type TodoTitle } from '../types'

interface Props {
  saveTodo: ({ title }: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (inputValue === '' || inputValue === undefined) return

    saveTodo({
      title: inputValue
    })

    setInputValue('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='new-todo'
        value={inputValue}
        onChange={handleChange}
        placeholder='¿Qué quieres hacer?'
        autoFocus
      />
    </form>
  )
}
