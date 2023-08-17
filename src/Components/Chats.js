import { Link } from "react-router-dom";
import Footer from "./Footer";
import SideNavBar from "./SideNavBar";

export default function Chats(){
    return(
      <>
      <SideNavBar />
       <div className="main-content">
  <section className="section">
    <div className="section-header">
      <h1>Chat Box</h1>
      <div className="section-header-breadcrumb">
        <div className="breadcrumb-item active"><Link to={"/Home"}>Dashboard</Link></div>
        <div className="breadcrumb-item">Chat Box</div>
      </div>
    </div>
    <div className="section-body">
      <h2 className="section-title">Chat Boxes</h2>
      <p className="section-lead">Chats</p>
      <div className="row align-items-center justify-content-center">
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="card">
            <div className="card-header">
              <h4>Who's Online?</h4>
            </div>
            <div className="card-body">
              <ul className="list-unstyled list-unstyled-border">
                <li className="media">
                  <img alt="image" className="mr-3 rounded-circle" width={50} src="assets/img/avatar/avatar-1.png" />
                  <div className="media-body">
                    <div className="mt-0 mb-1 font-weight-bold">Client </div>
                    <div className="text-success text-small font-600-bold"><i className="fas fa-circle" /> Online</div>
                  </div>
                </li>
                <li className="media">
                  <img alt="image" className="mr-3 rounded-circle" width={50} src="assets/img/avatar/avatar-2.png" />
                  <div className="media-body">
                    <div className="mt-0 mb-1 font-weight-bold">Client 1</div>
                    <div className="text-small font-weight-600 text-muted"><i className="fas fa-circle" /> Offline</div>
                  </div>
                </li>
                <li className="media">
                  <img alt="image" className="mr-3 rounded-circle" width={50} src="assets/img/avatar/avatar-3.png" />
                  <div className="media-body">
                    <div className="mt-0 mb-1 font-weight-bold">Client 2</div>
                    <div className="text-small font-weight-600 text-success"><i className="fas fa-circle" /> Online</div>
                  </div>
                </li>
                <li className="media">
                  <img alt="image" className="mr-3 rounded-circle" width={50} src="assets/img/avatar/avatar-4.png" />
                  <div className="media-body">
                    <div className="mt-0 mb-1 font-weight-bold">Client 3</div>
                    <div className="text-small font-weight-600 text-success"><i className="fas fa-circle" /> Online</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="card chat-box" id="mychatbox">
            <div className="card-header">
              <h4>Chat with Client</h4>
            </div>
            <div className="card-body chat-content">
            </div>
            <div className="card-footer chat-form">
              <form id="chat-form">
                <input type="text" className="form-control" placeholder="Type a message" />
                <button className="btn btn-primary">
                  <i className="far fa-paper-plane" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="card chat-box card-success" id="mychatbox2">
            <div className="card-header">
              <h4><i className="fas fa-circle text-success mr-2" title="Online" data-toggle="tooltip" /> Chat with Client 3 </h4>
            </div>
            <div className="card-body chat-content">
            </div>
            <div className="card-footer chat-form">
              <form id="chat-form2">
                <input type="text" className="form-control" placeholder="Type a message" />
                <button className="btn btn-primary">
                  <i className="far fa-paper-plane" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
<Footer />
</>
    )
}