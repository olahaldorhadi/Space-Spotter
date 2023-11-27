import { useContext } from 'react'
import { FilterContextProps, FilterContext } from './FilterContext'

export function useFilterContext(): FilterContextProps {
    const context = useContext(FilterContext)
    if (!context) {
        throw new Error('useFilterContext must be used within a FilterProvider')
    }
    return context
}
