// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbNailDetails, imgUrl, altName, clickThumbNailItem} = props
  const {id} = thumbNailDetails

  const onClickThumbnailItem = () => {
    clickThumbNailItem(id)
  }

  return (
    <li className="item-container">
      <button onClick={onClickThumbnailItem} type="button">
        <img src={imgUrl} alt={altName} />
      </button>
    </li>
  )
}

export default ThumbnailItem
