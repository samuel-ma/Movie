
import { useEffect, useRef, useState } from "react";
import "../styles/Add.css"
import Modal from "react-overlays/Modal";
import Lottie from "lottie-web";
import loty from "../assets/lottie.json"

export default function App() {

    const container = useRef(null);

    useEffect(() => {
        Lottie.loadAnimation({
            container,
            render: "svg",
            loop: true,
            autoplay: true,
            animationData: require(loty),
        })
    }, [])

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
      <div>
        <button className="container" ref={container} type="button" onClick={() => setShowModal(true)}>
            Open Modal
        </button>
      </div>
      <p>Click to get the open the Modal</p>

      <Modal
        className="modal"
        show={showModal}
        onHide={handleClose}
        renderBackdrop={renderBackdrop}
      >
        <div>
          <div className="modal-header">
            <div className="modal-title">Modal Heading</div>
            <div>
              <span className="close-button" onClick={handleClose}>
                x
              </span>
            </div>
          </div>
          <div className="modal-desc">
            <p>Modal body contains text.</p>
          </div>
          <div className="modal-footer">
            <button className="secondary-button" onClick={handleClose}>
              Close
            </button>
            <button className="primary-button" onClick={handleSuccess}>
              Save Changes
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}