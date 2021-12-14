import Image from "next/image"
import mapImage from "../public/img/map.png"

export function Contacts() {
	return (
		<article id="title_list3" className="contacts">
			<h2 className="contacts__title">Контакты</h2>
			<section className="connect">
				<ul className="connect__list">
					<li className="connect__text connect__text_icon1">655019, Республика Хакасия, г. Абакан, пр. Ленина, д. 67</li>
					<li className="connect__text connect__text_icon2">8 (3902) 22-53-35 </li>
					<li className="connect__text">8 (3902) 24-30-71</li>
					<li className="connect__text connect__text_icon3">kancler@vskhakasia.ru</li>
				</ul>
				<img src="img/map.png" alt="Карта" className="connect__map" />
			</section>
		</article>
	)
}