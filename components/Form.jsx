import React from 'react'
import Autocomplete from './Autocomplete'

class Form extends React.Component {
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
      <div className="info-box info-box-info">
        <h4>Where did you go to school?</h4>
        <div className="form-group">
          <label className="form-label">Search</label>
          <Autocomplete
            items={this.state.found}
            value={this.state.query}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Selected:</label>
          <textarea readOnly rows="5" className="form-input" value={this.state.selected} />
        </div>
      </div>
    )
  }
}

export default Form
