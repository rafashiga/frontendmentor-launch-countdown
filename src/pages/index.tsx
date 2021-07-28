import Head from 'next/head';
import HomeTemplate from '@/templates/Home';

export default function Home() {
	return (
		<>
			<Head>
				<title>Launch Countdown Timer</title>
			</Head>
			<HomeTemplate />
		</>
	);
}
