import s from "./Header.module.css"

function Header() {
    return (
        <header className={s.header}>
            <nav className={s.headerNav}>
                <div className={s.headerNavSearch}>
                    <input placeholder="Поиск товара" />
                    <div className={s.navSearchButton}>Найти</div>
                </div>
                <div>
                    <ul>
                        <li className={s.headerNavIcon}>Корзина</li>
                        <li className={s.headerNavIcon}>Избранный</li>
                        <li className={s.headerNavIcon}>Профиль</li>
                    </ul>
                    
                    
                    
                </div>
            </nav>
            <div>
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