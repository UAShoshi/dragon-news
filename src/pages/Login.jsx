import { Link, useLocation, useNavigate } from "react-router-dom";
import Navber from "./Sheared/Navber";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log('lacation in the page', location);

  const handleLogin = e =>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);
    signIn(email, password)
    .then(result =>{
      console.log(result.user);

      // Navigate after login
      navigate(location?.state ? location.state : '/')
    })
    .catch(error =>{
      console.error(error);
    })
  }


  return (
    <div>
      <Navber></Navber>
      <div>
      <h1 className="text-3xl font-semibold text-center mb-5">Login your account</h1>
    <div className="shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body md:w-2/3 lg: w-2/3 mx-auto">
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
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-black text-white">Login</button>
        </div>
      </form>
      <p className="text-center">Dont’t Have An Account ?<Link to="/register" className="text-[#F61414] font-semibold"> Register</Link></p>
    </div>
      </div>
    </div>
  );
};

export default Login;