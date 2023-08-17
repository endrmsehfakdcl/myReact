import React from 'react'
import './Categories.css'
import { NavLink } from 'react-router-dom'

const categories = [
  { name: 'Java', text: 'Java' },
  { name: 'HTML', text: 'HTML' },
  { name: 'JavaScript', text: 'JavaScript' },
  { name: 'JSP', text: 'JSP' },
  { name: 'React', text: 'React' },
  { name: 'Spring', text: 'Spring' },
  { name: 'Database', text: 'Database' }
]

const Categories = ({ category, onSelect }) => {
  return (
    <div className='categoriesBlock'>
      {categories.map(c => (
        <div className='category' key={c.name}>
          <NavLink
            // className={(isActive) => isActive ? 'active' : undefined}
            to={c.name === 'Java' ? '/' : '/' + c.name}
          >
            {c.text}
          </NavLink>
        </div>
      ))}
    </div>
  )
}

export default Categories