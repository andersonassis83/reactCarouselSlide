import React, { Component } from 'react';
import './App.css';

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      photos: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
    .then(response => response.json())
    .then(json => this.setState({photos:json}))
  }

  render(){
      return (
        <div className="container-fluid p-0">
          <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">

            <a className="navbar-brand" href="#"><i className="fab fa-react"></i>&nbsp;ReactApp</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSite" aria-controls="navbarSite" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <section className="collapse navbar-collapse" id="navbarSite">
              <div className="navbar-nav ml-auto pr-3">
                <a className="nav-item nav-link" href="#">Home</a>
                <a className="nav-item nav-link" href="#">Channel</a>
                <a className="nav-item nav-link" href="#">Login</a>
              </div>
              <form className="form-inline">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">@</span>
                  </div>
                  <input type="text" className="form-control mr-1" placeholder="Username"/>
                  <button className="btn btn-outline-success">Login</button>
                </div>
              </form>
            </section>
          </nav>

          <section id="carouselSection" className="carousel slide" data-ride="carousel" data-interval="3000">
            <ol className="carousel-indicators">
              <li data-target="#carouselSection" data-slide-to="0" className="active"></li>
              <li data-target="#carouselSection" data-slide-to="1"></li>
              <li data-target="#carouselSection" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://via.placeholder.com/600/92c952" alt="imagem 1" className="d-block w-100 image-fluid"/>
              </div>
              <div className="carousel-item">
                <img src="https://via.placeholder.com/600/771796" alt="imagem 2" className="d-block w-100 image-fluid"/>
              </div>
              <div className="carousel-item">
                <img src="https://via.placeholder.com/600/24f355" alt="imagem 3" className="d-block w-100 image-fluid"/>
              </div>
            </div>
            <div className="carousel-control-prev" href="#carouselSection" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </div>
            <div className="carousel-control-next" href="#carouselSection" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </div>
          </section>

          <section className="container p-2">
            <ul className="list-unstyled">

              {this.state.photos.map(photo =>{
                return (
                  <li className="media pt-2">
                    <img src={photo.thumbnailUrl} alt="" className="mr-3"/>
                    <div className="media-body">
                      <h5 className="mt-0 mb-1">{photo.title}</h5>
                      <p>Título: {photo.title}</p>
                    </div>
                  </li>
                )
              })}

            </ul>
          </section>

          <footer className="container col-12 pt-3 footer bg-dark text-light text-center">
            <section className="container col-8 col-md-4 d-flex justify-content-around">
              <i class="fab fa-facebook-square mr-2"></i>
              <i class="fab fa-github-square mr-2"></i>
              <i class="fab fa-behance-square mr-2"></i>
              <i class="fab fa-linkedin mr-2"></i>
            </section>

          </footer>
        </div>
      );
  }
}

export default App;
