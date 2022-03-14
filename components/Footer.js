import	React		from	'react';
import	toast		from	'react-hot-toast';

function	Footer() {
	const	[lockSubmit, set_lockSubmit] = React.useState(false);

	const	handleSubmit = () => {
		if (!lockSubmit) {
			return ('Submit');
		}
		return (
			<svg className={'w-5 h-5 text-white animate-spin'} xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'}>
				<circle className={'opacity-25'} cx={'12'} cy={'12'} r={'10'} stroke={'currentColor'} strokeWidth={'4'}></circle>
				<path className={'opacity-75'} fill={'currentColor'} d={'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'}></path>
			</svg>
		);
	};

	return (
		<footer className={'flex mt-auto'}>
			<div className={'flex flex-row px-4 pt-6 pb-10 mt-10 w-auto bg-green-3 md:mt-30 md:w-full'}>
				<div className={'grid grid-cols-12 mx-auto w-full max-w-6xl'}>
					<div className={'col-span-12 md:col-span-8'}>
						<p className={'mb-4 text-sm text-black md:text-base'}>{'Stay in the loop: Sign up with your email address to receive news and updates.'}</p>
						<label className={'flex flex-col text-sm font-bold text-grey-2 md:text-base'}>
							{'Sign up'}
							<form
								id={'email-form'}
								onSubmit={(e) => {
									set_lockSubmit(true);
									e.preventDefault();
									const form = document.forms['email-form'];
									const scriptURL = process.env.FORM_EMAIL;
									fetch(scriptURL, {method: 'POST', body: new FormData(form)})
										.then(() => {
											toast.success('Thank you!');
											form.reset();
											set_lockSubmit(false);
										})
										.catch(() => {
											toast.error('Something went wrong. Please try again.');
											set_lockSubmit(false);
										});
								}}
								className={'flex flex-row mt-2 space-x-4'}>
								<input
									className={'w-full md:w-[360px] input'}
									required
									name={'email'}
									type={'email'}
									placeholder={'Your e-mail'} />
								<button className={'flex justify-center items-center w-1/2 h-10 text-center md:w-55 button-filled button-large'}>
									{handleSubmit()}
								</button>
							</form>
							
						</label>
					</div>
					<div className={'col-span-12 md:col-span-4'}>
						<p className={'mt-6 mb-2 text-sm text-black md:mt-0 md:text-base'}>{'Other questions, comments, or concerns?'}</p>
						<p className={'text-xs text-grey-2'}>{'Email '}<a href={'mailto:people@yearn.finance'} className={'text-green-2 link'}>{'people@yearn.finance'}</a>{' and we will get back to you shortly.'}</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;