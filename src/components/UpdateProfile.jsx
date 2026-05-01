"use client";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { authClient } from "@/lib/auth-client";

const UpdateProfile = () => {

  const dialogRef = useRef(null);

  const { register, handleSubmit,formState: { errors },} = useForm();

  const handelUpdateForm = async (formData) => {
    const {image,name}=formData;
    console.log(formData);

    await authClient.updateUser({
    image: image,
    name: name,
})

    // safe close
    dialogRef.current?.close();
  };

  return (
    <div>
      <button
        className="btn"
        onClick={() => dialogRef.current?.showModal()}
      >
        Edit Profile
      </button>

      <dialog
        ref={dialogRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Edit Your Profile Info
          </h3>

          <form onSubmit={handleSubmit(handelUpdateForm)}>

            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                placeholder="Enter Your Name"
                {...register("name", {
                  required: "Name is required",
                })}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}

              <label className="label">Image</label>
              <input
                type="url"
                className="input"
                placeholder="Enter Your Image URL"
                {...register("image")}
              />
            </fieldset>

            <button type="submit" className="btn mt-4 w-full">
              Update Profile
            </button>

          </form>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateProfile;