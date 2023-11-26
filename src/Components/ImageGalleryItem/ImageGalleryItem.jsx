import css from './ImageGalleryItem.module.css'



export const ImageGalleryItem = ({ imgId, imgUrl, tags, onClickImg }) => {
    return (<li className={css.ImageGalleryItem } id={imgId} onClick={onClickImg}>
                <img className={css.ImageGalleryItemImage } src={imgUrl} alt={tags} />
            </li>)
}