import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home/Home/Home';
import SignInForm from './components/Login/SignInForm';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import DoctorBooking from './components/Booking/SectionBooking/DoctorBooking';
import BookingSuccess from './components/Booking/BookingSuccess';
import BookingInvoice from './components/Booking/BookingInvoice/BookingInvoice';
import DoctorProfile from './components/Staff/StaffProfile/DoctorProfile';
import Appointments from './components/Staff/Appointments/Appointments';
import MyPatients from './components/Staff/MyPatients/MyPatients';
import Reviews from './components/Staff/Reviews/Reviews';
import Schedule from './components/Staff/Schedule/Schedule';
import ProfileSetting from './components/Staff/ProfileSetting/ProfileSetting';
import ChangePassword from './components/Staff/ChangePassword/ChangePassword';
import PatientFavouriteDoctor from './components/Staff/CustomerFavourite/PatientFavourite';
import DoctorInvoice from './components/Staff/Invoice/DoctorInvoice';
import SearchDoctor from './components/Staff/SearchStaff/SearchDoctor';
import Blogs from './components/Staff/Blogs/Blogs';
import BlogsEdit from './components/Staff/Blogs/BlogsEdit';
import AddBlog from './components/Staff/Blogs/AddBlog';
import Blog from './components/Blog/Blog';
import BlogDetails from './components/Blog/BlogDetails';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Service from './components/Service/Service';
import Dashboard from './components/Staff/Dashboard/Dashboard';
import AppointmentPage from './components/Appointment/AppointmentPage';
import TrackAppointment from './components/TrackAppointment/TrackAppointment';
import Treatment from './components/Staff/Treatment/Treatment';
import Prescription from './components/Staff/Prescription/Prescription';
import PrescriptionView from './components/Staff/Prescription/PrescriptionView';
import TreatmentEdit from './components/Staff/Treatment/TreatmentEdit';
import Chat from './components/chat/chat';
import ViewAppointment from './components/Staff/Appointments/ViewAppointment';
import DoctorProfileSetting from './components/Staff/ProfileSetting/DoctorProfileSetting';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:id', element: <BlogDetails /> },
  { path: '/contact', element: <Contact /> },
  { path: '/about', element: <About /> },
  { path: '/service', element: <Service /> },
  { path: '/login', element: <SignInForm /> },
  { path: '/appointment', element: <AppointmentPage /> },
  {path: '/track-appointment', element: <TrackAppointment/>},


  { path: '/doctors', element: <SearchDoctor /> },
  { path: '/doctors/profile/:id', element: <DoctorProfile /> },
  { path: '/doctor/update/as', element: <DoctorProfileSetting /> },


  { path: '/dashboard', element: <Dashboard /> },
  { path: '/dashboard/my-patients', element: <MyPatients /> },
  { path: '/dashboard/reviews', element: <Reviews /> },
  { path: '/dashboard/schedule', element: <Schedule /> },
  { path: '/dashboard/appointments', element: <Appointments /> },
  { path: '/dashboard/appointments/:id', element: <ViewAppointment /> },

  { path: '/dashboard/change-password', element: <ChangePassword /> },
  { path: '/dashboard/profile-setting', element: <ProfileSetting /> },
  { path: '/dashboard/favourite', element: <PatientFavouriteDoctor /> },
  { path: '/dashboard/blogs', element: <Blogs /> },
  { path: '/dashboard/blogs/:id', element: <BlogsEdit /> },
  { path: '/dashboard/blogs/create', element: <AddBlog /> },

  { path: '/booking/:doctorId', element: <DoctorBooking /> },
  { path: '/booking/success/:id', element: <BookingSuccess /> },
  { path: '/booking/invoice/:id', element: <BookingInvoice /> },


])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
