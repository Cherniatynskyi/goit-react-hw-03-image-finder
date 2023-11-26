import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'
import css from './ImageGallery.module.css'



export const ImageGallery = ({ images, onImgClick}) => {
    return (<ul className={css.ImageGallery}>
        {images && images.map((img) => 
            <ImageGalleryItem key={img.id} imgId={img.id} imgUrl={img.webformatURL} tags={img.tags} onClickImg={onImgClick} />
        )}
    </ul>)
}