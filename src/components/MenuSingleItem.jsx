function MenuSingleItem({ id, title, category, price, img, desc }) {
  console.log(desc)
  return (
    <div className="menu-item ">
      <img src={img} className="img" />

      <div className="item-info">
        <header>
          {title}
          <span className="item-price"> {price} </span>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </div>
  )
}
export default MenuSingleItem
