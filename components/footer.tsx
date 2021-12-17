import Link from "next/dist/client/link"

export function Footer() {
	return (
		<footer className="footer">
			<nav className="footer-menu">
				<div className="footer-menu__title">Меню</div>
				<ul className="footer-menu__list">
					<li className="footer-menu__item">
						<Link href="/#title_list0">
							<a className="footer-menu__link">Главная</a>
						</Link>
					</li>
					<li className="footer-menu__item">
						<Link href="/#title_list1">
							<a className="footer-menu__link">Достопримечательности</a>
						</Link>
					</li>
					<li className="footer-menu__item">
						<Link href="/#title_list2">
							<a className="footer-menu__link">Туры</a>
						</Link>
					</li>
					<li className="footer-menu__item">
						<Link href="/#title_list3">
							<a className="footer-menu__link">Контакты</a>
						</Link>
					</li>
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