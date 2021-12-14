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
			<button className="tours-subtext">Больше туров</button>
		</article>
	)
}