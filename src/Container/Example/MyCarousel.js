var React = require("react");
var Carousel = require("../../MyLib/react-3d-carousel/js/Carousel");
var createReactClass = require('create-react-class');
var MyCarousel = createReactClass({
  render: function() {
    return (
      <div className={this.props.className} style={this.props.style}>
        <Carousel
          width={this.props.width}
          height={this.props.height}
          images={this.props.images}
          href={this.props.href}
          text={this.props.text}
          ease={this.props.ease}
          duration={this.props.duration}
          layout={this.props.layout}
        />
      </div>
    );
  }
});
module.exports = MyCarousel;    
