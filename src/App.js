import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Slide,
  Slider
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import React, { Component } from "react";
import { Nav, Navbar, NavItem, Row, Col } from "react-bootstrap";
import "./App.css";
import homebanner from "./home-banner.jpg";
import aboutpic from "./about-pic.jpg"
import resiImg from "./resi-img.jpg"
import comImg from "./com-img.jpg"
import resi01 from "./resi01.jpg"
import resi02 from "./resi02.jpg"
import comm01 from "./com01.jpg"
import comm02 from "./com02.jpg"
import other01 from "./other01.jpg"
import other02 from "./other02.jpg"



class App extends Component {
  render() {
    return (
      <div className="app" >
        <Header />
        <Banner />
        <Aboutsec />
        <Servicesec />
        <Portfoliosec />
        <Contactsec />
        <Footer />
      </div>
    );
  }
}

export default App;

class Header extends Component {
  state = {
    className: ''
  }

  listenScrollEvent = e => {
    if (window.scrollY > 70) {
      this.setState({ className: 'header-sm' })
    } else {
      this.setState({ className: '' })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }
  render() {
    return (
      <Navbar fixedTop className={this.state.className}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">LM</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Home
          </NavItem>
          <NavItem eventKey={2} href="#">
            About
          </NavItem>
          <NavItem eventKey={2} href="#">
            Services
          </NavItem>
          <NavItem eventKey={2} href="#">
            Projects
          </NavItem>
          <NavItem eventKey={2} href="#">
            Contact
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

class Banner extends React.Component {
  render() {
    return (
      <div>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={4}
        >
          <Slider>
            <Slide index={0}>
              <figure>
                <img src={homebanner} alt="" />
                <figcaption className="container">
                  <div className="bannerfig">
                    <h2>Living Room</h2>
                    <span>
                      Lets get in touch and design wonderful living room for you
                    </span>
                  </div>
                </figcaption>
              </figure>
            </Slide>
            <Slide index={1}>
              <figure>
                <img src={homebanner} alt="" />
                <figcaption className="container">
                  <div className="bannerfig">
                    <h2>Front Desk</h2>
                    <span>
                      Lets get in touch and design wonderful living room for you
                    </span>
                  </div>
                </figcaption>
              </figure>
            </Slide>
            <Slide index={2}>
              <figure>
                <img src={homebanner} alt="" />
                <figcaption className="container">
                  <div className="bannerfig">
                    <h2>Bar Counter</h2>
                    <span>
                      Lets get in touch and design wonderful living room for you
                    </span>
                  </div>
                </figcaption>
              </figure>
            </Slide>
            <Slide index={3}>
              <figure>
                <img src={homebanner} alt="" />
                <figcaption className="container">
                  <div className="bannerfig">
                    <h2>Shop Rack</h2>
                    <span>
                      Lets get in touch and design wonderful living room for you
                    </span>
                  </div>
                </figcaption>
              </figure>
            </Slide>
          </Slider>
          <ButtonBack />
          <ButtonNext />
          <DotGroup />
        </CarouselProvider>
        <a href="#!" className="scrolldown">
          Scroll Down
        </a>
      </div>
    );
  }
}

class Aboutsec extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heading: "About",
      content: "Lorem Ipsum is  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but a lso the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
    }
  }
  render() {
    return (
      <section className="aboutUs">
        <div className="container">
          <h2 className="subtl">{this.state.heading}</h2>
          <Row>
            <Col xs={12} md={6} className="imgfloat">
              <figure>
                <img src={aboutpic} alt="blah"></img>
              </figure>
            </Col>
            <Col xs={12} md={7} mdOffset={5} className="contenttxt">
              <p>{this.state.content}</p>
            </Col>
          </Row >
        </div>
      </section>
    );
  }
}

class Servicesec extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "Services",
      residential: {
        head: "Residential Work",
        cont: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"
      },
      commerical: {
        head: "Commerical Work",
        cont: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"
      },
      hotel: {
        head: "Hotel / Shops Work",
        cont: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"
      },
      other: {
        head: "Other Work",
        cont: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"
      }
    }
  }
  render() {
    return (
      <section className="services">
        <div className="container">
          <h2 className="subtl">{this.state.heading}</h2>
          <Row className="row-md">
            <Col xs={12} md={6}>
              <a href="#">
                <figure>
                  <img src={resiImg} alt="Residential" />
                  <figcaption>
                    <div className="customFig">
                      <h4>{this.state.residential.head}</h4>
                      <p>{this.state.residential.cont}</p>
                    </div>
                  </figcaption>
                </figure>
              </a>
            </Col>
            <Col xs={12} md={6}>
              <a href="#">
                <figure>
                  <img src={comImg} alt="Commercial" />
                  <figcaption>
                    <div className="customFig">
                      <h4>{this.state.commerical.head}</h4>
                      <p>{this.state.commerical.cont}</p>
                    </div>
                  </figcaption>
                </figure>
              </a>
            </Col>
            <Col xs={12} md={6}>
              <a href="#">
                <figure>
                  <img src={resiImg} alt="Hotel / Shops" />
                  <figcaption>
                    <div className="customFig">
                      <h4>{this.state.hotel.head}</h4>
                      <p>{this.state.hotel.cont}</p>
                    </div>
                  </figcaption>
                </figure>
              </a>
            </Col>
            <Col xs={12} md={6}>
              <a href="#">
                <figure>
                  <img src={comImg} alt="Other" />
                  <figcaption>
                    <div className="customFig">
                      <h4>{this.state.other.head}</h4>
                      <p>{this.state.other.cont}</p>
                    </div>
                  </figcaption>
                </figure>
              </a>
            </Col>
          </Row>
        </div>
      </section>
    )
  }
}


class Portfoliosec extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "Projects"
    }
  }
  render() {
    return (
      <section className="projects">
        <h2 className="subtl">{this.state.heading}</h2>
        <div className="filter-container">
          <div className="toolbar">
            <button className="btn-link fil-pro active" href="" data-rel="all">All</button>
            <button className="btn-link fil-pro" data-rel="resi">Residential</button>
            <button className="btn-link fil-pro" data-rel="comm">Commercial</button>
            <button className="btn-link fil-pro" data-rel="others">Others</button>
          </div>

          <div className="clear"></div>
          <div id="projectImg">
            <div className="tile scale-anm resi all img-md">
              <img src={resi01} alt="" />
            </div>
            <div className="tile scale-anm others all img-sm">
              <img src={other01} alt="" />
            </div>
            <div className="tile scale-anm comm all img-lg">
              <img src={comm01} alt="" />
            </div>

            <div className="tile scale-anm resi all img-lg">
              <img src={resi02} alt="" />
            </div>
            <div className="tile scale-anm comm all img-sm">
              <img src={comm02} alt="" />
            </div>
            <div className="tile scale-anm others all img-md">
              <img src={other02} alt="" />
            </div>

            <div className="tile scale-anm resi all img-sm">
              <img src={resi01} alt="" />
            </div>
            <div className="tile scale-anm comm all img-md">
              <img src={comm01} alt="" />
            </div>
            <div className="tile scale-anm others all img-lg">
              <img src={other01} alt="" />
            </div>

          </div>

          <div className="clear"></div>
        </div>
      </section>
    )
  }
}

class Contactsec extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "Contact"
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    if (!event.target.checkValidity()) {
      this.setState({ invalid: true });
      return;
    }
    const form = event.target;
    const data = new FormData(form);

    for (let name of data.keys()) {
      const input = form.elements[name];
      const parserName = input.dataset.parse;
      console.log('parser name is', parserName);
      if (parserName) {
        const parsedValue = inputParsers[parserName](data.get(name))
        data.set(name, parsedValue);
      }
    }
  
    this.setState({
      res: stringifyFormData(data),
      invalid: false,
    });

    fetch('./api/dummy', {
       method: 'POST',
     body: data,
     });
  }
    render() {
      const { res, invalid } = this.state;
      return (
        <section className="contact">
          <div className="container">
            <h2 className="subtl">{this.state.heading}</h2>
            <form onSubmit={this.handleSubmit} noValidate>
              <Row>
                <Col md={6} xs={12}>
                  <ul>
                    <li>
                      <label>Email</label>
                      <span>info@lalchandmewada.com</span>
                    </li>
                    <li>
                      <label>Telephone</label>
                      <span>+91 987654321 / +022 8888888</span>
                    </li>
                    <li>
                      <label>Address</label>
                      <span>93 E. Gore Creek Drive <br />Vail, CO 81657</span>
                    </li>
                  </ul>
                </Col>
                <Col md={6} xs={12}>
                  <p>We’re happy to answer any questions you have or provide you with an estimate. Just send us a message in the form below with any questions you may have.   </p>
                  <Row className="row-sm">
                    <Col md={6}>
                      <div className="input-container">
                        <input
                          id="username"
                          name="username"
                          type="text"
                          data-parse="uppercase"
                        />
                        <span htmlFor="username" className="input-holder">Full Name</span>
                      </div></Col>
                    <Col md={6}><div className="input-container">
                      <input id="email" name="email" type="email" />
                      <span htmlFor="email" className="input-holder">Contact Number</span>
                    </div></Col>
                    <Col md={12}><div className="input-container"><textarea id="sometext" name="message" ></textarea> <span className="input-holder">Type you requirement in short details</span></div></Col>
                    <Col md={12}><button type="submit" className="btn btn-primary">Submit</button></Col>
                  </Row>


                </Col>
              </Row>
              <div className="res-block">
                {invalid && (
                  <ShakingError text="Form is not valid" />
                )}
                {!invalid && res && (
                  <div>
                    <h3>Transformed data to be sent:</h3>
                    <pre>FormData {res}</pre>
                  </div>
                )}
              </div>
            </form>
          </div>
        </section>
      )
    }
  }

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "Contact"
    }
  }
  render() {
    return (
      <footer>
        <div className="container">
          <Row>
            <Col md={6}>© 2018 lalchand mewada</Col>
            <Col md={6} className="text-right"><a href="#" >Terms and Conditions</a></Col>
          </Row>
        </div>
      </footer>
    )
  }
}


const inputParsers = {
  date(input) {
    const split = input.split('/');
    const day = split[1]
    const month = split[0];
    const year = split[2];
    return `${year}-${month}-${day}`;
  },
  uppercase(input) {
    return input.toUpperCase();
  },
  number(input) {
    return parseFloat(input);
  },
};

class ShakingError extends React.Component {
  constructor() { super(); this.state = { key: 0 }; }

  componentWillReceiveProps() {
    // update key to rerender the component to rerun the animation
    this.setState({ key: ++this.state.key });
  }

  render() {
    return <div key={this.state.key} className="bounce">{this.props.text}</div>;
  }
}


function stringifyFormData(fd) {
  const data = {};
	for (let key of fd.keys()) {
  	data[key] = fd.get(key);
  }
  return JSON.stringify(data, null, 2);
}

