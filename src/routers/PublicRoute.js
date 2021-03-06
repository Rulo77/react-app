import React from 'react'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
     <Route { ...rest }
        component={(props) =>(
            (!isAuthenticated)
            ? <Component {...props} />
            : (<Redirect to="/" />)
        )

        }
     
     />
    )
}
