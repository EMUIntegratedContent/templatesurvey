var React 		= require('react')
var createReactClass = require('create-react-class');
var ReactDOM  = require('react-dom')
var Question_00	= require('./Question_00')
var Question_01	= require('./Question_01')
var Question_02	= require('./Question_02')
var Question_03	= require('./Question_03')
var Question_04	= require('./Question_04')
var Question_05	= require('./Question_05')
var Wrapup   	= require('./Wrapup')
var Results		= require('./Results')
var assign		= require('object-assign')
var fetchUrl   	= require("fetch").fetchUrl

var fieldValues = {
	siteType: null,
	doPostEvents: null,
	doHaveHQPhotos: null,
	doHaveStories: null,
	doUseSocialMedia: null,
	name: null,
	email: null
}

var Survey = createReactClass({
  getInitialState: function() {
    return {
      step : 0
    }
  },

  saveValues: function(field_value) {
    return function() {
      fieldValues = assign({}, fieldValues, field_value)
    }.bind(this)()
  },

  nextStep: function() {
    this.setState({
      step : this.state.step + 1
    })
  },

  previousStep: function() {
    this.setState({
      step : this.state.step - 1
    })
  },

  showStep: function(){
	switch (this.state.step) {
	  case 0:
        return <Question_00
  			       nextStep={this.nextStep} />
      case 1:
        return <Question_01 fieldValues={fieldValues}
			       nextStep={this.nextStep}
			       previousStep={this.previousStep}
			       saveValues={this.saveValues} />
      case 2:
	  	return <Question_02 fieldValues={fieldValues}
				   nextStep={this.nextStep}
				   previousStep={this.previousStep}
				   saveValues={this.saveValues} />
      case 3:
		return <Question_03 fieldValues={fieldValues}
				   nextStep={this.nextStep}
				   previousStep={this.previousStep}
				   saveValues={this.saveValues}
				   submitSurvey={this.submitSurvey} />
      case 4:
	  	return <Question_04 fieldValues={fieldValues}
				 nextStep={this.nextStep}
				 previousStep={this.previousStep}
				 saveValues={this.saveValues} />
	  case 5:
	    return <Question_05 fieldValues={fieldValues}
				 nextStep={this.nextStep}
				 previousStep={this.previousStep}
				 saveValues={this.saveValues} />

	  case 6:
		return <Wrapup fieldValues={fieldValues}
		   		  nextStep={this.nextStep}
		   		  previousStep={this.previousStep}
		   		  saveValues={this.saveValues} />
	  case 7:
   	    return <Results fieldValues={fieldValues} />
    }
  },

  render: function() {
    var style = {
      width : (this.state.step / 7 * 100) + '%'
    }

    return (
      <main>
        <progress className="progress" style={style}></progress>
        {this.showStep()}
      </main>
    )
  }

})

module.exports = Survey
