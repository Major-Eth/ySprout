import	React, {Fragment, useRef}	from	'react';
import	Link						from	'next/link';
import	{Dialog, Transition}		from	'@headlessui/react';
import	IconCross					from	'components/icons/IconCross';
import	IconTwitter					from	'components/icons/IconTwitter';
import	IconGithub					from	'components/icons/IconGithub';
import	IconDiscord					from	'components/icons/IconDiscord';
import	IconMedium					from	'components/icons/IconMedium';
function	Menu() {
	return (
		<div className={'flex flex-col justify-between pt-20 h-screen'}>
			<div className={'flex flex-col pt-2'}>
				<Link href={'/disclaimer'}>
					<p className={'pb-6 text-dark-blue-1 link'}>{'Disclaimer'}</p>
				</Link>
				<a href={'https://docs.yearn.finance'} target={'_blank'} className={'pb-6 text-dark-blue-1 link'} rel={'noreferrer'}>
					{'Documentation'}
				</a>
				<a href={'https://gov.yearn.finance/'} target={'_blank'} className={'pb-6 text-dark-blue-1 link'} rel={'noreferrer'}>
					{'Governance forum'}
				</a>
				<a href={'https://github.com/yearn/yearn-security/blob/master/SECURITY.md'} target={'_blank'} className={'text-dark-blue-1 link'} rel={'noreferrer'}>
					{'Report a vulnerability'}
				</a>
			</div>

			<div className={'pb-6 mt-auto'}>
				<p className={'pb-6 text-dark-blue-1'}>
					{'Data provided by '}
					<a href={'https://www.yfistats.com/'} target={'_blank'} rel={'noreferrer'} className={'text-yearn-blue'}>
						{'yfistats'}
					</a>
				</p>

				<div className={'flex flex-row justify-center items-center space-x-4'}>
					<div className={'text-gray-blue-1 hover:text-gray-blue-2 transition-colors cursor-pointer'}>
						<a href={'https://twitter.com/iearnfinance'} target={'_blank'} rel={'noreferrer'}><IconTwitter /></a>
					</div>
					<div className={'text-gray-blue-1 hover:text-gray-blue-2 transition-colors cursor-pointer'}>
						<a href={process.env.PROJECT_GITHUB_URL} target={'_blank'} rel={'noreferrer'}><IconGithub /></a>
					</div>
					<div className={'text-gray-blue-1 hover:text-gray-blue-2 transition-colors cursor-pointer'}>
						<a href={'https://discord.yearn.finance/'} target={'_blank'} rel={'noreferrer'}><IconDiscord /></a>
					</div>
					<div className={'text-gray-blue-1 hover:text-gray-blue-2 transition-colors cursor-pointer'}>
						<a href={'https://medium.com/iearn'} target={'_blank'} rel={'noreferrer'}><IconMedium /></a>
					</div>
				</div>
			</div>
		</div>
	);
}

function	ModalMenu({open, set_open}) {
	const	ref = useRef();

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as={'div'}
				static
				className={'overflow-y-auto fixed inset-0'}
				style={{zIndex: 9999999}}
				initialFocus={ref}
				open={open}
				onClose={set_open}>
				<div className={'flex justify-center items-start min-h-screen text-center backdrop-blur transition-opacity'} style={{background: 'rgba(255,255,255,0.68)'}}>
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
						<div className={'relative z-50 w-full h-full transition-all'}>
							<div ref={ref} className={'absolute top-4 right-2'} onClick={() => set_open(false)}>
								<IconCross />
							</div>
							<Menu />
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
}


export default ModalMenu;