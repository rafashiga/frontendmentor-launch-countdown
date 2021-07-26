import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	position: relative;
	background: url('./images/bg-stars.svg') no-repeat 100%;
	background-position: center;
	background-color: var(--dark-blue);

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	@media (min-width: 768px) {
		height: 100vh;
	}
`;

export const Title = styled.h1`
	color: var(--white);
	text-transform: uppercase;
	font-weight: 700;
	font-size: 1.5rem;
	letter-spacing: 6px;
	text-align: center;
	margin: 10rem 0 6rem;
`;

export const CountdownWrapper = styled.div`
	display: flex;
	gap: 0.75rem;
	justify-content: center;

	@media (min-width: 768px) {
		gap: 2.5rem;
	}
`;

export const ImageFooter = styled.img`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 20%;
	object-fit: cover;

	@media (min-width: 900px) {
		height: auto;
	}
`;

export const Footer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	flex-direction: column;
	margin-bottom: 2rem;

	@media (min-width: 900px) {
		margin-bottom: 5rem;
	}

	p {
		color: var(--grayish-blue);
		z-index: 2;
		text-align: center;
		margin: 0 1rem;

		a {
			color: var(--white);
			transition: all 0.3s;
		}

		a:hover {
			opacity: 0.8;
		}
	}
`;

export const Social = styled.div`
	display: flex;
	gap: 2.5rem;

	a:hover {
		filter: invert(12%) sepia(23%) saturate(1352%) hue-rotate(87deg)
			brightness(110%) contrast(200%);
	}
`;
