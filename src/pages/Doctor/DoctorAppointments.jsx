import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets_admin/assets";

const DoctorAppointments = () => {
  const {
    appointments,
    getAppointments,
    dToken,
    cancelAppointment,
    completeAppointment,
  } = useContext(DoctorContext);
  const { caltulateAge, slotDateFormat, currency } = useContext(AppContext);

  useEffect(() => {
    if (dToken) {
      getAppointments();
    }
  }, [dToken]);

  return (
    <div className="w-full max-w-6xl mx-auto my-5 px-4">
      <p className="mb-4 text-xl font-semibold text-gray-700">
        All Appointments
      </p>

      <div className="bg-white border rounded-md text-sm max-h-[80vh] min-h-[50vh] overflow-y-auto">
        {/* Table Header */}
        <div className="hidden sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr_1fr] gap-3 py-3 px-6 border-b bg-gray-100 font-medium text-gray-600">
          <p>#</p>
          <p>Patient</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p>Action</p>
        </div>

        {/* Table Rows */}
        {appointments.reverse().map((item, index) => (
          <div
            key={index}
            className="flex flex-wrap sm:grid sm:grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr_1fr] gap-3 items-center py-4 px-6 border-b hover:bg-gray-50"
          >
            <p>{index + 1}</p>
            <div className="flex items-center gap-2">
              <img
                src={item.userData.image}
                alt="patient"
                className="w-8 h-8 rounded-full object-cover"
              />
              <p className="text-gray-700">{item.userData.name}</p>
            </div>
            <div>
              <p className="text-xs inline border border-primary px-2 rounded-full">
                {item.payment ? "Online" : "CASH"}
              </p>
            </div>
            <p>{caltulateAge(item.userData.dob)}</p>
            <p>
              {slotDateFormat(item.slotDate)} <br />
              <span className="text-gray-500">{item.slotTime}</span>
            </p>
            <p>
              {currency} {item.amount}
            </p>
            {item.cancelled ? (
              <p className="text-red-400 text-xs font-medium">Cancelled</p>
            ) : item.isCompleted ? (
              <p className="text-green-500 text-xs font-medium">Completed</p>
            ) : (
              <div className="flex items-center gap-2">
                <img
                  src={assets.cancel_icon}
                  alt="cancel"
                  className="w-6 cursor-pointer hover:scale-110 transition"
                  onClick={() => cancelAppointment(item._id)}
                />
                <img
                  src={assets.tick_icon}
                  alt="confirm"
                  className="w-6 cursor-pointer hover:scale-110 transition"
                  onClick={() => completeAppointment(item._id)}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorAppointments;
