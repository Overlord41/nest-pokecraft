import { appUseSelector } from '../store/store'

export const List = () => {
  const persons = appUseSelector((state) => state.person.persons)
  return (
    <div>
      <p>This is List Components</p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
