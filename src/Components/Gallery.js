import Footer from "./Footer";
import SideNavBar from "./SideNavBar";
import "./DisplayImages.css";
import { Link } from "react-router-dom";

export default function Gallery() {
  return (
    <>
      <SideNavBar />
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Gallery</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <Link to={"/Home"}>Dashboard</Link>
              </div>

              <div className="breadcrumb-item">Gallery</div>
            </div>
          </div>
          <div className="section-body ">
            <p className="section-lead" />
            <div className="row">
              <div className="col-12 col-sm-6 col-lg-12">
                <div className="card border border-secondary-subtle ">
                  <div className="card-header">
                    <h4>Images</h4>
                  </div>
                  <div className="card-body ">
                    <div className="gallery gallery-md">
                      <div className="d-flex justify-content-center align-items-center"></div>
                    </div>
                  </div>
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
