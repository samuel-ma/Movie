
import { useState } from "react";
import "../styles/Add.css"
import Modal from "react-overlays/Modal";
import loty from "../assets/lottie.json"
import Lottie from "lottie-react";
import { RxCross2 } from "react-icons/rx";
import { IoImagesOutline } from "react-icons/io5";


export default function App() {

  // React state to control Modal visibility
  const [showModal, setShowModal] = useState(false);

  // Backdrop JSX code
  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  var handleClose = () => setShowModal(false);

  var handleSuccess = () => {
    console.log("success");
  };

  return (
    <div className="modal-example">
      <div className="button">
        <Lottie className="lottie" animationData={loty} type="button" onClick={() => setShowModal(true)}/>
      </div>

      <Modal className="modal" show={showModal} onHide={handleClose} renderBackdrop={renderBackdrop}>

        <div>
          <div className="modal-header">
            <h1 className="modal-title">Add Movies</h1>
            <div>
              <span className="close-button" onClick={handleClose}>
                <RxCross2/>
              </span>
            </div>
          </div>

          <div className="modal-desc">

            <div>
                <p className="addp">Image*</p>
                <button className="addimg">
                    <IoImagesOutline/>
                </button>
            </div>

            <div>
                <p classclassName="addp">Title*</p>
                <input className="addinput" placeholder="She Hulk..."/>
            </div>

            <div>
                <p classclassName="addp">Description*</p>
                <input className="addinput" placeholder="Write a short description..."/>
            </div>

            <div>
                <p classclassName="addp">Rating*</p>
                <input className="addinput" placeholder="Your personal rating..."/>
            </div>
          </div>

          <div className="modal-footer">
            <button className="secondary-button" onClick={handleClose}>
              Exit
            </button>
            <button className="primary-button" onClick={handleSuccess}>
              Add
            </button>
          </div>
        </div>

      </Modal>

    </div>
  );
}