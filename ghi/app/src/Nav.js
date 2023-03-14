import { Link, NavLink, useParams } from 'react-router-dom';

function Nav() {
  const { rentalId, bookingId } = useParams();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success mb-4">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Airbnb Clone
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li>
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Users
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to="/users/signup"
                  >
                    Signup
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/users/login"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Rentals
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to={`/rentals/${rentalId}`}>
                    Rental Detail
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/rentals">
                    Rental List
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={`/rentals/${rentalId}/map`}>
                    Rental Detail Map
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/rentals/new">
                    Rental Create Form 
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Bookings 
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to={`/bookings/${bookingId}`}
                  >
                    Booking Detail 
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/bookings/new">
                    Booking Create Form
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
