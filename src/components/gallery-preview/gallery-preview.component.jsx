import useFirestore from '../../hooks/useFirestore'
import { GalleryPreviewContainer, GalleryThumbnail, OpenGalleryButton } from './gallery-preview.styles'

const GalleryPreview = () => {

  const { docs } = useFirestore('images')
  const animateFrom = { opacity: 0 }
  const animateTo = { opacity: 1 }


  return (
    <GalleryPreviewContainer >
      { docs && docs
        .filter((_, index) => index < 5)
        .map(doc => (
        <GalleryThumbnail src={doc.thumb} key={doc.id} alt={doc.name} initial={animateFrom} animate={animateTo} transition={{delay: 0.6, duration: 2}}/>
        ))
      }
      <OpenGalleryButton to="/galerie">GALERIE&nbsp;&gt;</OpenGalleryButton>
    </GalleryPreviewContainer>
  )
}

export default GalleryPreview