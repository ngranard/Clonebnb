import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import RentalList from './RentalList';
import RentalDetail from './RentalDetail';
import RentalCreateForm from './RentalCreateForm';
import BookingCreateForm from './BookingCreateForm';
import BookingDetail from './BookingDetail';

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
      <footer className="fixed-bottom">
        <div className="d-flex justify-content-center align-items-center p-2 bg-danger bg-opacity-25 text-muted">
          Created with
          <i
            className="fa fa-heart-o ms-2 me-2"
            style={{ fontSize: '1rem', color: 'red' }}
          ></i>
          by Danny, Jamie, Josh, Noah, and Vincent. All rights reserved.
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
