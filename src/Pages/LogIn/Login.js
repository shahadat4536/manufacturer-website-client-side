import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";
  if (user || gUser) {
    navigate(from, { replace: true });
  }
  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
    // reset();

    console.log(data);
  };
  let errorElement;
  if (gLoading || loading) {
    return <Loading></Loading>;
  }
  if (error || gError) {
    errorElement = (
      <div>
        <small className="text-center text-red-600">
          <p>{error.message || gError.message}</p>
        </small>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center my-10">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body ">
          <h2 className="text-center text-4xl">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* ---------------------------------------------- email field  start ----------------------------------------------*/}
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your email"
                class="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Enter Your Email",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                    message: "Enter a valid email",
                  },
                })}
              />
              <label class="label">
                {errors.email?.type === "required" && (
                  <span class="label-text-alt text-red-600">
                    {errors?.email?.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span class="label-text-alt text-red-600">
                    {errors?.email?.message}
                  </span>
                )}
              </label>
            </div>
            {/* ---------------------------------------------- password field  start ----------------------------------------------*/}
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Your password"
                class="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Enter Your Password",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "Minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character",
                  },
                })}
              />
              <label class="label">
                {errors.password?.type === "required" && (
                  <span class="label-text-alt text-red-600">
                    {errors?.password?.message}
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span class="label-text-alt text-red-600">
                    {errors?.password?.message}
                  </span>
                )}
              </label>
            </div>
            {/* ---------------------------------------------- password field end ----------------------------------------------*/}

            <input type="submit" value="Sign Up" class="btn w-full max-w-xs" />
          </form>

          {errorElement}
          <p className="text-center  mt-4">
            Not a member?
            <Link className="text-blue-400 pl-2" to="/signup">
              Sign up now
            </Link>
          </p>
          <div className="w-full max-w-xs">
            <div class="divider">OR</div>
          </div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-accent w-full max-w-xs"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
