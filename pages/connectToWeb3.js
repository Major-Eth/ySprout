import	React				from	'react';
import	{ethers}			from	'ethers';
import	Image				from	'next/image';
import Link from 'next/link';

const	AZTEC = '0x737901bea3eeb88459df9ef1BE8fF3Ae1B42A2ba';
const	DAI_ADDRESS = '0x6b175474e89094c44da98b954eedeac495271d0f';
const	ERC20_ABI_MIN = ['function balanceOf(address) view returns (uint256)'];

function	formatAmount(amount, decimals = 2, minFraction = 2) {
	let		locale = 'fr-FR';
	if (typeof(navigator) !== 'undefined')
		locale = navigator?.language || 'fr-FR';
	return (new Intl.NumberFormat([locale, 'en-US'], {minimumFractionDigits: minFraction, maximumFractionDigits: decimals}).format(amount));
}

function	Slide1() {
	const [aztecBalanceOfDay, set_aztecBalanceOfDay] = React.useState(0);

	const fetchDaiBalance = React.useCallback(async () => {
		const	provider = new ethers.providers.JsonRpcProvider(`https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`);
		const	daiContract = new ethers.Contract(DAI_ADDRESS, ERC20_ABI_MIN, provider);
		const	daiContractBalanceOfDay = await daiContract.balanceOf(AZTEC);
		set_aztecBalanceOfDay(ethers.utils.formatEther(daiContractBalanceOfDay));
	}, []);
	React.useEffect(() => fetchDaiBalance(), [fetchDaiBalance]);

	return (
		<div className={'flex flex-col mx-auto w-full max-w-6xl h-full'}>
			<section className={'items-start pt-20 h-screen md:pt-60 small:pt-32'}>
				<div className={'grid grid-cols-12 md:items-center'}>
					<div className={'col-span-12 pr-0 md:col-span-6 md:pr-10 small:col-span-7'}>
						<h1 className={'mt-10 text-3xl font-bold text-black whitespace-pre-wrap md:mt-0 md:text-4xl'}>
							{'Wanna get the balance of Dai from Aztek ?'}
						</h1>
						<p className={'my-6 text-grey-2'}>
							{'When this page is loaded, a connection will be made to the Ethereum mainnet through alchemy, and will ask to execute the view function `balanceOf` on the Dai contract.'}
						</p>

						<h2 className={'mt-10 text-3xl font-bold text-black whitespace-pre-wrap md:mt-0 md:text-4xl'}>
							{`${formatAmount(aztecBalanceOfDay)} DAI`}
						</h2>

						<div className={'flex flex-row mt-6 space-x-4'}>
							<Link href={'/apply'}>
								<button className={'w-55 button-filled button-large'}>{'Refresh'}</button>
							</Link>
						</div>
					</div>
					<div className={'hidden col-span-12 md:block md:col-span-6 small:col-span-5'}>
						<Image src={'/image_1.jpeg'} width={600} height={696} loading={'eager'}/>
					</div>
				</div>
			</section>
		</div>
	);
}

function Wrapper() {

	return (
		<>
			<div className={'section-wrapper'}>
				<section className={'flex w-full h-screen section'}>
					<div className={'w-full h-full'}>
						<Slide1 />
					</div>
				</section>
			</div>
		</>
	);
}

export default Wrapper;
