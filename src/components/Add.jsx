
import { useState } from "react";
import "../styles/Add.css"
import Modal from "react-overlays/Modal";
import loty from "../assets/lottie.json"
import Lottie from "lottie-react";
import { RxCross2 } from "react-icons/rx";
import { IoImagesOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux'

export default function App(props2) {

  // React state to control Modal visibility
  const [showModal, setShowModal] = useState(false);
  const [imageSource, setImageSource] = useState(null);
  const [title, setTitle] = useState(null);
  const [overview, setOverview] = useState(null);
  const [vote_average, setVote_average] = useState(null);
  // Backdrop JSX code
  const renderBackdrop = (props) => <div className="backdrop" {...props} />;
  const handleImageChange = (event) => {
        const file = event.target.files[0];
        console.log(URL.createObjectURL(file))
        setImageSource(URL.createObjectURL(file));
  };
  var handleClose = () => {setShowModal(false);
  setImageSource(null)}

    var handleSuccess = (props) => {
        const movie = {
            title: title,
            overview: overview,
            vote_average: vote_average,
            path: imageSource
        }
        console.log(movie)
        props2.setnewcards(movie)

        handleClose()
    }

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
                <img src={imageSource} className="image-source" />
                <button className="addimg">
                    <input type="file" onChange={handleImageChange} />
                </button>
            </div>

            <div>
                <p classclassName="addp">Title* </p>
                <input className="addinput" placeholder="She Hulk..."onChange={()=>setTitle(event.target.value)}/>
            </div>

            <div>
                <p classclassName="addp">Description*</p>
                <input className="addinput" placeholder="Write a short description..." onChange={()=>setOverview(event.target.value)}/>
            </div>

            <div>
                <p classclassName="addp">Rating*</p>
                <input className="addinput" placeholder="Your personal rating..." onChange={()=>setVote_average(event.target.value)}/>
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
