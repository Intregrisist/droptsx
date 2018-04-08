import bemJoin from 'bem-join';
import * as React from 'react';

export interface ButtonProps {
	bemBlock?: string;
}

export default class Button extends React.Component<ButtonProps> {
	render() {
		const { bemBlock } = this.props;
		const b = bemJoin(bemBlock || 'button');
		return (
			<button className={b()} />
		);
	}
}
