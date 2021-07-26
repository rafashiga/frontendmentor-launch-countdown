import { ReactNode } from 'react';

import { Container, Number, NumberLine, Title } from './styles';

interface CountdownProps {
	title: string;
	value: string;
}

function Countdown({ title, value }: CountdownProps) {
	return (
		<Container>
			<Number>
				{value}
				<NumberLine />
			</Number>
			<Title>{title}</Title>
		</Container>
	);
}

export default Countdown;
