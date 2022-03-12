import	React, {Fragment, useRef}	from	'react';
import	Link						from	'next/link';
import	{useRouter}					from	'next/router';
import	{Dialog, Transition}		from	'@headlessui/react';
import	IconCross					from	'components/icons/IconCross';
import	IconTwitter					from	'components/icons/IconTwitter';
import	IconGithub					from	'components/icons/IconGithub';
import	IconDiscord					from	'components/icons/IconDiscord';
import	IconMedium					from	'components/icons/IconMedium';

function	Menu({router}) {
	return (
		<div className={'flex flex-col justify-between pt-20 h-screen font-roboto'}>
			<div className={'flex flex-col pt-2'}>
				<Link href={'/'}>
					<p className={`pb-6 font-bold ${router.asPath === '/' ? 'text-green-2' : 'text-black'}`}>
						{'Home'}
					</p>
				</Link>
				<Link href={'/faq'}>
					<p className={`pb-6 font-bold ${router.asPath === '/faq' ? 'text-green-2' : 'text-black'}`}>
						{'Program FAQs'}
					</p>
				</Link>
				<Link href={'/apply'}>
					<p className={`pb-6 font-bold ${router.asPath === '/apply' ? 'text-green-2' : 'text-black'}`}>
						{'Apply'}
					</p>
				</Link>
			</div>

			<div className={'pb-6 mt-auto'}>
				<div className={'flex flex-row justify-center items-center space-x-4'}>
					<div className={'text-green-2 hover:text-green-1 transition-colors cursor-pointer'}>
						<a href={'https://twitter.com/iearnfinance'} target={'_blank'} rel={'noreferrer'}><IconTwitter /></a>
					</div>
					<div className={'text-green-2 hover:text-green-1 transition-colors cursor-pointer'}>
						<a href={process.env.PROJECT_GITHUB_URL} target={'_blank'} rel={'noreferrer'}><IconGithub /></a>
					</div>
					<div className={'text-green-2 hover:text-green-1 transition-colors cursor-pointer'}>
						<a href={'https://discord.yearn.finance/'} target={'_blank'} rel={'noreferrer'}><IconDiscord /></a>
					</div>
					<div className={'text-green-2 hover:text-green-1 transition-colors cursor-pointer'}>
						<a href={'https://medium.com/iearn'} target={'_blank'} rel={'noreferrer'}><IconMedium /></a>
					</div>
				</div>
			</div>
		</div>
	);
}

function	ModalMenu({open, set_open}) {
	const	ref = useRef();
	const	router = useRouter();

	React.useEffect(() => {
		set_open(false);
	}, [router.asPath]);

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as={'div'}
				static
				className={'overflow-hidden overflow-y-auto fixed inset-0'}
				style={{zIndex: 9999999}}
				initialFocus={ref}
				open={open}
				onClose={set_open}>
				<div className={'flex overflow-hidden justify-center items-start min-h-screen text-center backdrop-blur transition-opacity'} style={{background: 'rgba(255,255,255,0.80)'}}>
					<Transition.Child
						as={Fragment}
						enter={'ease-out duration-300'} enterFrom={'opacity-0'} enterTo={'opacity-100'}
						leave={'ease-in duration-200'} leaveFrom={'opacity-100'} leaveTo={'opacity-0'}>
						<Dialog.Overlay className={'fixed inset-0 z-10'} />
					</Transition.Child>

					<Transition.Child
						as={Fragment}
						enter={'ease-out duration-300'}
						enterFrom={'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'}
						enterTo={'opacity-100 translate-y-0 sm:scale-100'}
						leave={'ease-in duration-200'}
						leaveFrom={'opacity-100 translate-y-0 sm:scale-100'}
						leaveTo={'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'}>
						<div className={'overflow-hidden relative z-50 w-full h-full transition-all'}>
							<div ref={ref} className={'absolute top-4 right-2'} onClick={() => set_open(false)}>
								<IconCross />
							</div>
							<Menu router={router} />
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
}


export default ModalMenu;