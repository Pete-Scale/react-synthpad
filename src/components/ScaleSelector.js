import { useAppContext } from '../context'
import scales from '../utils/scales'

const categories = Object.entries(scales).reduce((acc, curr) => {
  const [ key, scale ] = curr
  acc[scale.theme].push(key)
  return acc
}, { light: [], dark: [] })

console.log(categories)

const ScaleSelector = () => {
  const { dispatch } = useAppContext()

  return (
    <select onChange={(e) => dispatch({ type: 'CHANGE_SCALE', payload: e.target.value })}>
      {Object.entries(categories).map(cat => {
        const[categoryName, scaleNames] = cat
        return(
          <optgroup label={categoryName} key={categoryName}>
            {scaleNames.map(name => <option value={name} key={name}>{name}</option>)}
          </optgroup>
        )
      })}
    </select>
  )
}

export default ScaleSelector