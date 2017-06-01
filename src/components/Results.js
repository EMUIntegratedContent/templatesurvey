var React	  = require('react')
var ReactDOM  = require('react-dom');
var classSet  = require('react-classset')
var assign    = require('object-assign')
var $	      = require("jquery")

var Results = React.createClass({
  getInitialState: function() {
    return { recommendations: [] };
  },

  //Set initial state for radio options
  render: function() {
    return (
        <div>
          <div ref="preparing" >
            <h2>Preparing your recommendations.</h2>
          </div>
          <div ref="results" className="hidden">
            <h2>Here are your results.</h2>
            <p>You have soooo many choices!</p>
          </div>
        </div>
    )
  },

  nextStep: function(e) {
    e.preventDefault()
    this.props.nextStep()
  },

  togglePrepResultDiv: function(){
      var preparationNode = ReactDOM.findDOMNode(this.refs.preparing);
      var resultsNode = ReactDOM.findDOMNode(this.refs.results);
      preparationNode.classList.add('hidden')
      resultsNode.classList.remove('hidden')
  },

  // Take all of the recommendations and format them. Add them to the results div.
  assembleRecommendations: function(){
      var resultsNode = ReactDOM.findDOMNode(this.refs.results);
      $.each(this.state.recommendations, function(index, recommendation){
          $(resultsNode).append('<pre>' + recommendation.template + '<pre>')
      })
  },

  //https://stackoverflow.com/questions/26556436/react-after-render-code
  componentDidMount: function() {
      var self = this //need access to 'this' within this function

      $.ajax({
	    type: 'POST',
	    url: 'http://webstage.emich.edu/templatesurvey/php/response.php',
	    data: this.props.fieldValues
	  })
	  .done(function(data) {
          setTimeout(() => {
              self.togglePrepResultDiv()
              self.setState({ recommendations: $.parseJSON(data) })
              self.assembleRecommendations()
          }, 3000);
	  })
	  .fail(function(jqXhr) {
	    console.log('failed to register')
	  });
  }

})

module.exports = Results
