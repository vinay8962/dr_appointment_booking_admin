import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";

const DoctorList = () => {
  const { doctors, aToken, getAllDoctors, changeAvailability } =
    useContext(AdminContext);
  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken]);
  console.log(doctors);

  return (
    <div className="m-5 max-h-[90vh] overflow-y-scroll">
      <h1 className="text-lg font-medium">All Doctors</h1>
      <div className="w-full flex flex-wrap gap-4 pt-5 gap-y-6">
        {doctors.map((items, index) => (
          <div
            key={index}
            className="border border-indigo-200  rounded-xl max-w-56 overflow-hidden cursor-pointer group"
          >
            <img
              className="bg-indigo-50 group-hover:bg-primary transition-all duration-500:"
              src={items.image}
              alt=""
            />
            <div className="p-4">
              <p className="text-neutral-800 text-lg font-medium">
                {items.name}
              </p>
              <p className="text-zinc-600 text-sm">{items.speciality}</p>
              <div className="flex mt-2 items-center gap-1 text-sm">
                <input
                  type="checkbox"
                  onChange={() => changeAvailability(items._id)}
                  checked={items.available}
                  name=""
                  id=""
                />
                <p>Available</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
