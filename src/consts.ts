export const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const

export const FOOTER_FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    label: 'Todas',
    href: `/filters=${TODO_FILTERS.ALL}`
  },
  [TODO_FILTERS.ACTIVE]: {
    label: 'Activas',
    href: `/filters=${TODO_FILTERS.ACTIVE}`
  },
  [TODO_FILTERS.COMPLETED]: {
    label: 'Completadas',
    href: `/filters=${TODO_FILTERS.COMPLETED}`
  }
}
