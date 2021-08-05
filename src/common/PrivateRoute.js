import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';

const PrivateRoute = ({component: Component, auth, ...rest}) => {
    return (
        <Route
        {...rest}
        render={props => {
            if (auth.isLoaging) {
                return <h2>Loading ...</h2>
            }
            else if (!auth.isAuthenticated) {
                return <Redirect to="/login"></Redirect>
            }
            else {
            return <Component {...props}></Component>}
        }}
        >

        </Route>
    )
}
const mapToStateProps = state => ({
    auth: state.auth
})
export default connect(mapToStateProps)(PrivateRoute);