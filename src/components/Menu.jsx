import MenuSingleItem from './MenuSingleItem'

function Menu({ menuItems }) {
  return (
    <div className="section-center">
      {menuItems.map((singleItem) => {
        return (
          <div>
            <MenuSingleItem {...singleItem} />
          </div>
        )
      })}
    </div>
  )
}
export default Menu
