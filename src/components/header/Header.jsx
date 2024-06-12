import headerStyles from "./Header.module.css"

const Header = () =>{
    return(
        <header  className={headerStyles.bgheader} >
            <h1 class="text-center">Il mio Blog</h1>
        </header>
    )
}

export default Header;