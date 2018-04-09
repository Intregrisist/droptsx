import bemJoin from 'bem-join'
import * as React from 'react'
import './app.css'

import logo = require('./logo.svg')

const b = bemJoin('app')
export default class App extends React.Component {
	public render() {
		return (
			<div className={b()}>
				<header className={b('header')}>
					<img src={logo} className={b('logo')} alt="logo" />
					<h1 className={b('title')}>Welcome to React</h1>
				</header>
				<p className={b('intro')}>
					To get started, edit <code>src/App.tsx</code> and save to reload.
				</p>
			</div>
		)
	}
}
