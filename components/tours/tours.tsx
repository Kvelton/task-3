import { Tour, ToursBlock } from "./tours-block"
let ManyTours;
let ClickButtonManyTours: boolean
ClickButtonManyTours = true
let firstClickButtonManyTours: boolean

const ClickManyTours = () => {
	ManyTours = document.getElementsByClassName('tours-block--hidden')
	let QuantityManyTours: number = ManyTours.length;

	if (ClickButtonManyTours) {
		for (var s = 0; s < QuantityManyTours; s++) {
			ManyTours[s].className = 'tours-block--hidden _visible';
			ClickButtonManyTours = false
		}
	} else {
		for (var s = 0; s < QuantityManyTours; s++) {
			ManyTours[s].className = 'tours-block--hidden';
			ClickButtonManyTours = true
		}
	}
}

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
			<button className="tours-subtext" type="button" onClick={ClickManyTours}>Больше туров</button>
		</article>
	)
}