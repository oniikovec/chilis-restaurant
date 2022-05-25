import useFirestore from '../../hooks/useFirestore'
import { GalleryPreviewContainer, GalleryThumbnail, OpenGalleryButton } from './gallery-preview.styles'
import 'photoswipe/dist/photoswipe.css'
import { Gallery as PhotoswipeGallery } from 'react-photoswipe-gallery'
import { Item } from 'react-photoswipe-gallery'

const GalleryPreview = () => {

  const { docs } = useFirestore('images')
  const animateFrom = { opacity: 0 }
  const animateTo = { opacity: 1 }


  return (
    <GalleryPreviewContainer >
      <PhotoswipeGallery withCaption>
          {
            docs && docs
            .filter((_, index) => index < 3)
            .map(doc => (
              <Item
                original={doc.url}
                thumbnail={doc.thumb}
                caption={doc.caption}
                key={doc.url}
                alt={doc.name}
                width="1024"
                height="768"
              >
                {({ ref, open }) => (
                  <GalleryThumbnail ref={ref} onClick={open} src={doc.thumb} alt={`${doc.name}-thumbnail`} initial={animateFrom} animate={animateTo} transition={{delay: 0.2, duration: 2}} />
                )}
              </Item>
            ))
          }
          </PhotoswipeGallery>
      <OpenGalleryButton to="/galerie" initial={animateFrom} animate={animateTo} transition={{delay: 0.6, duration: 2}}>GALERIE&nbsp;&gt;</OpenGalleryButton>
    </GalleryPreviewContainer>
  )
}

export default GalleryPreview