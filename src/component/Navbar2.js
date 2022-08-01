import React from 'react'
import {Link} from "react-router-dom";

 const Navbar2 = () => {
  return (
    <>
       <nav className="navbar navbar-expand-lg bg-dark ">
  <div className="container-fluid">
    <Link className="navbar-brand text-info bg-dark fw-bold " to="/">JCHI</Link>
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
      
    </div>
  </div>
</nav>
{/* carousel */}
< div className="body">
{/* <div className="container"> */}
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
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


{/*internships content details */}

<h3 className="head p-3 ">Internship</h3>
<div className="container text-center  p-3">
<Link to="/" className="viewall1 p-5" >view all</Link>
  <div className="row ">
  <div className="col py-3">
    <img src="/image/hackerearth.png" alt="" width="300px" height="200px"  />
    <h5 className="card-title">Hackerearth</h5>
    <p >Role: Opportunities and Prizes worth $50k USDT <br />
                             Batch: 2024/2023/2022 passouts</p>
    <Link to="https://hackerearthjobs.hire.trakstar.com/jobs/fk0so6k?apply=true" className="btn btn-primary ">Apply Here</Link>
    </div>
    <div className="col py-3">
    <img src="/image/google.png" alt=""  width="300px" height="200px"   />
    <h5 className="card-title">Google</h5>
    <p >Role: Software Engineer Intern - Summer <br /> 
                             Batch: 2024 passports</p>
    <Link to=" https://careers.google.com/jobs/results/80503484702433990-software-engineering-intern-summer-2023/" className="btn btn-primary">Apply Here</Link>
    </div>
    
    <div className="col py-3">
    <img src="/image/mi2.png" alt="" width="300px" height="200px"  />
    <h5 className="card-title">Xiaomi</h5>
    <p >Role: Software Engineer, Intern and Full Time <br />
                             Batch: 2023/2024 passouts</p>
    <Link to="https://www.hackerearth.com/challenges/hackathon/ode2code-20/" className="btn btn-primary">Apply Here</Link>
    </div>
    <div className="col py-3">
    <img src="/image/google.png" alt="" width="300px" height="200px"  />
    <h5 className="card-title">Google</h5>
    <p >Role: Software Engineer Intern - Winter <br />
                             Batch: 2023 passouts</p>
    <Link to="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa2xqb3ZTU2xMM3cyRW45b3pWT0dobUhHRzFIUXxBQ3Jtc0tuWFRhR0hyeG5Zb2FQSkt0ZWRYcF94d3lQNWFVd1RnVzZtWHE1NFZJbmUxdTdhUEo4aEpKMlZQdkJNT2VVOG9CZTIxNG10TkxuVlkwZlN6QWI1aXBQRTAxcDFyYjI4LURacndWbnByaTEwMEx1VTFkTQ&q=https%3A%2F%2Fcareers.google.com%2Fjobs%2Fresults%2F132977058662752966-software-engineering-intern-winter-2023%2F&v=vhJrdTwAoqw" className="btn btn-primary">Apply Here</Link>
    </div>

  </div>
</div>


{/* job content details */}
<h3 className="head p-3">Job</h3>
<div className="container text-center  p-3">
<Link to="/" className="viewall2 p-5" >view all</Link>
  <div className="row ">
    <div className="col py-3">
    
    <img src="/image/mi2.png" alt=""  width="300px" height="200px"   />
    <h5 className="card-title">Xiaomi</h5>
    <p className="card-text">Role: Software Engineer, Intern and Full Time <br />
Batch: 2023/2024 passouts</p>
    <Link to="https://www.hackerearth.com/challenges/hackathon/ode2code-20/" className="btn btn-primary">Apply Here</Link>
    </div>
    <div className="col py-3">
    <img src="/image/tata.jfif" alt="" width="300px" height="200px"  />
    <h5 className="card-title">Tata Technologies Hackathon</h5>
    <p className="card-text">
        Role: Software Engineers <br />
        Batch: 2022/2023  candidates</p>
    <Link to=":- https://www.firstnaukri.com/job-listings-get-computer-science-information-technology-hackathon-jobs-in-Bengaluru-Bangalore-Mumbai-Pune-in-TATA-TECHNOLOGIES-110722600002?f=110722600002" className="btn btn-primary">Apply Here</Link>
    </div>
    <div className="col py-3">
    <img src="/image/tcs.png" alt="" width="300px" height="200px"  />
    <h5 className="card-title">Tata Consultancy Services</h5>
    <p className="card-text"> 2023 passouts <br />
    TCS NQT follows an test pattern for both Ninja and tcs </p>
    <Link to="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbDR3WTB0SmlpcVhiWWVCM3FzRFFqUm9zX0VpZ3xBQ3Jtc0tsRkxMay1QMk1JZFNfc1RZRmVuamRRcm1LUE5OUXJJYk1jbk5YaXR0Mlhac21mdEttT0J2TUg4bnFTalZOZlV6R2I4a011Mlg4cDZuajRtWWFpNFRYUmU2T3Q3TnVaQ1plNVUteE9LRy1fX2FGeXVlaw&q=https%3A%2F%2Fwww.tcs.com%2Fcareers%2FTCSFresherHiringYoP2023&v=vhJrdTwAoqw" className="btn btn-primary">Apply Here</Link>
    </div>
    <div className="col py-3">
    <img src="/image/hpe1.png" alt="" width="300px" height="200px"  />
    <h5 className="card-title">Hewlett Packard Enterprise </h5>
    <p className="card-text"> Role: Software Engineer <br />
Batch: 2022/2021 passouts </p>
    <Link to="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbHlYaWtpQUZva3EyQXEyWFFOQU9NdXVTMzFqd3xBQ3Jtc0trUjQydUFGYUdiS1BQMGVTS0psY2Jab3pBLXlDTGMzZ1NCZjIzMkszTVBVMTJ1ZjN1bWloYkl3RDFwTFc0UlFBZGx6REVkN25Hd29sZnFjYnVwb04wMHZUTjhxUWNucHVpSEtqYnhQX0VUYUlzZ3IyMA&q=https%3A%2F%2Fcareers.hpe.com%2Fus%2Fen%2Fjob%2FHPE.&v=vhJrdTwAoqw" className="btn btn-primary">Apply Here</Link>
    </div>

  </div>
</div>

{/* Hackathons content details*/}
<h3 className="head p-3">Hackathons</h3>
<div className="container text-center  p-3">
<Link to="/" className="viewall3 p-5">view all</Link>
  <div className="row ">
    <div className="col py-3">
    <img src="/image/agoda.jfif" alt=""  width="300px" height="200px"   />
    <h5 className="card-title">Agoda</h5>
    <p className="card-text">Codegoda:- hackathon and hiring Opportunities</p>
    <Link to="https://unstop.com/hackathon/codegoda-2022-agoda-363015" className="btn btn-primary">Apply Here</Link>
    </div>
    <div className="col py-3">
    <img src="/image/mi2.png" alt="" width="300px" height="200px"  />
    <h5 className="card-title">Xiaomi</h5>
    <p className="card-text">Role: Software Engineer, Intern and Full Time
Batch: 2023/2024 passouts</p>
    <Link to="https://www.hackerearth.com/challenges/hackathon/ode2code-20/" className="btn btn-primary">Apply Here</Link>
    </div>
    <div className="col py-3">
    <img src="/image/devpost.jfif" alt="" width="300px" height="200px"  />
    <h5 className="card-title">Devpost</h5>
    <p className="card-text">Role: Opportunities and Prizes worth $50k USDT
Batch: 2024/2023/2022 </p>
    <Link to="https://buidlit.devpost.com/?utm_campaign=promo" className="btn btn-primary">Apply Here</Link>
    </div>
    <div className="col py-3">
    <img src="/image/flipkart.png" alt="" width="300px" height="200px"  />
    <h5 className="card-title">Flipkart</h5>
    <p >Role: Software Engineer Intern - Winter <br />
                             Batch: 2023 passouts</p>
    <Link to="/" className="btn btn-primary">Apply Here</Link>
    </div>
  </div>
</div>

{/* competitive programming content details*/}
<h3 className="head p-3">competitive programming</h3>
<div className="container text-center  p-3">
<Link to="/" className="viewall4 p-5">view all</Link>
  <div class="row ">
    <div class="col py-3">
    
    <img src="/image/gfg.png" alt=""  width="300px" height="200px"   />
    <h5 className="card-title">GeeksforGeeks</h5>
    <p className="card-text"></p>
    <Link to="https://www.geeksforgeeks.org/" className="btn btn-primary">Try It</Link>
    </div>
    <div className="col py-3">
    <img src="/image/hackerearth.png" alt="" width="300px" height="200px"  />
    <h5 className="card-title">Hackerearth</h5>
    <p className="card-text"></p>
    <Link to="https://www.hackerearth.com/" className="btn btn-primary">Try It</Link>
    </div>
    <div className="col py-3">
    <img src="/image/leetcode.png" alt="" width="300px" height="200px"  />
    <h5 className="card-title">Leetcode</h5>
    <p className="card-text"></p>
    <Link to="https://leetcode.com/" className="btn btn-primary">Try It</Link>
    </div>
    <div className="col py-3">
    <img src="/image/hackerrank.jfif" alt="" width="300px" height="200px"  />
    <h5 className="card-title">Hackerrank</h5>
    <p className="card-text"></p>
    <Link to="https://www.hackerrank.com/" className="btn btn-primary ">Try It</Link>
    </div>
  </div>
</div>

{/* footer content details  */}
<footer className="colo ">
  <span className="foot0 hove mx-5 p-2 ">
  contact Us
        <ul className="mx-4">
            <li>12344555</li>
            <li>98764345</li>
        </ul>
<Link to="/" className="mx-5 foot0 foot hove ">Help desk</Link>
        </span>
<Link to="/" className="mx-5 p-2 foot0 foot hove foot1">Whatsapp</Link>
<Link to="/" className="mx-5 p-2  foot0 foot hove foot2">Instagram</Link>
<Link to="/" className="mx-5 p-2  foot0 foot hove foot3">Facebook</Link>
<Link to="/about" className="mx-5 p-2 foot0 foot hove foot4">About</Link>
<Link to="/" className="mx-5 p-2  foot0 foot hove foot5">Copyright</Link>
<Link to="/" className="mx-5 p-2  foot0 foot hove foot6">Term and Conditions</Link>

</footer>
</div>
</>
)
}

export default Navbar2