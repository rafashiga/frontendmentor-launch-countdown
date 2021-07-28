import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Countdown from '@/components/Countdown';

import FacebokIcon from '../../../public/images/icon-facebook.svg';
import PinterestIcon from '../../../public/images/icon-pinterest.svg';
import InstagramIcon from '../../../public/images/icon-instagram.svg';

import {
	Container,
	Title,
	CountdownWrapper,
	ImageFooter,
	Footer,
	Social,
} from './styles';

function HomeTemplate() {
	const [days, setDays] = useState('');
	const [hours, setHours] = useState('');
	const [minutes, setMinutes] = useState('');
	const [seconds, setSeconds] = useState('');
	const [difference, setDifference] = useState(0);
	const [intervalId, setIntervalId] = useState<any>();

	const addLeftZero = (value: number) => String(value).padStart(2, '0');

	const startCountdown = useCallback(() => {
		const deadline = new Date(2021, 6, 26, 16, 37, 0) as any;
		deadline.setDate(deadline.getDate() + 9);

		const current = new Date() as any;

		const diff = deadline - current;
		setDifference(diff);

		if (diff < 0) {
			return;
		}

		const day = Math.floor(diff / (1000 * 60 * 60 * 24));
		const hour = Math.floor((diff / (1000 * 60 * 60)) % 24);
		const minute = Math.floor((diff / (1000 * 60)) % 60);
		const second = Math.floor((diff / 1000) % 60);

		setDays(addLeftZero(day));
		setHours(addLeftZero(hour));
		setMinutes(addLeftZero(minute));
		setSeconds(String(second));
	}, []);

	useEffect(() => {
		const intervalId = setInterval(() => {
			startCountdown();
		}, 1000);

		return () => {
			if (difference < 0) {
				clearInterval(intervalId);
				setDays('00');
				setHours('00');
				setMinutes('00');
				setSeconds('00');
			}
		};
	}, [difference, startCountdown]);

	return (
		<Container>
			<div>
				<Title>We're Launching Soon</Title>

				<CountdownWrapper>
					<Countdown title='DAYS' value={days} />
					<Countdown title='HOURS' value={hours} />
					<Countdown title='MINUTES' value={minutes} />
					<Countdown title='SECONDS' value={seconds} />
				</CountdownWrapper>
			</div>
			<ImageFooter src='./images/pattern-hills.svg' alt='pattern hills' />

			<Footer>
				<Social>
					<Link href='/'>
						<a>
							<Image src={FacebokIcon} alt='facebook' />
						</a>
					</Link>
					<Link href='/'>
						<a>
							<Image src={PinterestIcon} alt='pinterest' />
						</a>
					</Link>
					<Link href='/'>
						<a>
							<Image src={InstagramIcon} alt='instagram' />
						</a>
					</Link>
				</Social>

				<p>
					Challenge by{' '}
					<Link href='https://www.frontendmentor.io/challenges'>
						Frontend Mentor
					</Link>
					. Coded by {'  '}
					<Link href='https://github.com/rafashiga'>Rafael Shiga</Link> .
				</p>
			</Footer>
		</Container>
	);
}

export default HomeTemplate;
