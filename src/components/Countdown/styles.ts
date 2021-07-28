import styled from 'styled-components';

export const Container = styled.div`
	flex-direction: column;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Number = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;

	padding: 1rem;
	border-radius: 10px;
	width: 4.75rem;
	height: 4.75rem;

	color: var(--soft-red);
	font-size: 2rem;
	background: linear-gradient(to bottom, #2c2c44, #34364f);
	box-shadow: 0px 13px 4px -2px var(--dark-black-blue);

	&:before,
	&::after {
		content: '';
		position: absolute;
		width: 0.75rem;
		height: 0.75rem;
		border-radius: 50%;
		background-color: var(--dark-black-blue);

		@media (min-width: 600px) {
			width: 1rem;
			height: 1rem;
		}
	}

	&:before {
		left: 0;
		transform: translateX(-50%);
	}

	&::after {
		right: 0;
		transform: translateX(50%);
	}

	@media (min-width: 600px) {
		font-size: 4rem;

		width: 8rem;
		height: 8rem;
	}

	@media (min-width: 900px) {
		font-size: 5rem;

		width: 8.5rem;
		height: 8.5rem;
	}
`;

export const NumberLine = styled.div`
	position: absolute;
	height: 1px;
	width: 100%;
	background-color: var(--dark-black-blue);
	opacity: 0.4;
`;

export const Title = styled.div`
	margin-top: 1rem;
	letter-spacing: 6px;
	color: var(--grayish-blue);
	font-size: 0.45rem;

	@media (min-width: 600px) {
		font-size: 0.875rem;
	}
`;
