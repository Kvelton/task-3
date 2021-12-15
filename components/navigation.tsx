import Link from 'next/link';
import { useState } from 'react';

export const Navigation = (props: { isMenuVisible: Boolean }) => {

	const handleLinkClick = () => {
		document.querySelector('.menu')?.classList.toggle('_active')
		document.querySelector('.header__menu-button')?.classList.toggle('_active')
		document.querySelector('.welcome-section__button')?.classList.toggle('_active')
		document.querySelector('.welcome-section__arrow')?.classList.toggle('_active')
		document.body.classList.toggle('_lock')
	}

	return (
		<nav className={`menu${props.isMenuVisible ? ' _active' : ''}`}>
			<ul className="menu__list">
				<li className="menu__item">
					<Link href="/#title_list0">
						<a className="menu__link" onClick={handleLinkClick}>Главная</a>
					</Link>
				</li>
				<li className="menu__item">
					<Link href="/#title_list1">
						<a className="menu__link" onClick={handleLinkClick}>Достопримечательности</a>
					</Link>
				</li>
				<li className="menu__item">
					<Link href="/#title_list2">
						<a className="menu__link" onClick={handleLinkClick}>Туры</a>
					</Link>
				</li>
				<li className="menu__item">
					<Link href="/#title_list3">
						<a className="menu__link" onClick={handleLinkClick}>Контакты</a>
					</Link>
				</li>
			</ul>
		</nav>
	)
}
