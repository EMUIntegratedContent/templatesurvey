var React	= require('react')

var Wrapup = React.createClass({

    //Set initial state
    getInitialState: function () {
      return {
        valid: false
      };
    },

  render: function() {
    return (
      <div>
        <h2>Just a few questions to wrap things up:</h2>
        <div className="field">
          <label class="label">Your Name</label>
          <p className="control">
            <input className="input" type="text" ref="name" onChange={this.checkValid} defaultValue={this.props.fieldValues.name} />
          </p>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <p className="control">
            <input className="input" type="email" ref="email" onChange={this.checkValid} defaultValue={this.props.fieldValues.email} />
          </p>
        </div>
        <div className="field is-grouped">
          <p className="control">
            <button className="button" onClick={this.props.previousStep}>Go Back</button>
          </p>
          <p class="control">
            <button className="button is-info" onClick={this.nextStep} disabled={!this.state.valid}>See My Options</button>
          </p>
        </div>
      </div>
    )
  },

  checkValid: function(){
    if(this.refs.name.value != '' && this.refs.email.value != ''){
        this.setState({
            valid: true
        })
    }
  },

  nextStep: function(e) {
    e.preventDefault()

    // Get values via this.refs
    var data = {
      name     : this.refs.name.value,
      email    : this.refs.email.value,
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
})

module.exports = Wrapup
