import "../SASS/Header.scss"

const Header = () => {
  return (
    <div className="header">
        <div className="container header__container">
            <h2 className="header__title">Products</h2>
            <div className="header__link_box">
                <a href="#" >Home</a>
                <span>/</span>
                <a href="#">Products</a>
            </div>
        </div>
    </div>
  )
}

export default Header