import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import DoctorBooking from './components/Booking/DoctorBooking/DoctorBooking';
import BookingSuccess from './components/Booking/BookingSuccess';
import BookingInvoice from './components/Booking/BookingInvoice/BookingInvoice';
import DoctorProfile from './components/Staff/DoctorProfile/DoctorProfile';
import Appointments from './components/Staff/Appointments/Appointments';
import MyPatients from './components/Staff/MyCustomer/MyPatients';
import Reviews from './components/Staff/Reviews/Reviews';
import Schedule from './components/Staff/Schedule/Schedule';
import ProfileSetting from './components/Staff/ProfileSetting/ProfileSetting';
import ChangePassword from './components/Staff/ChangePassword/ChangePassword';
import AdminDashboard from './components/Admin/Dashboard/Dashboard';
import AdminAppointments from './components/Admin/Appointments/Appointments';
import Doctors from './components/Admin/Doctors/Doctors';
import Patients from './components/Admin/Patients/Patients';
import Profile from './components/Admin/Profile/Profile';
import Transactions from './components/Admin/Transactions/Transactions';
import Specialites from './components/Admin/Specialites/Specialites';
import AdminReviews from './components/Admin/Reviews/Reviews'
import PatientFavouriteDoctor from './components/Staff/customerFavourite/PatientFavourite';
import DoctorInvoice from './components/Staff/Invoice/DoctorInvoice';
import SearchDoctor from './components/Staff/SearchStaff/SearchDoctor';
import Blogs from './components/Staff/Blogs/Blogs';
import BlogsEdit from './components/Staff/Blogs/BlogsEdit';
import AddBlog from './components/Staff/Blogs/AddBlog';
import Dashboard from './components/Staff/Dashboard/Dashboard';
import AppointmentPage from './components/Appointment/AppointmentPage';
import TrackAppointment from './components/TrackAppointment/TrackAppointment';

import Prescription from './components/Staff/Prescription/Prescription';
import PrescriptionView from './components/Staff/Prescription/PrescriptionView';

import ViewAppointment from './components/Staff/Appointments/ViewAppointment';
import SignInFormAdmin from './components/Admin/Login/SignInForm';
import UnverifiedDoctors from './components/Admin/Doctors/unverifiedDoc';
import DoctorProfileSetting from './components/Staff/ProfileSetting/DoctorProfileSetting';

const router = createBrowserRouter([

  { path: '/appointment', element: <AppointmentPage /> },
  {path: '/track-appointment', element: <TrackAppointment/>},

  { path: '/doctors', element: <SearchDoctor /> },
  { path: '/doctors/profile/:id', element: <DoctorProfile /> },



  { path: '/dashboard', element: <Dashboard /> },
  { path: '/dashboard/my-patients', element: <MyPatients /> },
  { path: '/dashboard/reviews', element: <Reviews /> },
  { path: '/dashboard/schedule', element: <Schedule /> },
  { path: '/dashboard/appointments', element: <Appointments /> },
  { path: '/dashboard/appointments/:id', element: <ViewAppointment /> },
  { path: '/dashboard/prescription', element: <Prescription /> },
  { path: '/dashboard/prescription/:id', element: <PrescriptionView /> },
 


  { path: '/dashboard/change-password', element: <ChangePassword /> },
  { path: '/dashboard/profile-setting', element: <ProfileSetting /> },
  { path: '/dashboard/favourite', element: <PatientFavouriteDoctor /> },
  { path: '/dashboard/invoices', element: <DoctorInvoice /> },
  { path: '/dashboard/blogs', element: <Blogs /> },
  { path: '/dashboard/blogs/:id', element: <BlogsEdit /> },
  { path: '/dashboard/blogs/create', element: <AddBlog /> },

  { path: '/booking/:doctorId', element: <DoctorBooking /> },
  { path: '/booking/success/:id', element: <BookingSuccess /> },
  { path: '/booking/invoice/:id', element: <BookingInvoice /> },

  // Dashboard
  { path: '/', element: <SignInFormAdmin /> }, 
  { path: '/admin/dashboard',    element: <PrivateRoute>   <AdminDashboard />    </PrivateRoute>   },
  { path: '/admin/appointments', element: <PrivateRoute>   <AdminAppointments /> </PrivateRoute>   },
  { path: '/admin/doctors',      element: <PrivateRoute>   <Doctors />           </PrivateRoute>   },
  { path: '/admin/undoctors',    element: <PrivateRoute>   <UnverifiedDoctors/>  </PrivateRoute>   },
  { path: '/admin/patients',     element: <PrivateRoute>   <Patients />          </PrivateRoute>   },
  { path: '/admin/profile',      element: <PrivateRoute>   <Profile />           </PrivateRoute>   },
  { path: '/admin/reviews',      element: <PrivateRoute>   <AdminReviews />      </PrivateRoute>   },
  { path: '/admin/transaction',  element: <PrivateRoute>   <Transactions />      </PrivateRoute>   },
  { path: '/admin/specialites',  element: <PrivateRoute>   <Specialites />       </PrivateRoute>   },

  // { path: '/appointment', element: <PrivateRoute><AppointMent /></PrivateRoute> },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
