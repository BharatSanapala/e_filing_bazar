import "./EmployeeProfile.css";
import Footer from "./Footer";

export default function EmployeeProfile() {
  const employeeBasicInfo = [
    "Empoyee Id :",
    "Work Mobile :",
    "Email :",
    "Location :",
    "Job Title :",
    "Reports To :",
    "Skills" 
   
  ];
  const employeeEmergencyInfo = [
    "Name : ",
    "Address :",
    "Contact Number :",
    "Relationship Status :",
  ];
  return (
    <>
<div className="container"></div>
    <div className="row  background">
        <div className="row row--margin col-sm-10">
            <div className="col-12 col-sm-12 col-lg-12 "></div>
            <div className="col-10 col-sm-12 col-lg-12 ">
             <div className="card profile-widget ">
                <div className="profile-widget-header">
              <img
                alt="image"
                src="assets/img/avatar/avatar-1.png"
                className=" profile-widget-picture   profile-pic"
              />
            </div>

            <div className="profile-widget-description pb-0">
              <div className="profile-widget-name">
                Employee Name{" "}
                <div className="text-muted d-inline font-weight-normal">
                  <div className="slash" /> Charted Accountant
                </div>
              </div>
              <p>
                Mr.Path Breaker has been with the company since it's{" "}
                <b>Inception</b>.
              </p>
            </div>
          </div>
    
          <div className="card mt-4 ">
            <h2 className="section-title hr">
              Basic Info
              <hr className="" />
            </h2>
            {employeeBasicInfo.map((mapping) => {
              if (mapping.valueOf === "Skills") {
                return (
                  <div
                    className="section--body"
                    key={Math.floor(Math.random() * 100)}
                  >
                    <div class="form-outline">
                      <textarea class="form-control" rows="4"></textarea>
                      <label class="form-label" for="textArea">
                        <p className="">{mapping} </p>
                      </label>
                    </div>
                  </div>
                );
              }
              return (
                <div
                  className="section--body"
                  key={Math.floor(Math.random() * 100)}
                >
                  <p>{mapping}</p>
                </div>
              );
            })}
           
          </div>

          <div className="card mt-4   ">
            <h2 className="section-title hr">Emergency Contact Info</h2>
            <hr className=""></hr>
            {employeeEmergencyInfo.map((mapping) => {
              return (
                <div
                  className="section--body"
                  key={Math.floor(Math.random() * 100)}
                >
                  <p>{mapping}</p>
                </div>
              );
            })}
          </div>
        </div>
        </div>
        <Footer />
      </div>
     
    </>
  );
}
