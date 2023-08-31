import Footer from "./Footer";
import SideNavBar from "./SideNavBar";
import { Link } from "react-router-dom";
import "./Customers.css";

export default function () {
  return (
    <>
      <SideNavBar />

      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Table</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <Link to={"/Home"}>Dashboard </Link>
              </div>

              <div className="breadcrumb-item">Table</div>
            </div>
          </div>
          <div className="section-body">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12  ">
                <div className="card">
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table table-striped table-lr">
                        <tbody>
                          <tr
                            style={{ backgroundColor: "#79848f" }}
                            className="table--header"
                          >
                            <th>Sl.No</th>
                            <th>Name</th>
                            <th>Created At</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>Client 1</td>
                            <td>2023-07-09</td>
                            <td>
                              <div className="badge badge-success badge-color">
                                Active
                              </div>
                            </td>
                            <td>
                              <Link to={"/Clientprofile"}>
                                <button className="button" type="button">
                                  Details
                                </button>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Client 2</td>
                            <td>2023-07-10</td>
                            <td>
                              <div className="badge  badge-success badge-color">
                                Active
                              </div>
                            </td>
                            <td>
                              <Link to={"/Clientprofile"}>
                                <button className="button" type="button">
                                  Details
                                </button>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Client 3</td>
                            <td>2023-07-12</td>
                            <td>
                              <div className="badge badge-danger badge-color">
                                Not Active
                              </div>
                            </td>
                            <td>
                              <Link to={"/Clientprofile"}>
                                <button className="button" type="button">
                                  Details
                                </button>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Client 4</td>
                            <td>2023-07-13</td>
                            <td>
                              <div className="badge badge-success badge-color">
                                Active
                              </div>
                            </td>
                            <td>
                              <Link to={"/Clientprofile"}>
                                <button className="button" type="button">
                                  Details
                                </button>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Client 5</td>
                            <td>2023-07-15</td>
                            <td>
                              <div className="badge badge-success badge-color">
                                Active
                              </div>
                            </td>
                            <td>
                              <Link to={"/Clientprofile"}>
                                <button className="button" type="button">
                                  Details
                                </button>
                              </Link>
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
                        <li className="page-item ">
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
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
