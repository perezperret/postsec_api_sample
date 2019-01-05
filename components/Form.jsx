import React from 'react'
import Autocomplete from './Autocomplete'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: '', awake: false }

    this.handleSelect = this.handleSelect.bind(this)
  }

  componentDidMount() {
    this.wakeServerUp()
  }

  wakeServerUp(retries = 5) {
    fetch('/api')
    .then(() => { this.setState({ awake: true })})
    .catch(() => {
      if (retries > 0) { this.wakeServerUp(retries - 1) }
    })
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
          {
            this.state.awake
            ? <Autocomplete onSelect={this.handleSelect} />
            : <input className="form-input" disabled={true} placeholder="Wait while the API server wakes up..." />
          }
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
