var React	  = require('react')
var createReactClass = require('create-react-class');
var ReactDOM  = require('react-dom');


var Recommendation = createReactClass({
  //Set initial state for radio options
  render: function() {
    return (
            <div className="column is-one-quarter">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={this.props.templateData.image_thumbnail} alt={this.props.templateData.template} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">{this.props.templateData.template}</p>
                      </div>
                    </div>

                    <div className="content">
                      <p>{this.props.templateData.description}</p>
                    </div>
                  </div>
                </div>
            </div>
    )
  },
})

module.exports = Recommendation
