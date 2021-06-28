import React from 'react'
import { Route } from 'react-router-dom'

function Welcome() {
    return (
        <section>
            <h1>welcome 1</h1>
            {/* nested routes */}
            <Route path="/welcome/new-user">
                <p>Welcome new user</p>
            </Route>
        </section>
    )
}

export default Welcome
