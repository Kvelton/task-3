export function HeaderArrow() {
	return (
		<div className="welcome-section__trajectory-arrow">
			<button id="arrow" className='welcome-section__arrow'>
				<svg className="welcome-section__line1" >
					<use xlinkHref="/img/sprite.svg#line1"></use>
				</svg>
				<svg className="welcome-section__line2">
					<use xlinkHref="/img/sprite.svg#line2"></use>
				</svg>
			</button>
		</div>
	)
}