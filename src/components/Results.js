var React	  = require('react')
var createReactClass = require('create-react-class');
var ReactDOM  = require('react-dom');
var classSet  = require('react-classset')
var assign    = require('object-assign')
var $	      = require("jquery")
var Recommendation	= require('./Recommendation')

var Results = createReactClass({
  getInitialState: function() {
    return { recommendations: [] };
  },

  // For each recommendation, load the template with the information
  loadRecommendations: function(){

          var recommendations = []
          var objKeys = Object.keys(this.state.recommendations)
          for(var i = 0; i < objKeys.length; i++){
              recommendations.push(
                  <Recommendation templateData={this.state.recommendations[objKeys[i]]} />
              )
          }
          return recommendations

  },

  //Set initial state for radio options
  render: function() {
    return (
        <div>
          <div ref="preparing" >
            <h2>Preparing your recommendations.</h2>
          </div>
          <div ref="results" className="hidden">
              <article className="message">
                <div className="message-header">
                  <p>Here are your results</p>
                </div>
                <div className="message-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                </div>
              </article>
              <div className="columns">
                    {this.loadRecommendations()}
              </div>
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
              self.setState({ recommendations: $.parseJSON(data) })
              self.togglePrepResultDiv()
          }, 5000);
	  })
	  .fail(function(jqXhr) {
	    console.log('failed to register')
	  });
  }

})

module.exports = Results
