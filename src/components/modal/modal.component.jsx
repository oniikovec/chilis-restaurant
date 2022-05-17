import { BackdropContainer, BackdropImage } from "./modal.styles"

const Modal = ({ selectedImg, setSelectedImg }) => {

  const handleClick = (event) => {
    if (event.target === BackdropContainer) {
      setSelectedImg(null)
    }
  }

  return (
    <BackdropContainer onClick={handleClick}>
      <BackdropImage src={selectedImg} alt="enlarged picture" />
    </BackdropContainer>
  )
}

export default Modal