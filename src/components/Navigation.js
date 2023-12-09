import "./Style.css";
import React from 'react';
import{useState,useEffect} from 'react'
import '../App.css'
import { Link,NavLink } from 'react-router-dom'
export default function NavigationBar(){
    return (
        <div>
        <div class="container-field Style.padding=10" >
	        <div class="row">
		        <div class="col-md-3">
			        <h1>E-kala</h1>
		        </div>
		      <div class="col-md-6">
                <form class="d-flex">
		            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>&nbsp;
		            <button class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
	            </form>
            </div>
	        <div class="col-md-3">
	            <a href="" class="btn btn-success">Login</a>&nbsp;&nbsp;
	            <a href="" class="btn btn-primary">Register</a>
	        </div>
            </div>
        </div>

    <nav class="navbar navbar-expand-lg navbar-light bg-custom ">
	    <div class="container-fluid">
		    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent" aria-expanded="false"
			aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		    </button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item active"><a class="nav-link active"
					aria-current="page" href="#"><i class="fa-solid fa-house"></i>Home</a></li>
        <li class="nav-item active"><a class="nav-link" href="#">Recent Art</a></li>
				<li class="nav-item active"><a class="nav-link" href="#">New Art</a></li>
				<li class="nav-item"><a class="nav-link" href="#"
					tabindex="-1" aria-disabled="true">Old Art</a></li>
			</ul>
      <div>
        <form class="d-flex" >
				  <button class="btn btn-light" type="submit"  align="right" ><i class="fa-solid fa-gear"></i>Setting</button>&nbsp;&nbsp;
                  <button class="btn btn-light" type="submit">Contact Us</button>
			  </form>
      </div>
			
		</div>
	    </div> 
    </nav>
    <div>
      <section className='main-card-container'>
      <div className='card-container'>
        <div className='card'>
          <div className='card-body'>
            <span className='card-id'></span>
            <h2 className='card-name'></h2>
            <span className='card-price'></span>
            <span className='card-image'></span>
            <span className='card-description'></span>
          </div>
       </div>
      </div>
      </section>
    </div>
    <div>
      <section className='main-card-container'>
      <div className='card-container'>
        <div className='card'>
          <div className='card-body'>
            <span className='card-id'></span>
            <h2 className='card-name'></h2>
            <span className='card-price'></span>
            <span className='card-image'></span>
            <span className='card-description'></span>
          </div>
       </div>
      </div>
      </section>
    </div>
    <div>
      <section className='main-card-container'>
      <div className='card-container'>
        <div className='card'>
          <div className='card-body'>
            <span className='card-id'></span>
            <h2 className='card-name'></h2>
            <span className='card-price'></span>
            <span className='card-image'></span>
            <span className='card-description'></span>
          </div>
       </div>
      </div>
      </section>
    </div>
    </div>
    )
}