import React, { useRef } from 'react'
import { addPerson } from '../redux/features/personSlice'
import { appUseDispatch } from '../redux/store'

export const Add = () => {
  const name = useRef<string>('')
  const dispatch = appUseDispatch()
  const addPersonNew = (e: React.SyntheticEvent) => {
    e.preventDefault()
    dispatch(addPerson({ name: name.current }))
  }
  return (
    <>
      <label>Person Name: </label>
      <input
        type="text"
        className="border rounded-md p-2 mx-2"
        onChange={(e) => (name.current = e.target.value)}
      />
      <button
        type="button"
        className="bg-violet-500 text-white rounded-md px-4 cursor-pointer hover:bg-violet-600 active:bg-violet-700"
        onClick={(e) => addPersonNew(e)}
      >
        Add
      </button>
      <button
        type="button"
        className="bg-violet-500 text-white rounded-md px-4 cursor-pointer hover:bg-violet-600 active:bg-violet-700"
        // onClick={() => dispatch(fetchPoke())}
      >
        Get Api
      </button>
    </>
  )
}
