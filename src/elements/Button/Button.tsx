import bemJoin from 'bem-join'
import { compact, invoke, isNil } from 'lodash'
import * as React from 'react'
import {
	BaseElement,
	BEMBlockProps,
	HTMLButtonProps,
} from '../'

export interface ButtonProps extends BEMBlockProps {
	buttonProps?: HTMLButtonProps
}

/**
 * A Button indicates a possible user action.
 */
export default class Button extends BaseElement<HTMLButtonElement, ButtonProps> {

	public static defaultProps: Partial<ButtonProps> = {
		bemBlock: 'button',
		buttonProps: {
			className: '',
			role: 'button',
		},
	}

	protected get buttonProps() {
		return this.props.buttonProps as HTMLButtonProps
	}

	public render() {
		const {
			bemBlock,
			bemModifiers,
		} = this.props
		const b = bemJoin(bemBlock as string)
		const buttonProps = this.buttonProps
		const modifiedButtonProps: HTMLButtonProps = {
			...buttonProps,
			className: compact([
				b(bemModifiers),
				buttonProps.className,
			]).join(' '),
			onClick: this.handleClick,
			ref: this.handleRef,
			tabIndex: this.computeTabIndex(),
		}
		return (
			<button {...modifiedButtonProps} />
		)
	}

	protected handleClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
		if (this.buttonProps.disabled) {
			e.preventDefault()
			return
		}
		invoke(this.props.buttonProps, 'onClick', e)
	}

	protected computeTabIndex() {
		const { disabled, tabIndex } = this.buttonProps
		return !isNil(tabIndex) ? tabIndex : disabled ? -1 : 0
	}
}
