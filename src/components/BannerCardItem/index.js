import './index.css'

const BannerCardItem = props => {
  const {bannerCards} = props
  const {headerText, description, className} = bannerCards

  const conatainerClassName = `card ${className}`
  return (
    <li className={conatainerClassName}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="btn btn-style" type="submit" value="Submit">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem
