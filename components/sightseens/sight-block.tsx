export interface SightseensBlock {
	title: string
	image: string
	description: string
}

export interface SightseensProps {
	sightseen: SightseensBlock,
	onClick?: (sightseen: SightseensBlock) => void
}

export function Sightseen(props: SightseensProps) {
	return (
		<section className="sight-block">
			<img src={props.sightseen.image} onClick={() => props.onClick ? props.onClick(props.sightseen) : null} alt="Фон для блока достопримечательности" className="sight-block__img" />
			<div className="sight-block__text">
				<h3 className="sight-block__title">{props.sightseen.title}</h3>
				<p className="sight-block__description">{props.sightseen.description}</p>
			</div>
		</section>
	)
}