import React from 'react'

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link fw-bold text-light fs-6 ms-3" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold text-light fs-6 ms-3" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold text-light fs-6 ms-3" href="/contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold text-light fs-6 ms-3" href='/services'>Services</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
