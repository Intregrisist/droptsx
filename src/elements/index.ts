import { BEMModifiers } from 'bem-join'
import { invoke } from 'lodash'
import * as React from 'react'

type HTMLProps<
	E extends HTMLElement,
	A extends React.HTMLAttributes<E>
> = React.DetailedHTMLProps<A, E>

export type HTMLButtonProps = HTMLProps<
	HTMLButtonElement,
	React.ButtonHTMLAttributes<HTMLButtonElement>
>

export interface BEMBlockProps {
	bemBlock?: string
	bemModifiers?: BEMModifiers
}

export interface FocusOptions {
	/**
	 * If false, the method will scroll the element into the visible area of the browser window.
	 * If true, the method will NOT scroll the element into the visible area of the browser window.
	 */
	preventScroll?: boolean
}

export class BaseElement<Element extends HTMLElement, Props = {}, State = {}>
	extends React.Component<Props & BEMBlockProps, State> {
	protected ref: Element | null
	protected handleRef = (c: Element | null) => this.ref = c
	protected focus = (focusOptions?: FocusOptions) => invoke(this.ref, 'focus', focusOptions)
}
