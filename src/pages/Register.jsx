import { useContext } from "react";
import Navber from "./Sheared/Navber";
import { AuthContext } from "../Providers/AuthProvider";


const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = e =>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name  = form.get('name');
    const photoURL = form.get('photo URL');
    const email  = form.get('email');
    const password  = form.get('password');
    console.log(name, photoURL, email, password);

    // create user
    createUser(email, password)
    .then(result => {
      console.log(result.user);
    })
    .catch(error =>{
      console.error(error);
    }) 
  }


  return (
    <div>
      <Navber></Navber>
      <div>
      <h1 className="text-3xl font-semibold text-center mb-5">Register your account</h1>
    <div className="shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body md:w-2/3 lg: w-2/3 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Your Name</span>
          </label>
          <input type="text" name="name" placeholder="Enter your name" className="input bg-base-200" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Photo URL</span>
          </label>
          <input type="text" name="photo URL" placeholder="Enter your photo URL" className="input bg-base-200" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email address</span>
          </label>
          <input type="email" name="email" placeholder="Enter your email address" className="input bg-base-200" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <input type="password" name="password" placeholder="Enter your email password" className="input bg-base-200" required />
          <label className="label">
            <input type="checkbox" name="" id="" />
            <p><small className="ml-2">Accept Term & Conditions</small></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-black text-white">Login</button>
        </div>
      </form>
    </div>
      </div>
    </div>
   
  );
};

export default Register;