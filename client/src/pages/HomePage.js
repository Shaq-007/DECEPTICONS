import React from "react";
import '../components/Homepage.css';
import '../components/Fonts.css';
const HomePage = () => {
  return (
   
    <div className="container Background">
      <h1>Memory Land</h1>

       <div className="formAlignment">
             <div className="form-text Play">Login to Start Playing</div>
             <div><label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3"></div>
                <button type="submit" className="btn btn-primary">Login</button>
                <br/><br/><br/>
                <div className="form-text newPlay">New User Signup</div>
                <br/><button type="submit" className="btn btn-warning">Sign Up</button>
        </div>
        
      </div>



    
   
  )
};

export default HomePage;
