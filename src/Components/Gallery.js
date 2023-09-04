import Footer from "./Footer";
import SideNavBar from "./SideNavBar";
import "./DisplayImages.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Gallery() {
  const [fileName, setFileName] = useState();
  const handleFile = (file) => {
    setFileName(file.name);
  };

  return (
    <>
  
      <div className="col-12 col-md-12 col-lg-12">
        <div className="section">
          <div className="section-header">
            <h1>Gallery</h1>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-striped table-md">
                <tbody>
                  <tr>
                    <th>Sl.No</th>
                    <th>Name</th>

                    <th>Action</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Irwansyah Saputra</td>

                    <td>
                      <a href="#" className="btn btn-secondary">
                        Detail
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Hasan Basri</td>

                    <td>
                      <a href="#" className="btn btn-secondary">
                        Detail
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Kusnadi</td>

                    <td>
                      <a href="#" className="btn btn-secondary">
                        Detail
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Rizal Fakhri</td>
                    <td>
                      <a href="#" className="btn btn-secondary">
                        Detail
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Isnap Kiswandi</td>

                    <td>
                      <a href="#" className="btn btn-secondary">
                        Detail
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card-footer text-center">
            <nav className="d-inline-block">
              <ul className="pagination mb-0">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex={-1}>
                    <i className="fas fa-chevron-left" />
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1 <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="fas fa-chevron-right" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
