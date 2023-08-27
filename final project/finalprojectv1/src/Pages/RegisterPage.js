import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function RegisterPage() {
  const [isBussness, setIsBusiness] = useState(false);
  const navigated = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    imageUrl: "",
    imageAlt: "",
    state: "",
    couontry: "",
    city: "",
    street: "",
    houseNumber: "",
    zipCode: "",
    business: "",
  });

  function cancelButtonHandler() {
    // setUser({
    //   id: 0,
    //   firstName: "",
    //   lastName: "",
    //   phone: "",
    //   email: "",
    //   password: "",
    //   imageUrl: "",
    //   imageAlt: "",
    //   state: "",
    //   couontry: "",
    //   city: "",
    //   street: "",
    //   houseNumber: "",
    //   zipCode: "",
    //   business: "",
    // });
    console.log("crash");
  }

  return (
    <div className="container">
      <h1 className="text-center pb-3">Register</h1>
      <div className="form-group">
        {/*first name and lastname group */}
        <div className="row mb-3 form-group">
          <div className="col">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
<<<<<<< HEAD
                id="firstName"
=======
                id="floatInput"
>>>>>>> b2a44b164c41ba4f7bdf50ee829e3a70a262bf38
                placeholder="Firstname"
                value={user.first}
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
              />
<<<<<<< HEAD
              <label className="floatingInput" htmlFor="firstName">
                Firstname
              </label>
=======
              <label className="floatingInput">Firstname</label>
>>>>>>> b2a44b164c41ba4f7bdf50ee829e3a70a262bf38
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
<<<<<<< HEAD
                id="lastName"
=======
                id="floatInput"
>>>>>>> b2a44b164c41ba4f7bdf50ee829e3a70a262bf38
                placeholder="LastName"
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              ></input>
<<<<<<< HEAD
              <label htmlFor="lastName" className="form-label">
=======
              <label htmlFor="inputPassword" className="form-label">
>>>>>>> b2a44b164c41ba4f7bdf50ee829e3a70a262bf38
                LastName
              </label>
            </div>
          </div>
        </div>

        {/*end of first and lastname */}

        <div className="row mb-3 form-group">
          <div className="col">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
<<<<<<< HEAD
                id="email"
=======
                id="floatInput"
>>>>>>> b2a44b164c41ba4f7bdf50ee829e3a70a262bf38
                placeholder="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
<<<<<<< HEAD
              <label className="floatingInput" htmlFor="email">
                Email
              </label>
=======
              <label className="floatingInput">Firstname</label>
>>>>>>> b2a44b164c41ba4f7bdf50ee829e3a70a262bf38
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                type="number"
                className="form-control"
<<<<<<< HEAD
                id="phoneNumber"
=======
                id="floatInput"
>>>>>>> b2a44b164c41ba4f7bdf50ee829e3a70a262bf38
                placeholder="Phone Number"
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
              ></input>
              <label htmlFor="inputPassword" className="form-label">
                Phone Number
              </label>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        <div className="form-group">
=======
        <div className="mb-3 form-group">
>>>>>>> b2a44b164c41ba4f7bdf50ee829e3a70a262bf38
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatInput"
<<<<<<< HEAD
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            ></input>
            <label htmlFor="inputPassword" className="form-label">
              Password
            </label>
          </div>
        </div>
        {/* <div className="form-group mt-3">
          <h5>Are you a business?</h5>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="busnessFalse"
              onClick={() => setIsBusiness()}
              checked
            />
            <label className="form-check-label ml-1" htmlFor="busnessFalse">
              is not a busness
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="busnessTrue"
              onClick={() => setIsBusiness(true)}
            />
            <label className="form-check-label ml-1" htmlFor="busnessTrue">
              is a busness
            </label>
          </div>
        </div> */}
        <div className="form-group"></div>
        <div className="form-row pb-3 mt-5">
          <button className="btn btn-outline-danger col-6">Cancel</button>
          <button
            className="btn btn-outline-info col-6"
            onClick={cancelButtonHandler()}
          >
=======
              placeholder="LastName"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            ></input>
            <label htmlFor="inputPassword" className="form-label">
              Email
            </label>
          </div>
        </div>
        <div className="form-group">
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatInput"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            ></input>
            <label htmlFor="inputPassword" className="form-label">
              Password
            </label>
          </div>
        </div>
        <div className="form-row pb-3 mt-5">
          <button className="btn btn-outline-danger col-6">Cancel</button>
          <button className="btn btn-outline-info col-6">
>>>>>>> b2a44b164c41ba4f7bdf50ee829e3a70a262bf38
            <i class="bi bi-eraser-fill"></i>
          </button>
        </div>
        <div className="form-group">
<<<<<<< HEAD
          <button className="btn btn-info col-12">Submit</button>
=======
          <button className="btn btn-info">Submit</button>
>>>>>>> b2a44b164c41ba4f7bdf50ee829e3a70a262bf38
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
