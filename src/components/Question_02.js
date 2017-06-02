var React	= require('react')
var createReactClass = require('create-react-class');

var Question_02 = createReactClass({

  //Set initial state for radio options
  getInitialState: function () {
    return {
      selectedOption: this.props.fieldValues.doPostEvents,
      valid: false,
    };
  },

  render: function() {
    return (
      <div>
        <h2>Do you currently use the university calendar for posting your events?</h2>
        <div className="field">
          <p className="control">
            <label className="radio">
                <input type="radio" value="1" checked={this.state.selectedOption == 1} onChange={this.handleRadioChange} /> Yes
            </label>
            <label className="radio">
                <input type="radio" value="0" checked={this.state.selectedOption == 0} onChange={this.handleRadioChange} /> No
            </label>
          </p>
        </div>
        <div className="field is-grouped">
          <p className="control">
            <button className="button" onClick={this.props.previousStep}>Go Back</button>
          </p>
          <p class="control">
            <button className="button is-primary" onClick={this.nextStep} disabled={!this.state.valid}>Continue</button>
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
      doPostEvents     : parseInt(this.state.selectedOption),
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
})

module.exports = Question_02
