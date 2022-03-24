import	React		from	'react';
import	Footer		from	'components/Footer';
import	toast		from	'react-hot-toast';

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
		<div>
			<h1 className={'text-4xl font-bold text-black whitespace-pre-wrap'}>{'Apply for help'}</h1>
			<form
				name={'apply-form'}
				className={'mt-10 space-y-8'}
				onSubmit={(e) => {
					set_lockSubmit(true);
					e.preventDefault();
					const form = document.forms['apply-form'];
					const scriptURL = process.env.FORM_APPLY;
					fetch(scriptURL, {method: 'POST', body: new FormData(form)})
						.then(() => {
							toast.success('Thank you for your application!');
							form.reset();
							set_lockSubmit(false);
						})
						.catch(() => {
							toast.error('Something went wrong. Please try again.');
							set_lockSubmit(false);
						});
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
				<button
					disabled={lockSubmit}
					className={'flex justify-center items-center w-full h-10 text-center cursor-pointer md:w-55 button-filled button-large'}
					type={'submit'}>
					{handleSubmit()}
				</button>
			</form>
		</div>
	);
}


function Wrapper() {
	return (
		<>
			<section className={'flex flex-col mx-auto mt-20 w-full md:max-w-3xl lg:max-w-5xl xl:max-w-6xl h-full md:mt-40'}>
				<Apply />
			</section>
			<Footer />
		</>
	);
}

export default Wrapper;