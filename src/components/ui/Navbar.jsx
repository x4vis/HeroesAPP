import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';



export const Navbar = () => {

	const { user, dispatch } = useContext(AuthContext);
	const history = useHistory();

	const handleLogOut = () => {
		dispatch({
			type: types.logout
		});

		history.push('/login');
	}

	return (
		<nav className="navbar navbar-expand navbar-dark bg-dark">
			<div className="container-fluid">
				<Link className="navbar-brand"
							to="/">
							Asociaciones
        </Link>

				<div className="collapse navbar-collapse"
						 id="navbarSupportedContent">
					<ul className="navbar-nav me-auto">

						<li className="nav-item">
							<NavLink activeClassName="active"
											 className="nav-link"
											 exact
											 to="/marvel">
											 Marvel
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink activeClassName="active"
											 className="nav-link"
											 exact
											 to="/dc">
											 DC
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink activeClassName="active"
											 className="nav-link"
											 exact
											 to="/search">
											 Search Hero
							</NavLink>
						</li>					
					</ul>

					<div className="d-flex align-items-center">
						<p className="text-info m-0 nav-link">
							{ user.name }
						</p>

						<button className="btn btn-outline-warning"
										onClick={handleLogOut} >
							Logout
						</button>
					</div>
				</div>
			</div>
		</nav>
	)
}