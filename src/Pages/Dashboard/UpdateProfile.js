import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const url = `http://localhost:5000/user/${user.email}`;
  const {
    data: userData,
    isLoading,
    refetch,
  } = useQuery(["userData", user.email], () =>
    fetch(url, {
      method: "GET",
      headers: {
        // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    const updateUserData = {
      education: data.education,
      location: data.location,
      phone: data.phone,
      linkedin: data.linkedin,
    };
    const url = `http://localhost:5000/user/${user.email}`;
    console.log(updateUserData);
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(updateUserData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        reset();
        toast.success("Successful Update Profile");
        navigate("/dashboard/myprofile");
        console.log(data);
      });
  };
  return (
    <div>
      <h2>Update Profile</h2>

      <div className="px-6 py-6">
        <div class="card lg:w-lg bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Update Profile</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
                {/* ---------------------------------------------- education field Start ----------------------------------------------*/}
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Education</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={userData.education}
                    placeholder="education"
                    class="input input-bordered w-full max-w-xs"
                    {...register("education")}
                  />
                </div>
                {/* ---------------------------------------------- education field end ----------------------------------------------*/}
                {/* ---------------------------------------------- location field Start ----------------------------------------------*/}
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Location</span>
                  </label>
                  <input
                    type="text"
                    placeholder="location"
                    defaultValue={userData.location}
                    class="input input-bordered w-full max-w-xs"
                    {...register("location")}
                  />
                </div>
                {/* ---------------------------------------------- location field end ----------------------------------------------*/}
                {/* ---------------------------------------------- Phone Order field Start ----------------------------------------------*/}
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Phone</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    defaultValue={userData.phone}
                    class="input input-bordered w-full max-w-xs"
                    {...register("phone")}
                  />
                </div>
                {/* ---------------------------------------------- Phone Order field end ----------------------------------------------*/}
                {/* ---------------------------------------------- Linkedin field Start ----------------------------------------------*/}
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Linkedin</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Linkedin Account"
                    defaultValue={userData.linkedin}
                    class="input input-bordered w-full max-w-xs"
                    {...register("linkedin")}
                  />
                </div>
              </div>

              <input
                type="submit"
                value="Update Profile"
                class="btn w-full my-7 text-center"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
