import React from 'react'
import {Switch, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Profile from './components/Profile'

export default (
    <Switch>
        <Route component={Landing} exact path='/' />
        <Route component={Profile} path='/meet-me/:first/:last' />
    </Switch>
)