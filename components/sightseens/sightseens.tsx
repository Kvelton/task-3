import { Sightseen, SightseensBlock } from './sight-block'

const ourSightseens: SightseensBlock[] = [
	{
		title: 'Тропа предков',
		image: 'img/sightseens_img.jpg',
		description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Ab suscipit in exercitationem harum minima debitis rerum enim reprehenderit, ipsa totam, molestiae voluptatum a consequuntur quam officiis sunt illo quas! Voluptas!'
	},
	{
		title: 'Озеро Беле',
		image: 'img/sightseens_img.jpg',
		description: 'Description'
	},
	{
		title: 'Сундуки',
		image: 'img/sightseens_img.jpg',
		description: 'Description'
	},
]

export function Sightseens() {
	return (
		<article id="title_list1" className="sightseens">
			<h2 className="sightseens__title">Достопримечательности</h2>
			{
				ourSightseens.map((item: SightseensBlock, index: number) =>
					<Sightseen sightseen={item} key={`sightseens_${index}`} />
				)
			}
		</article>
	)
}