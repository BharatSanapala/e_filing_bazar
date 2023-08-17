import Footer from "./Footer";
import SideNavBar from "./SideNavBar";
import DisplayImages from "./DisplayImages";

export default function ClientProfile() {
  const uploadedImages = [
    "https://example.com/uploaded-image1.jpg",
    "https://example.com/uploaded-image2.jpg",
  ];
  return (
    <>
      <SideNavBar />
      {/* PROFILE HEADER */}
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Profile</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <a href="#">Dashboard</a>
              </div>
              <div className="breadcrumb-item">Profile</div>
            </div>
          </div>
          {/* CLIENT-INFO */}
          <div className="row">
            <div className="col-12 col-md-6 col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4>Client info</h4>
                </div>
                <div className="card-body">
                  <ul className="list-group ">
                    <li className="list-group-item">
                      <b>Name :</b>
                    </li>
                    <li className="list-group-item">
                      <b>Services :</b>
                    </li>
                    <li className="list-group-item">
                      <b>E-Mail :</b>{" "}
                    </li>
                    <li className="list-group-item">
                      <b>Contact-Info :</b>
                    </li>
                    <li className="list-group-item">
                      <b>Created-At :</b>
                    </li>

                    <li className="list-group-item">
                      <b>
                        Upload Documents :
                        <div className="custom-file">
                          <input
                            type="file"
                            className="custom-file-input"
                            id="customFile"
                            accept="image/png, image/jpeg"
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="customFile"
                          >
                            Choose file
                          </label>
                        </div>
                      </b>
                    </li>
                    <li className="list-group-item">
                      <b>Documents-Uploaded :</b>
                    </li>
                    <li className="list-group-item  ">
                      <DisplayImages />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
