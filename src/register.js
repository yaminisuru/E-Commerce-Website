import { useContext, useState } from "react";
import { cardContext } from "./App";


function Register() {
  const [collgeIdValue, setCollegeId] = useState("");
  const [passwordValue, setPassword] = useState("");
  const [emailIdValue, setEmailId] = useState("");
  const [branchValue, setBranch] = useState("");
  const [yearValue, setYear] = useState("");
  const [genderValue, setGender] = useState("");
  const [userprofiles, setUserProfiles] = useState([]);

  const { userDetails, setUserDetails } = useContext(cardContext);

  

  const getCollegeId = (event) => {
    setCollegeId(event.target.value);
  };

  const getPassword = (event) => {
    setPassword(event.target.value);
  };

  const getEmailId = (event) => {
    setEmailId(event.target.value);
  };

  const getBranch = (event) => {
    const selectedBranch = event.target.value;
    setBranch(selectedBranch);
  };

  const getYear = (event) => {
    const selectedYear = event.target.value;
    setYear(selectedYear);
  };

  const getGender = (event) => {
    const selectedGender = event.target.value;
    setGender(selectedGender);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const newuserprofile = {
      id:collgeIdValue,
      pwd:passwordValue,
      email:emailIdValue,
      branch:branchValue,
      year:yearValue,
      gender:genderValue,
    };
    setUserProfiles([...userprofiles, newuserprofile]);
    console.log(newuserprofile);
    setUserDetails(newuserprofile);
  };

  return (
    <div className="d-flex flex-row justify-content-center">
      <form onSubmit={handleRegister}>
        <div className="card" style={{ border: "1px solid #ddd", padding: "20px", width: "500px" }}>
          <h3>Register</h3>
          <p style={{ paddingBottom: "20px" }}>Provide your details to login</p>
          <h5>College id</h5>
          <input
            onChange={getCollegeId}
            type="text"
            placeholder="College id"
            style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "5px", marginBottom: "15px" }}
          />
          <h5>Password</h5>
          <input
            onChange={getPassword}
            type="password"
            placeholder="Password"
            style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "5px", marginBottom: "15px" }}
          />
          <h5>Email address</h5>
          <input
            onChange={getEmailId}
            type="email"
            placeholder="Email address"
            style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "5px", marginBottom: "15px" }}
          />
          <h5>Branch</h5>
          <select
            name="select a branch"
            onChange={getBranch}
            style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "5px", marginBottom: "15px" }}
          >
            <option value="select a branch">select a branch</option>
            <option value="CSE">CSE</option>
            <option value="CS">CS</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
          </select>
          <h5>Year</h5>
          <select
            name="select a year"
            onChange={getYear}
            style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "5px", marginBottom: "15px" }}
          >
            <option value="select a year">select a year</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <h5>Gender</h5>
          <div>
            <input
              onChange={getGender}
              type="radio"
              name="gen"
              value="m"
              style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "5px", marginRight: "5px" }}
            />
            Male
            <input
              onChange={getGender}
              type="radio"
              name="gen"
              value="f"
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                marginLeft: "10px",
                marginRight: "5px",
              }}
            />
            Female
            <input
              onChange={getGender}
              type="radio"
              name="gen"
              value="o"
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                marginLeft: "10px",
                marginRight: "5px",
              }}
            />
            other
          </div>
          <div style={{ textAlign: "right" }}>
            <button className="btn btn-dark" type="submit">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
