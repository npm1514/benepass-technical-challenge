import { useState } from 'react';
import { benePass, bg, visa } from './images';
import Dot from './components/Dot';
import cardData from './data/cardData';

function App() {
	const [showDetails, setShowDetails] = useState(false);

	return (
		<div className='my-5 mx-4 sm:my-[60px] sm:mx-[55px] text-white text-sm sm:text-base'>
			<h1 className='text-black mb-1'>Flex card</h1>
			<h2 className='text-black mb-8'>Used for pre-tax purchases</h2>
			<div className='relative w-full max-w-[392px] max-h-[272px] rounded-[20px] overflow-hidden'>
				<img alt='card background' src={bg} className='w-full h-full' />
				<div className='absolute top-0 left-0 w-full h-full p-6 flex flex-col gap-3 justify-between'>
					<div className='flex justify-between'>
						<img alt='benePass logo' src={benePass} className='max-w-[50%]' />
						{cardData.virtual && (
							<div className=' bg-white text-black px-3 py-1 rounded-[40px] max-w-[50%] font-medium'>
								{cardData.virtual}
							</div>
						)}
					</div>
					<h1 className='flex gap-3 h-[24px] items-center'>
						{showDetails ? (
							cardData.ccNum
						) : (
							<>
								<Dot num={4} />
								<span>{cardData.ccNum.slice(-4)}</span>
							</>
						)}
					</h1>
					<div className='flex gap-10'>
						<div className='h-[24px]'>
							<h5 className='text-[#D3D2DE]'>VALID THRU</h5>
							<h3 className='font-medium'>{cardData.expDate}</h3>
						</div>
						<div>
							<h5 className='text-[#D3D2DE]'>CVC</h5>
							<h3 className='flex h-[24px] font-medium'>
								{showDetails ? cardData.cvc : <Dot num={3} />}
							</h3>
						</div>
					</div>
					<div className='flex justify-between'>
						<h3>ZIP {cardData.zip}</h3>
						<img alt='visa card icon' src={visa} />
					</div>
				</div>
			</div>
			<div className='flex ml-1 mt-4 gap-4'>
				<input
					type='checkbox'
					className='accent-[#ED0E61]'
					onChange={() => setShowDetails(!showDetails)}
				/>
				<label className={showDetails ? 'text-[#ED0E61]' : 'text-[#383B43]'}>
					Show Details
				</label>
			</div>
		</div>
	);
}

export default App;
