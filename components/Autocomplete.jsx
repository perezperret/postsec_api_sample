import React from 'react'
import ReactAutocomplete from 'react-autocomplete'

const AutocompleteItem = (item, isHighlighted) => (
  <div key={item.name} style={{ background: isHighlighted ? 'lightblue' : 'white' }}>{item.name}</div>
)

const AutocompleteMenu = (items, value, style) => (
  <div className="autocomplete-menu" children={items}/>
)

class Autocomplete extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      found: []
    }

    this.handleSelect = this.handleSelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSelect(value, item) {
    this.setState({ query: item.name })
    this.props.onSelect(item)
  }

  handleChange(_event, value) {
    this.setState({ query: value, selected: '' })
    this.handleSearch(value)
  }

  handleSearch(query) {
    if (!query) {
      this.setState({ found: [] })
      return
    }

    fetch(`/api/institutions?query=${query}`)
    .then((response) => {
      return response.json()
    })
    .then((responseJson) => {
      const found = responseJson.institutions
      this.setState({ found })
    })
  }

  render() {
    return(
      <ReactAutocomplete
        items={this.state.found}
        value={this.state.query}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        getItemValue={item => item.name}
        renderItem={AutocompleteItem}
        renderMenu={AutocompleteMenu}
        wrapperProps={{ className: 'w-100' }}
        wrapperStyle={{ position: 'relative' }}
        inputProps={{ className: 'form-input' }}
      />
    )
  }
}

export default Autocomplete
