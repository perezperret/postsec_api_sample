import React from 'react'
import ReactAutocomplete from 'react-autocomplete'

class Autocomplete extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      found: [],
      selected: ''
    }

    this.handleSelect = this.handleSelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSelect(value, item) {
    const selected = JSON.stringify(item, null, 2)
    this.setState({ selected, query: value })
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
    return (
      <div className="info-box info-box-warning">
        <h4>Where did you go to school?</h4>
        <div className="form-group">
          <label className="form-label">Search</label>
          <ReactAutocomplete
            items={this.state.found}
            value={this.state.query}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
            getItemValue={item => item.name}
            renderItem={(item, isHightlighted) => <div style={{color: isHightlighted ? 'blue' : 'black'}}>{item.name}</div>}
            wrapperProps={{ className: 'w-100' }}
            inputProps={{ className: 'form-input' }}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Selected:</label>
          <textarea readOnly rows="10" className="form-input" value={this.state.selected} />
        </div>
      </div>
    )
  }
}

export default Autocomplete
