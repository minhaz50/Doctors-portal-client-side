import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [SignInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (user) {
    console.log(user);
  }
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-5xl font-semibold text-center">Login</h2>
          <form>
            <h2>Email</h2>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />

            <button className="btn btn-outline ">Button</button>
          </form>
          <div className="divider">OR</div>
          <button
            onClick={() => SignInWithGoogle()}
            className="btn btn-outline"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
