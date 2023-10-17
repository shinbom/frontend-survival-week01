import {useState} from 'react';
import Greeting from './components/Greeting';

type AppProps = {
	name?: string;
};

export default function App({name = 'world'}: AppProps) {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<Greeting name='world'/>
			<p>Hello, {name}!</p>
			<p>Count, {count}!</p>
			<button type='button' onClick={handleClick}>클릭!</button>
		</div>
	);
}
