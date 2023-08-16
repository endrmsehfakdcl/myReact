import React from 'react'
import './Categories.css'
import { NavLink } from 'react-router-dom'

const categories = [
  { name: 'all', text: '전체보기' },
  { name: 'business', text: '비즈니스' },
  { name: 'health', text: '건강' },
  { name: 'science', text: '과학' },
  { name: 'sports', text: '스포츠' },
  { name: 'technology', text: '기술' }
]

const Categories = ({ category, onSelect }) => {
  return (
    <div className='categoriesBlock'>
      {categories.map(c => (
        <div className='category' key={c.name}>
          <NavLink
            // className={(isActive) => isActive ? 'active' : undefined}
            to={c.name === 'all' ? '/' : '/' + c.name}
          >
            {c.text}
          </NavLink>
        </div>
      ))}
    </div>
  )
}

export default Categories