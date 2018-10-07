import React from 'react'
import Autocomplete from './Autocomplete'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: '' }

    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(item) {
    const selected = item ? JSON.stringify(item, null, 2) : ''
    this.setState({ selected })
  }

  render() {
    return (
      <div className="info-box info-box-warning">
        <h4>Where did you go to school?</h4>
        <div className="form-group">
          <label className="form-label">Search:</label>
          <Autocomplete onSelect={this.handleSelect} />
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
