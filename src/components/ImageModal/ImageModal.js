import Modal from 'react-modal';

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: 'translate(-50%, -50%)',
    }
}

Modal.setAppElement("#root")

export const ImageModal = ({ isOpen, image, onClose}) => {
    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onClose}
            style={customStyles}
            contentLable="Image modal">
                <div>
                    <img src={image} alt="hr hr" width='640'></img>
                    <button onClick={onClose}>Close</button>
                </div>
        </Modal>
    )
}