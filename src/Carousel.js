import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  static getDerivedStateFromProps({ media }) {
    let photos = [];
    if (media && media.photos && media.photos.photo.length > 0) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    } else {
      photos = [{ value: "http://placecorgi.com/300/300" }];
    }
    return { photos };
  }

  handleIndexClick = event => {
    this.setState({
      active: +event.target.dataset.index
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active].value} alt="primary animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            /*eslint-disable-next-line*/
            <img
              onClick={this.handleIndexClick}
              key={photo.value || photo}
              src={photo.value || photo}
              data-index={index}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
