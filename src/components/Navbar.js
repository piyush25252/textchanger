import React from 'react'

function Navbar(props) {
  return (
    <>
    <div className="container"></div>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
  <a className="navbar-brand px-3 pr-3" href="#">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link px-3" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link px-3" href="#">About textUtility</a>
      </li>
      
      
    </ul>

    <div className="form-check form-switch">
      
  <input className="form-check-input pr-3" type="checkbox" onClick={props.toggleMode} role='switch'  id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> {props.enable} Dark Mode</label>
</div>



  </div>
</nav>


</>
  )
}

export default Navbar
