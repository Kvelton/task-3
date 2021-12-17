import { useState } from "react";
import { Tour, ToursBlock } from "./tours-block"

const ourTours: ToursBlock[] = [
	{
		class: 'tours-block',
		title: 'Название',
		description: 'Lorem ipsum dolor sit amet icing elit.Ab suscipit in exercitationem harum minima debitis',
		price: '10 001'
	},
	{
		class: 'tours-block',
		title: 'Название',
		description: 'Lorem ipsum dolor sit amet icing elit.Ab suscipit in exercitationem harum minima debitis',
		price: '10 002'
	},
	{
		class: 'tours-block--hidden',
		title: 'Название',
		description: 'Lorem ipsum dolor sit amet icing elit.Ab suscipit in exercitationem harum minima debitis',
		price: '10 003'
	},
	{
		class: 'tours-block--hidden',
		title: 'Название',
		description: 'Lorem ipsum dolor sit amet icing elit.Ab suscipit in exercitationem harum minima debitis',
		price: '10 004'
	},
	{
		class: 'tours-block--hidden',
		title: 'Название',
		description: 'Lorem ipsum dolor sit amet icing elit.Ab suscipit in exercitationem harum minima debitis',
		price: '10 005'
	},
	{
		class: 'tours-block--hidden',
		title: 'Название',
		description: 'Lorem ipsum dolor sit amet icing elit.Ab suscipit in exercitationem harum minima debitis',
		price: '10 006'
	},
]

export function Tours() {
	let ManyTours;
	const [visible, setVisible] = useState(true)
	const [buttonName, setButtonName] = useState("Больше")
	const ClickManyTours = () => {
		ManyTours = document.getElementsByClassName('tours-block--hidden')
		let QuantityManyTours: number = ManyTours.length;

		if (visible) {
			for (var s = 0; s < QuantityManyTours; s++) {
				ManyTours[s].className = 'tours-block--hidden _visible';
				setButtonName("Меньше")
				setVisible(false)
			}
		} else {
			for (var s = 0; s < QuantityManyTours; s++) {
				ManyTours[s].className = 'tours-block--hidden';
				setButtonName("Больше")
				setVisible(true)
			}
		}
	}
	return (
		<article id="title_list2" className="tours">
			<h2 className="tours__title">Туры</h2>
			<div className="touts__content">
				{
					ourTours.map((item: ToursBlock, index: number) =>
						<Tour tour={item} key={`tours_${index}`} />
					)
				}
			</div>
			<button className="tours-subtext" type="button" onClick={ClickManyTours}>{buttonName} туров</button>
		</article>
	)
}