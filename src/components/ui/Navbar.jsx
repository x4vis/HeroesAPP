import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'

export const Navbar = () => {

	const { user } = useContext(AuthContext);

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

						<NavLink className="btn btn-outline-warning"
										exact
										to="/login" >
										Logout
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	)
}