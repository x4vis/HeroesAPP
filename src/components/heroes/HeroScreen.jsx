import { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroById';

export const HeroScreen = ({history}) => {

	const { heroId } = useParams();

	const hero =  useMemo(() => getHeroesById(heroId), [heroId]);

	if (!hero) {
		return <Redirect to="/"/>
	}

	const handleReturn = () => {

		if (history.length <= 2) {
			history.push("/");
			return;
		}

		history.goBack();
	}

	const {
		id,
		superhero,
		alter_ego,
		publisher,
		first_appearance,
		characters
	} = hero;

	return (
		<div className="row mt-5">
			<div className="col-4">
				<img className="img-thumbnail" 
						 src={`../assets/heroes/${heroId}.jpg`} 
						 alt={superhero}/>
			</div>

			<div className="col-8">
				<h3>{superhero}</h3>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<b>Alter ego: </b>
						{alter_ego}
					</li>
					<li className="list-group-item">
						<b>Publisher: </b>
						{publisher}
					</li>
					<li className="list-group-item">
						<b>First appearance: </b>
						{first_appearance}
					</li>
				</ul>

				<h5 className="mt-4">Characters</h5>
				<p>{characters}</p>

				<button onClick={handleReturn} 
								className="btn btn-outline-info">
					Return
				</button>
			</div>
		</div>
	)
}
