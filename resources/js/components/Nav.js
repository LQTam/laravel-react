import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import links from '../constances/links';

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                return (
                    <li className={match ? "nav-item actived" : "nav-item"}>
                        <Link to={to} className='nav-link'>{label}</Link>
                    </li>
                )
            }}
        />
    )
}

const showMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
        result = menus.map((menu, index) => {
            return <MenuLink
                key={index}
                to={menu.to}
                activeOnlyWhenExact={menu.exact}
                label={menu.label} />
        })
    }
    return result;
}
export default class Nav extends Component {

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <Link to='/' className='navbar-brand'>Logo</Link>
                    <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation"></button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            {showMenus(links)}
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </>
        )
    }
}
