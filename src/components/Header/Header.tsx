import { FC } from "react";

const Header: FC = () => {
    return (
        <header>
            <div className="link">
                <a href="https://vk.com/@sovietgirls_nft-about" target="_blank">О коллекции</a>
            </div>
            <div className="link">
                <a href="https://market.sovietgirls.su" target="_blank">Маркетплейс</a>
            </div>
            <div className="link">
                <a href="https://auth.sovietgirls.su" target="_blank">Закрытый чат</a>
            </div>
        </header>
    )
};

export default Header;