import SideNavBar from "./SideNavBar";
import Footer from "./Footer";
import './Home.css'

export default function Home(props) {
console.log(props)
  return (
    <div id="app">
      <div className={`main-wrapper main-wrapper-1 `}>
        <SideNavBar />
        <div className="main-content">
          <section className="section">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="card card-statistic-2">
                  <div className="card-stats">
                    <div className="card-stats-title">
                      Order Statistics -
                      <div className="dropdown d-inline">
                        <a
                          className="font-weight-800 dropdown-toggle"
                          data-toggle="dropdown"
                          href="#"
                          id="orders-month"
                        >
                          August
                        </a>
                        <ul className="dropdown-menu dropdown-menu-sm">
                          <li className="dropdown-title">Select Month</li>
                          <li>
                            <a href="#" className="dropdown-item">
                              January
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dropdown-item">
                              February
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dropdown-item">
                              March
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dropdown-item">
                              April
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dropdown-item">
                              May
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dropdown-item">
                              June
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dropdown-item">
                              July
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dropdown-item active">
                              August
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dropdown-item">
                              September
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dropdown-item">
                              October
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dropdown-item">
                              November
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dropdown-item">
                              December
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-stats-items">
                      <div className="card-stats-item">
                        <div className="card-stats-item-count">24</div>
                        <div className="card-stats-item-label">Pending</div>
                      </div>
                      <div className="card-stats-item">
                        <div className="card-stats-item-count">12</div>
                        <div className="card-stats-item-label">Shipping</div>
                      </div>
                      <div className="card-stats-item">
                        <div className="card-stats-item-count">23</div>
                        <div className="card-stats-item-label">Completed</div>
                      </div>
                    </div>
                  </div>
                  <div className="card-icon shadow-primary bg-color">
                    <i className="fas fa-archive"  />
                  </div>
                  <div className="card-wrap">
                    <div className="card-header">
                      <h4>Total Orders</h4>
                    </div>
                    <div className="card-body">59</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="card card-statistic-2">
                  <div className="card-chart">
                    <canvas id="balance-chart" height={80} />
                  </div>
                  <div className="card-icon shadow-primary bg-color">
                    <i className="fas fa-dollar-sign" />
                  </div>
                  <div className="card-wrap">
                    <div className="card-header">
                      <h4>Balance</h4>
                    </div>
                    <div className="card-body">$187,13</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="card card-statistic-2">
                  <div className="card-chart">
                    <canvas id="sales-chart" height={80} />
                  </div>
                  <div className="card-icon shadow-primary bg-color">
                    <i className="fas fa-shopping-bag" />
                  </div>
                  <div className="card-wrap">
                    <div className="card-header">
                      <h4>Sales</h4>
                    </div>
                    <div className="card-body">4,732</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Budget vs Sales</h4>
                  </div>
                  <div className="card-body">
                    <canvas id="myChart" height={158} />
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
        <Footer />
      </div>
    </div>
  );
}
