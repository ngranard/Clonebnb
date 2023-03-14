import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import LoginForm from './users/LoginForm';
import Logout from './users/Logout';
import SignupForm from './users/SignupForm';
import RentalList from './rentals/RentalList';
import RentalDetail from './rentals/RentalDetail';
import RentalCreateForm from './rentals/RentalCreateForm';
import BookingCreateForm from './bookings/BookingCreateForm';
import BookingDetail from './bookings/BookingDetail';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div style={{ height: 56 }}></div>
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/users">
            {/* <Route path="" element={<UserList />} /> */}
            <Route path="login" element={<LoginForm />} />
            <Route path="logout" element={<Logout />} />
            <Route path="signup" element={<SignupForm />} />
            {/* <Route path=":userId" element={<UserDetail />} /> */}
            {/* <Route path=":userId/edit" element={<userEditForm />} /> */}
          </Route>
          <Route path="/rentals">
            <Route path="" element={<RentalList />} />
            <Route path="new" element={<RentalCreateForm />} />
            <Route path=":rentalId" element={<RentalDetail />} />
            {/* <Route path=":userId/rentals" element={<RentalListByHost />} /> */}
          </Route>
          <Route path="/bookings">
            {/* <Route path=":userId/bookings" element={<BookingListByHost />} /> */}
            <Route path="new" element={<BookingCreateForm />} />
            <Route path=":bookingId" element={<BookingDetail />} />
            {/* <Route path=":bookingId/edit" element={<BookingEditForm />} /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
