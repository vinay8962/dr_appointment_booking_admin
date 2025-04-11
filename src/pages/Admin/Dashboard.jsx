import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { assets } from "../../assets/assets_admin/assets";
import { AppContext } from "../../context/AppContext";

const Dashboard = () => {
  const { getDashboardData, dashboard, cancelAppointment, aToken } =
    useContext(AdminContext);
  const { slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if (aToken) {
      getDashboardData();
    }
  }, [aToken]);

  return (
    <div className="m-5">
      {/* Cards Section */}
      <div className="flex flex-wrap gap-4">
        {/* Doctors Card */}
        <div className="flex items-center gap-3 bg-white p-4 min-w-52 rounded-lg border border-gray-100 shadow-sm cursor-pointer hover:scale-[1.03] transition-transform">
          <img className="w-14" src={assets.doctor_icon} alt="Doctors" />
          <div>
            <p className="text-xl font-semibold text-gray-700">
              {dashboard?.doctors ?? 0}
            </p>
            <p className="text-gray-400">Doctors</p>
          </div>
        </div>

        {/* Appointments Card */}
        <div className="flex items-center gap-3 bg-white p-4 min-w-52 rounded-lg border border-gray-100 shadow-sm cursor-pointer hover:scale-[1.03] transition-transform">
          <img
            className="w-14"
            src={assets.appointments_icon}
            alt="Appointments"
          />
          <div>
            <p className="text-xl font-semibold text-gray-700">
              {dashboard?.appointments ?? 0}
            </p>
            <p className="text-gray-400">Appointments</p>
          </div>
        </div>

        {/* Patients Card */}
        <div className="flex items-center gap-3 bg-white p-4 min-w-52 rounded-lg border border-gray-100 shadow-sm cursor-pointer hover:scale-[1.03] transition-transform">
          <img className="w-14" src={assets.patients_icon} alt="Patients" />
          <div>
            <p className="text-xl font-semibold text-gray-700">
              {dashboard?.patients ?? 0}
            </p>
            <p className="text-gray-400">Patients</p>
          </div>
        </div>
      </div>

      {/* Latest Bookings */}
      <div className="bg-white mt-10 rounded-lg shadow-sm">
        <div className="flex items-center gap-2.5 px-4 py-4 border-b">
          <img src={assets.list_icon} alt="List" />
          <p className="font-semibold text-gray-700 text-base">
            Latest Bookings
          </p>
        </div>
        <div className="divide-y">
          {dashboard?.latestAppointments?.length > 0 ? (
            dashboard.latestAppointments.map((item, index) => (
              <div
                className="flex items-center px-6 py-3 gap-4 hover:bg-gray-50 transition"
                key={index}
              >
                <img
                  src={item.docData.image}
                  className="rounded-full w-10 h-10 object-cover"
                  alt="Doctor"
                />
                <div className="flex-1 text-sm">
                  <p className="text-gray-800 font-medium">
                    {item.docData.name}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {slotDateFormat(item.slotDate)}
                  </p>
                </div>
                {item.cancelled ? (
                  <p className="text-red-400 text-xs font-medium">Cancelled</p>
                ) : item.isCompleted ? (
                  <p className="text-greem-500 text-xs font-medium">
                    Completed
                  </p>
                ) : (
                  <img
                    src={assets.cancel_icon}
                    onClick={() => cancelAppointment(item._id)}
                    className="w-10 cursor-pointer"
                    alt=""
                  />
                )}
              </div>
            ))
          ) : (
            <p className="px-6 py-4 text-gray-400 text-sm">
              No recent appointments found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
