import	React						from	'react';
import	Head						from	'next/head';
import	Link						from	'next/link';
import	{useRouter}					from	'next/router';
import	{DefaultSeo}				from	'next-seo';
import	{Toaster}					from	'react-hot-toast';
import	{LocalizationContextApp}	from 	'contexts/useLocalization';
import	useClientEffect				from	'hooks/useClientEffect';
import	ModalMenu					from	'components/ModalMenu';
import	IconHamburger				from	'components/icons/IconHamburger';

import	'style/Default.css';

function	Header() {
	const	router = useRouter();
	const	[openMenu, set_openMenu] = React.useState(false);

	return (
		<header className={'fixed inset-x-0 top-0 z-20 px-4 w-full bg-background md:px-0'}>
			<div className={'flex relative z-20 flex-row justify-between items-center py-4 mx-auto w-full max-w-6xl md:py-6'}>
				<div
					className={'flex flex-row justify-center items-center text-base font-bold text-black cursor-pointer'}
					onClick={() => router.asPath === '/' ? window.scroll({top: 0, behavior: 'smooth'}) : router.push('/')}>
					{'ySprout'}
				</div>
				<div className={'flex flex-row items-center space-x-6 md:hidden'}>
					<div
						onClick={() => set_openMenu(true)}
						className={'p-1 -m-1'}>
						<IconHamburger />
					</div>
				</div>
				<div className={'hidden flex-row justify-end items-center space-x-4 md:flex md:space-x-8'}>
					<Link href={'/'}>
						<p
							className={`${router.asPath === '/' ? 'text-green-2 border-green-2' : 'border-green-2/0 text-black'} cursor-pointer font-bold px-0.5 border-b-2`}>
							{'Home'}
						</p>
					</Link>
					<Link href={'/faq'}>
						<p
							className={`${router.asPath === '/faq' ? 'text-green-2 border-green-2' : 'border-green-2/0 text-black'} cursor-pointer font-bold px-0.5 border-b-2`}>
							{'Program FAQs'}
						</p>
					</Link>
					<Link href={'/apply'}>
						<p
							className={`${router.asPath === '/apply' ? 'text-green-2 border-green-2' : 'border-green-2/0 text-black'} cursor-pointer font-bold px-0.5 border-b-2`}>
							{'Apply'}
						</p>
					</Link>
				</div>
			</div>
			<ModalMenu open={openMenu} set_open={set_openMenu} />
		</header>
	);
}

function	AppWrapper(props) {
	const	{Component, pageProps, router} = props;
	const	WEBSITE_URI = process.env.WEBSITE_URI;

	useClientEffect(() => {
		const isMobile = ('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/));
		if (isMobile) {
			document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
		} else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) || (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform))) {
			document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
		}
	}, []);

	return (
		<>
			<Head>
				<title>{process.env.WEBSITE_NAME}</title>
				<meta httpEquiv={'X-UA-Compatible'} content={'IE=edge'} />
				<meta name={'viewport'} content={'width=device-width, initial-scale=1'} />
				<meta name={'description'} content={process.env.WEBSITE_NAME} />
				<meta name={'msapplication-TileColor'} content={'#62688F'} />
				<meta name={'theme-color'} content={'#ffffff'} />
				<meta charSet={'utf-8'} />

				<link rel={'shortcut icon'} type={'image/x-icon'} href={'/favicons/favicon.ico'} />
				<link rel={'apple-touch-icon'} sizes={'180x180'} href={'/favicons/apple-touch-icon.png'} />
				<link rel={'icon'} type={'image/png'} sizes={'32x32'} href={'/favicons/favicon-32x32.png'} />
				<link rel={'icon'} type={'image/png'} sizes={'16x16'} href={'/favicons/favicon-16x16.png'} />
				<link rel={'icon'} type={'image/png'} sizes={'192x192'} href={'/favicons/android-chrome-192x192.png'} />
				<link rel={'icon'} type={'image/png'} sizes={'512x512'} href={'/favicons/android-chrome-512x512.png'} />

				<meta name={'robots'} content={'index,nofollow'} />
				<meta name={'googlebot'} content={'index,nofollow'} />
				<meta charSet={'utf-8'} />
			</Head>
			<DefaultSeo
				title={process.env.WEBSITE_NAME}
				defaultTitle={process.env.WEBSITE_NAME}
				description={process.env.WEBSITE_DESCRIPTION}
				openGraph={{
					type: 'website',
					locale: 'en_US',
					url: WEBSITE_URI,
					site_name: process.env.WEBSITE_NAME,
					title: process.env.WEBSITE_NAME,
					description: process.env.WEBSITE_DESCRIPTION,
					images: [
						{
							url: `${WEBSITE_URI}og.jpeg`,
							width: 1200,
							height: 675,
							alt: 'Yearn',
						}
					]
				}}
				twitter={{
					handle: '@iearnfinance',
					site: '@iearnfinance',
					cardType: 'summary_large_image',
				}} />
			<main id={'app'} className={'flex relative flex-col px-4 mx-auto mb-0 w-full h-auto min-h-screen md:px-0 md:mb-6'}>
				<Toaster
					position={'bottom-right'}
					toastOptions={{className: 'text-sm', style: {borderRadius: 0}}} />
				<Header />
				<Component
					key={router.route}
					element={props.element}
					router={props.router}
					{...pageProps} />
			</main>
		</>
	);
}

function	MyApp(props) {
	const	{Component, pageProps} = props;
	
	return (
		<LocalizationContextApp router={props.router}>
			<AppWrapper
				Component={Component}
				pageProps={pageProps}
				element={props.element}
				router={props.router} />
		</LocalizationContextApp>
	);
}

export default MyApp;
