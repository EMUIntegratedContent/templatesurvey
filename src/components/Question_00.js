var React	= require('react')
var createReactClass = require('create-react-class');

var Question_00 = createReactClass({

  //Set initial state for radio options
  render: function() {
    return (
      <div>

                <h1 className="title">
                  Welcome to the EMU Integrated Content New Website Survey
                </h1>
                <h2 className="subtitle">
                   This survey is designed to let us get to know your needs and to present you with design options that fit your needs.
                </h2>
                <button className="button is-info" onClick={this.nextStep}>I'm Ready!</button>

      </div>
    )
  },

  nextStep: function(e) {
    e.preventDefault()

    this.props.nextStep()
  }
})

module.exports = Question_00
