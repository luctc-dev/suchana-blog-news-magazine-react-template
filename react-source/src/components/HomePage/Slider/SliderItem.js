
export default function SliderItem({
  data
}) {
  const {
    url,
    title,
    author,
    categories
  } = data
  return (
    <div className="swiper-slide">
      <div className="slide-inner" style={{ backgroundImage: `url(${url})` }} />
      <div className="banner_caption_text">
        <div className="post-category">
          <ul>
            {
              categories.map((cate, index) => {
                return <li className={index % 2 === 0 ? 'cat-blue' : 'cat-yellow'} key={cate.id}>
                  <a href="/" className="white">{cate.label}</a>
                </li>
              })
            }
          </ul>
        </div>
        <h1><a href="/">{title}</a></h1>
        <div className="item-meta">
          <span>by</span>
          <a href="author.html">{author.name}</a>
        </div>
      </div>
    </div>
  )
}