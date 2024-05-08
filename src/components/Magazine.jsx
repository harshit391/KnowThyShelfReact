import React from "react";
import $ from "jquery";
import "turn.js";

class Turn extends React.Component {
  static defaultProps = {
    style: {},
    className: "",
    options: {}
  };

  componentDidMount() {
    if (this.el) {
      $(this.el).turn(Object.assign({}, this.props.options));
    }
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  componentWillUnmount() {
    if (this.el) {
      $(this.el)
        .turn("destroy")
        .remove();
    }
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }

  handleKeyDown = event => {
    if (event.keyCode === 39) {
      $(this.el).turn("previous");
    }
    if (event.keyCode === 37) {
      $(this.el).turn("next");
    }
  };

  render() {
    return (
      <div
        className={this.props.className}
        style={Object.assign({}, this.props.style)}
        ref={el => (this.el = el)}
      >
        {this.props.children}
      </div>
    );
  }
}

const options = {
  width: 922,
  height: 600,
  autoCenter: false,
  display: "double",
  acceleration: true,
  elevation: 10,
  gradients: !$.isTouch,
  when: {
    turned: function(e, page) {
      console.log("Current view: ", $(this).turn("view"));
    }
  }
};

const pages = [
  "/pages/1-large.jpg",
  "/pages/2-large.jpg",
  "/pages/3-large.jpg",
  "/pages/4-large.jpg",
  "/pages/5-large.jpg",
  "/pages/6-large.jpg",
  "/pages/7-large.jpg",
  "/pages/8-large.jpg",
  "/pages/9-large.jpg",
  "/pages/10-large.jpg",
  "/pages/11-large.jpg",
  "/pages/12-large.jpg",
];

const Magazine = () => {
  return (
    <div className="main-magazine">
    <Turn options={options} className="magazine">
      {pages.map((page, index) => (
        <div key={index} className="page">
          <img src={page} alt="" />
        </div>
      ))}
    </Turn>
    </div>
  );
};

export default Magazine;
