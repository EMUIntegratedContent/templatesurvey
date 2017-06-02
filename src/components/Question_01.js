var React	= require('react')
var createReactClass = require('create-react-class');

var Question_01 = createReactClass({

  //Set initial state for radio options
  getInitialState: function () {
    return {
      selectedOption: this.props.fieldValues.siteType,
      valid: false
    };
  },

  render: function() {
    return (
      <div>
        <h2>For which type of entity will this website be created?</h2>
        <div className="field">
          <p className="control">
            <label className="radio">
                <input type="radio" value="college" checked={this.state.selectedOption === 'college'} onChange={this.handleRadioChange} /> College
            </label>
            <label className="radio">
                <input type="radio" value="department" checked={this.state.selectedOption === 'department'} onChange={this.handleRadioChange} /> Department
            </label>
            <label className="radio">
                <input type="radio" value="program" checked={this.state.selectedOption === 'program'} onChange={this.handleRadioChange} /> Program
            </label>
          </p>
        </div>
        <div className="field is-grouped">
          <p className="control">
            <button className="button is-primary" onClick={this.nextStep} disabled={!this.state.valid} >Continue</button>
          </p>
        </div>
      </div>
    )
  },

  handleRadioChange: function(e) {
      this.setState({
          selectedOption: e.target.value
      })

      this.setState({
          valid: true
      })
  },

  nextStep: function(e) {
    e.preventDefault()

    // Get values via this.refs
    var data = {
      siteType     : this.state.selectedOption,
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
})

module.exports = Question_01
