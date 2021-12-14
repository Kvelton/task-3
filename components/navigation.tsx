import Link from 'next/link';
import { useState } from 'react';

export const Navigation = (props: { isMenuVisible: Boolean }) => {

	const handleLinkClick = () => {
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
