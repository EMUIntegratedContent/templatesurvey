var React 		= require('react')
var EntityType	= require('./EntityType')
var assign		= require('object-assign')
var fetchUrl   	= require("fetch").fetchUrl
var $	 		= require("jquery")

var fieldValues = {
	name: null,
	password: null,
	email: null
}

var Survey = React.createClass({
  getInitialState: function() {
    return {
      step : 1
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

  submitSurvey: function() {
    // Handle via ajax submitting the user data, upon
    // success return this.nextStop(). If it fails,
    // show the user the error but don't advance

	// source file is iso-8859-15 but it is converted to utf-8 automatically
	/*
	fetchUrl("http://webstage.emich.edu/templatesurvey/php/response.php", function(error, meta, body){
	    console.log(body);
	});
	*/

	// Submit form via jQuery/AJAX
	  $.ajax({
	    type: 'POST',
	    url: 'http://webstage.emich.edu/templatesurvey/php/response.php',
	    data: fieldValues
	  })
	  .done(function(data) {
	    console.log("GOT HEEEEM!")
	  })
	  .fail(function(jqXhr) {
	    console.log('failed to register');
	  });
  },

  showStep: function(){
	switch (this.state.step) {
      case 1:
        return <EntityType fieldValues={fieldValues}
			       nextStep={this.nextStep}
			       previousStep={this.previousStep}
			       saveValues={this.saveValues}
				   submitSurvey={this.submitSurvey} />
      case 2:
        return 2
      case 3:
        return 3
      case 4:
        return 4
    }
  },

  render: function() {
    var style = {
      width : (this.state.step / 4 * 100) + '%'
    }

    return (
      <main>
        <span className="progress-step">Step {this.state.step}</span>
        <progress className="progress" style={style}></progress>
        {this.showStep()}
      </main>
    )
  }

})

module.exports = Survey
