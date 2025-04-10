import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";

const DoctorProfile = () => {
  const { dToken, profileData, getProfileData, setProfileData } =
    useContext(DoctorContext);
  const { currecy, backendUrl } = useContext(AppContext);
  console.log(profileData);
  useEffect(() => {
    if (dToken) {
      getProfileData();
    }
  }, [dToken]);
  return (
    profileData && (
      <div>
        <div className="flex flex-col gap-4 m-5">
          <div>
            {" "}
            <img
              className="bg-primary/80 w-full sm:max-w-64 rounded-lg"
              src={profileData.image}
              alt=""
            />
          </div>
        </div>
        <div className="flex-1 border border-stone-100 rounded-lg p-8 py-7 bg-white">
          {/*  doc info name degree experience */}
          <p className="flex items-center gap-2 text-3xl font-medium text-gray-700">
            {profileData.name}
          </p>
          <div className="flex items-center gap-2 mt-1 text-gray-600 ">
            <p>
              {profileData.degree} - {profileData.speciality}
            </p>
            <button className="py-0.5 px-2 border text-xs rounded-full">
              {profileData.experience}
            </button>
          </div>
          {/*  doc about */}

          <div>
            <p className="flex items-center gap-1 text-sm font-medium text-neutral-800 mt-3">
              About:
            </p>
            <p className="text-sm text-gray-600 max-w-[700px] mt-1">
              {profileData.about}
            </p>
          </div>
          <p>
            {" "}
            Appointment fee :{" "}
            <span>
              {currecy} {profileData.fees}
            </span>
          </p>
          <div>
            <p>Address</p>
            <p>
              {profileData.address.line1} <br />
              {profileData.address.line1}
            </p>
          </div>
          <div>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Availabel</label>
          </div>
          <button>Edit</button>
        </div>
      </div>
    )
  );
};

export default DoctorProfile;
