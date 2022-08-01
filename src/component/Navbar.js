import React from 'react'
import {Link} from "react-router-dom";

 const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark ">
  <div className="container-fluid">
    <Link className="navbar-brand text-info bg-dark fw-bold" to="/">JCHI</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-info bg-dark" aria-current="page"to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-info bg-dark"to="/about">about</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link text-info bg-dark"to="/user">User</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
{/* carousel */}
<div className="body">
{/* <div className="container"> */}
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/image/google.png" className="d-block w-100" alt="..." width="25%" height="300px"/>
    </div>
    <div className="carousel-item">
      <img src="/image/mi2.png" className="d-block w-100" alt="..."  width="25%" height="300px" />
    </div>
    <div className="carousel-item">
      <img src="/image/tcs.png" className="d-block w-100" alt="..."  width="25%" height="300px" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
{/* </div> */}

{/* content portion */}
<br />
<div className="container">
<section className=" my-5">
<h3>Internship</h3>
<Link to="/" className="viewall1">view all</Link>
<div className="container text-center ">
  <div className="row row-cols-4">
    <div className="col">
        <div className="card" >
  <img src="/image/google.png" className="card-img-top" alt=".."/>
  <div className="card-body ">
    <h5 className="card-title">Google</h5>
    <p className="card-text">Role: Software Engineer Intern - Summer 
                             Batch: 2024 passports</p>
    <Link to=" https://careers.google.com/jobs/results/80503484702433990-software-engineering-intern-summer-2023/" className="btn btn-primary">Apply Here</Link>
  </div>
</div>
</div>

    <div className="col"><div className="card" >
  <img src="/image/hackerearth.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Hackerearth</h5>
    <p className="card-text">Role: Opportunities and Prizes worth $50k USDT
                             Batch: 2024/2023/2022 passouts</p>
    <Link to="https://hackerearthjobs.hire.trakstar.com/jobs/fk0so6k?apply=true" className="btn btn-primary">Apply Here</Link>
  </div>
</div>
</div>

    <div className="col"><div className="card" >
  <img src="/image/mi2.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Xiaomi</h5>
    <p className="card-text">Role: Software Engineer, Intern and Full Time
                             Batch: 2023/2024 passouts</p>
    <Link to="/" className="btn btn-primary">Apply Here</Link>
  </div>
</div>
</div>

    <div className="col"><div className="card" >
  <img src="/image/google.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Google</h5>
    <p className="card-text">Role: Software Engineer Intern - Winter
                             Batch: 2023 passouts</p>
    <Link to="/" className="btn btn-primary">Apply Here</Link>
  </div>
</div>
</div>
  </div>
</div>
</section>


<section className=" my-5">
<h3>Job</h3>
<Link to="/" className="viewall2">view all</Link>
<div className="container text-center ">
  <div className="row row-cols-4">
    <div className="col">
        <div className="card" >
  <img src="/image/mi2.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Xiaomi</h5>
    <p className="card-text">Role: Software Engineer, Intern and Full Time
Batch: 2023/2024 passouts</p>
    <Link to="/" className="btn btn-primary">Apply Here</Link>
  </div>
</div>
</div>

    <div className="col"><div className="card " >
  <img src="/image/tata.jfif" className="card-img-top temp" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Tata Technologies Hackathon</h5>
    <p className="card-text">
Role: Software Engineers 
Batch: 2022/2023  candidates</p>
    <Link to="/" className="btn btn-primary">Apply Here</Link>
  </div>
</div>
</div>

    <div className="col"><div className="card" >
  <img src="/image/tcs.png" className="card-img-top temp" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Tata Consultancy Services</h5>
    <p className="card-text"> 2023 passouts,
    TCS NQT follows an test pattern for both Ninja and tcs </p>
    <Link to="/" className="btn btn-primary">Apply Here</Link>
  </div>
</div>
</div>

<div className="col"><div className="card" >
  <img src="/image/hpe1.png" className="card-img-top temp" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Hewlett Packard Enterprise </h5>
    <p className="card-text"> Role: Software Engineer
Batch: 2022/2021 passouts </p>
    <Link to="/" className="btn btn-primary">Apply Here</Link>
  </div>
</div>
</div>
</div>
</div>
</section>

<section className=" my-5">
<h3>Hackathons</h3>
<Link to="/" className="viewall3">view all</Link>
<div className="container text-center">
  <div className="row row-cols-4">
    <div className="col">
        <div className="card" >
  <img src="/image/agoda.jfif" className="card-img-top temp" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Agoda</h5>
    <p className="card-text">Codegoda:- hackathon and hiring Opportunities</p>
    <Link to="https://unstop.com/hackathon/codegoda-2022-agoda-363015" className="btn btn-primary">Apply Here</Link>
  </div>
</div>
</div>

    <div className="col"><div className="card" >
  <img src="/image/mi2.png" className="card-img-top temp" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Xiaomi</h5>
    <p className="card-text">Role: Software Engineer, Intern and Full Time
Batch: 2023/2024 passouts</p>
    <Link to="https://www.hackerearth.com/challenges/hackathon/ode2code-20/" className="btn btn-primary">Apply Here</Link>
  </div>
</div>
</div>

    <div className="col"><div className="card" >
  <img src="/image/devpost.jfif" className="card-img-top temp" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Devpost</h5>
    <p className="card-text">Role: Opportunities and Prizes worth $50k USDT
Batch: 2024/2023/2022 </p>
    <Link to="https://buidlit.devpost.com/?utm_campaign=promo" className="btn btn-primary">Apply Here</Link>
  </div>
</div>
</div>

    <div className="col"><div className="card" >
  <img src="..." className="card-img-top temp" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk.</p>
    <Link to="/" className="btn btn-primary">Apply Here</Link>
  </div>
</div>
</div>
  </div>
</div>
</section>


<section className=" my-5">
<h3>competitive programming</h3>
<Link to="/" className="viewall4" >view all</Link>
<div className="container text-center">
  <div className="row row-cols-4">
    <div className="col">
        <div className="card" >
  <img src="/image/gfg.png" className="card-img-top temp" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">GeeksforGeeks</h5>
    <p className="card-text"></p>
    <Link to="/" className="btn btn-primary">Try It</Link>
  </div>
</div>
</div>

    <div className="col"><div className="card" >
  <img src="/image/hackerearth.png" className="card-img-top temp" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Hackerearth</h5>
    <p className="card-text"></p>
    <Link to="/" className="btn btn-primary">Try It</Link>
  </div>
</div>
</div>

    <div className="col"><div className="card " >
  <img src="/image/leetcode.png" className="card-img-top temp" alt="..."/>
  <div className="card-body ">
    <h5 className="card-title">Leetcode</h5>
    <p className="card-text"></p>
    <Link to="/" className="btn btn-primary">Try It</Link>
  </div>
</div>
</div>

    <div className="col"><div className="card" >
  <img src="/image/hackerrank.jfif" className="card-img-top temp" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Hackerrank</h5>
    <p className="card-text"></p>
    <Link to="/" className="btn btn-primary">Try It</Link>
  </div>
</div>
</div>
  </div>
</div>
</section>
</div>



<footer className="colo">
  <span className="foot0 hove mx-5 ">
  contact Us
        <ul className="mx-4">
            <li>12344555</li>
            <li>98764345</li>
        </ul>
        </span>
<Link to="/" className=" foot0 foot hove ">Help desk</Link>
<Link to="/" className="mx-5 foot0 foot hove foot1">Whatsapp</Link>
<Link to="/" className="mx-5 foot0 foot hove foot2">Instagram</Link>
<Link to="/" className="mx-5 foot0 foot hove foot3">Facebook</Link>
<Link to="/about" className="mx-5 foot0 foot hove foot4">About</Link>
<Link to="/" className="mx-5 foot0 foot hove foot5">Copyright</Link>
<Link to="/" className="mx-5 foot0 foot hove foot6">Term and Conditions</Link>

</footer>
</div>
    </>
  )
}

export default Navbar
