export function Footer() {
	return (
		<footer className="footer">
			<nav className="footer-menu">
				<div className="footer-menu__title">Меню</div>
				<ul className="footer-menu__list">
					<li className="footer-menu__item"><a data-goto="#title_list0" href="#" className="menu__link">Главная</a></li>
					<li className="footer-menu__item"><a data-goto="#title_list1" href="#" className="menu__link">Достопримечательности</a></li>
					<li className="footer-menu__item"><a data-goto="#title_list2" href="#" className="menu__link">Туры</a></li>
					<li className="footer-menu__item"><a data-goto="#title_list3" href="#" className="menu__link">Контакты</a></li>
				</ul>
			</nav>
			<div className="footer-contacts">
				<div className="footer-contacts__title">Контакты</div>
				<div className="footer-contacts__text">655019, Республика Хакасия, г. Абакан, пр. Ленина, д. 67 <br /> Справочная служба: 8 (3902) 22-53-35, факс: 8 (3902) 24-30-71 Электронная почта: kancler@vskhakasia.ru</div>
			</div>
			<p className="footer__text">Официальный сайт Агенства Туризма Республики Хакасия © 2021</p>
		</footer>
	)
}