import React from 'react'
import ReactAutocomplete from 'react-autocomplete'

const AutocompleteItem = (item, isHighlighted) => (
  <div key={item.name} style={{ background: isHighlighted ? 'lightblue' : 'white' }}>{item.name}</div>
)

const AutocompleteMenu = (items, value, style) => (
  <div className="autocomplete-menu" children={items}/>
)

const Autocomplete = ({ items, value, onChange, onSelect }) => (
  <ReactAutocomplete
    items={items}
    value={value}
    onChange={onChange}
    onSelect={onSelect}
    getItemValue={item => item.name}
    renderItem={AutocompleteItem}
    renderMenu={AutocompleteMenu}
    wrapperProps={{ className: 'w-100' }}
    wrapperStyle={{ position: 'relative' }}
    inputProps={{ className: 'form-input' }}
  />
)

export default Autocomplete
