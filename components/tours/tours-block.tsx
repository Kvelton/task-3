export interface ToursBlock {
	class: string,
	title: string,
	description: string,
	price: string
}

export interface ToursProps {
	tour: ToursBlock,
	onClick?: (tours: ToursBlock) => void
}

export function Tour(props: ToursProps) {
	return (
		<section className={props.tour.class}>
			<div className="tours-block__gradient">
				<h3 className="tours-block__title">{props.tour.title}</h3>
				<p className="tours-block__description">
					{props.tour.description}
				</p>
				<div className="tours-block__price-button">
					<p className="tours-block__price">От <b>{props.tour.price}</b> р.</p>
					<button type="button" className="tours-block__button">Купить</button>
				</div>
			</div>
		</section>
	)
}