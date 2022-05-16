import useFirestore from '../../hooks/useFirestore';
import { GalleryContainer, GalleryImagesContainer, GalleryThumbnail } from './gallery.styles'

const Gallery = () => {

  const { docs } = useFirestore('images')

  return (
    <GalleryContainer>
      <h1>WELCOME TO GALLERY VAGENE</h1>
      <GalleryImagesContainer>
        {
          docs && docs.map(doc => (
            <GalleryThumbnail src={doc.thumb} alt={doc.name} />
          ))
        }
        {
          docs && docs.map(doc => (
            <GalleryThumbnail src={doc.thumb} alt={doc.name} />
          ))
        }
        {
          docs && docs.map(doc => (
            <GalleryThumbnail src={doc.thumb} alt={doc.name} />
          ))
        }
      </GalleryImagesContainer>
    </GalleryContainer>
  )
}

export default Gallery