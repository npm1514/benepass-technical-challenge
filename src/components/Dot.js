import { ellipse } from '../images';

function Dot({ num }) {
	return (
		<div className='flex gap-[5px]'>
			{[...new Array(num)].map(() => (
				<img className='h-[24px] w-[6px]' src={ellipse} />
			))}
		</div>
	);
}

export default Dot;
