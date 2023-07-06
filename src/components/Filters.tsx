import React from 'react'
import { type FilterValue } from '../types'
import { FOOTER_FILTERS_BUTTONS } from '../consts'

interface Props {
  filterSelected: FilterValue // utiliza una de las keys de TODO_FILTERS
  onFilterChange: (filter: FilterValue) => void
}

export const Filters: React.FC<Props> = ({
  filterSelected,
  onFilterChange
}) => {
  const handleClick = (filter: FilterValue): void => {
    onFilterChange(filter)
  }

  return (
    <ul className='filters'>
      {Object.entries(FOOTER_FILTERS_BUTTONS).map(([key, { href, label }]) => {
        const isSelected = filterSelected === key
        const className = isSelected ? 'selected' : ''

        return (
          <li key={key}>
            <a
              className={className}
              href={href}
              onClick={(e) => {
                e.preventDefault()
                handleClick(key as FilterValue)
              }}
            >
              {label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
