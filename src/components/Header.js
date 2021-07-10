import mesto_logo from '../images/mesto_logo.svg';

function Header() {
    return ( < header className = "header" >
        <img src = { mesto_logo }
        className = "header__logo"
        alt = "Лого Место" / >
        </header>

    );
}

export default Header;