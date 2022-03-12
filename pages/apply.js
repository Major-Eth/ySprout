import	React		from	'react';

function	Footer() {
	return (
		<footer className={'flex mt-auto'}>
			<div className={'flex flex-row px-4 pt-6 pb-10 -mx-4 mt-10 w-auto bg-green-3 md:mt-30 md:w-full'}>
				<div className={'grid grid-cols-12 mx-auto w-full max-w-6xl'}>
					<div className={'col-span-12 md:col-span-8'}>
						<p className={'mb-4 text-sm text-black md:text-base'}>{'Stay in the loop: Sign up with your email address to receive news and updates.'}</p>
						<label className={'flex flex-col text-sm font-bold text-grey-2 md:text-base'}>
							{'Sign up'}
							<div className={'flex flex-row mt-2 space-x-4'}>
								<input
									className={'w-full md:w-[360px] input'}
									placeholder={'Your e-mail'} />
								<button className={'w-1/2 md:w-55 button-filled button-large'}>{'Submit'}</button>
							</div>
							
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


function	FormField({label, name, notice, formType, required = true, ...props}) {
	if (formType === 'textarea') {
		return (
			<div className={'grid grid-cols-12 gap-x-0 gap-y-2 items-center md:gap-x-6 md:gap-y-0'}>
				<label className={'flex flex-col col-span-12 font-bold text-grey-2 md:col-span-8'}>
					{label}
					<textarea
						cols={10}
						required={required}
						className={'mt-2 resize-none textarea'}
						name={name}
						{...props}
					/>
				</label>
				<div className={'col-span-12 md:col-span-4'}>
					<p className={'hidden md:block'}>&nbsp;</p>
					<p className={'text-xs text-grey-2'}>{notice}</p>
				</div>
			</div>
		);
	}
	return (
		<div className={'grid grid-cols-12 gap-x-0 gap-y-2 items-center md:gap-x-6 md:gap-y-0'}>
			<label className={'flex flex-col col-span-12 font-bold text-grey-2 md:col-span-8'}>
				{label}
				<input required={required} autoComplete={'off'} className={'mt-2 input'} name={name} {...props} />
			</label>
			<div className={'col-span-12 md:col-span-4'}>
				<p className={'hidden md:block'}>&nbsp;</p>
				<p className={'text-xs text-grey-2'}>{notice}</p>
			</div>
		</div>
	);
}

function	Apply() {
	return (
		<div>
			<h1 className={'text-4xl font-bold text-black whitespace-pre-wrap'}>{'Apply for help'}</h1>
			<form
				name={'apply-form'}
				className={'mt-10 space-y-8'}
				onSubmit={(e) => {
					e.preventDefault();
					const form = document.forms['apply-form'];
					const scriptURL = 'https://script.google.com/macros/s/AKfycbx3k-loOJfhKvbyn4ORH343B5xwbcAzLnnxQcTNffGyOunWonl0F16OwozhjisJE3kV/exec';
					fetch(scriptURL, {method: 'POST', body: new FormData(form)})
						.then(() => console.log('Success!'))
						.catch(error => console.error('Error!', error.message));
				}}>

				<FormField label={'What is your start-up/project name?'} name={'projectName'} autoFocus />
				<FormField label={'What is your email and Telegram?'} name={'emailOrTelegram'} />
				<FormField
					label={'What are you building?'}
					name={'whatBuilding'}
					notice={'max 50 characters e.g. “Lending and Borrowing Using NFTs”'}
					maxLength={50}/>
				<FormField
					formType={'textarea'}
					label={'Expand on what you are building'}
					name={'whatBuildingExpand'}
					notice={'Share more details on how your product works or will work. Include technical details and approach. Feel free to link to any documentation. Your response should be at least 3-4 paragraphs and should include technical documentation if you have built a POC or MVP already.'}/>
				<FormField label={'What ecosystem are you building on?'} name={'ecosystem'} />
				<FormField label={'Why are you working on this idea?'} name={'why'} />
				<FormField label={'How do you know it\'s an important problem to solve?'} name={'whyImportant'} />
				<FormField label={'Do you have any previous experience in the area?'} name={'previousXP'} />
				<FormField label={'Why are you applying to this program?'} name={'projectName'} />
				<FormField label={'Are there specific areas you\'re looking for help with?'} name={'specificHelp'} />
				<FormField label={'Have you received any investments so far?'} name={'previousInvestments'} />
				<FormField label={'If so, from which investors and at what valuations?'} required={false} name={'previousInvestors'} />
				
				<input className={'w-full md:w-55 button-filled button-large'} type={'submit'} value={'Submit'} />
			</form>
		</div>
	);
}


function Wrapper() {
	return (
		<>
			<section className={'flex flex-col mx-auto mt-20 w-full max-w-6xl h-full md:mt-40'}>
				<Apply />
			</section>
			<Footer />
		</>
	);
}

export default Wrapper;