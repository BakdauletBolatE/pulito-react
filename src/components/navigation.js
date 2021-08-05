import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navigation = (props) => {
    const data = [
        {
            route: 'exportation',
            url: '/exportation',
            name: 'Вывоз'
        },
        {
            route: 'clean',
            url: '/clean',
            name: 'Чистка'
        },
        {
            route: 'delivery',
            url: 'delivery',
            name: 'Доставка'
        },
        {
            route: 'done',
            url: '/done',
            name: 'Готово'
        },
    ]
    return (
        <Fragment>
        <div className="nav">
                {data.map(item=>(
                    <div key={item.url} className={props.id === item.route ? "nav__item active" : "nav__item"}>  <Link to={item.url}>{item.name}</Link></div>
                ))}
        </div> 
        </Fragment>
    )
   
}

const mapStateToProps = state => ({
    id: state.status.route
})

export default connect(mapStateToProps)(Navigation);