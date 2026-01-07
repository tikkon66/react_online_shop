import s from "./Header.module.css"

function Header() {
    return (
        <header className={s.header}>
            <nav className={s.headerNav}>
                <div className={s.headerNavSearch}>
                    <input className={s.navSearchField} placeholder="Поиск товара" />
                    <div className={s.navSearchButton}>Найти</div>
                </div>
                <div>
                    <ul className={s.headerNavIcons}>
                        <li className={s.headerNavIcon}><img src="src\assets\Header_image\cart.png"/></li>
                        <li className={s.headerNavIcon}><img src="src\assets\Header_image\heart.png"/></li>
                        <li className={s.headerNavIcon}><img src="src\assets\Header_image\avatar.png"/></li>
                    </ul>
                </div>
            </nav>
            <div className={s.headerSelects}>
                <select>
                    <option value="value1">Значение 1</option>
                    <option value="value2" selected>Значение 2</option>
                </select>
                <select>
                    <option value="value1">Значение 1</option>
                    <option value="value2" selected>Значение 2</option>
                </select>
            </div>
        </header>
    )
}

export default Header