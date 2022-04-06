import	React				from	'react';
import	Image				from	'next/image';
import	Link				from	'next/link';
import	useScroll			from	'hooks/useScroll';
import	toast				from	'react-hot-toast';
import	IconChevron			from	'components/icons/IconChevron';

function	Footer({currentPage, scrollTo}) {
	return (
		<footer className={'fixed inset-x-0 top-0 z-50 px-4 mx-auto w-fit md:px-0'}>
			<div className={'hidden flex-row justify-center items-center mx-auto space-x-4 md:flex md:h-[74px]'}>
				<div
					onClick={() => scrollTo(0)}
					className={`cursor-pointer transition-color w-2 h-2 ${currentPage <= 1 ? 'bg-green-2' : 'bg-grey-3'}`} />
				<div
					onClick={() => scrollTo(1)}
					className={`cursor-pointer transition-color w-2 h-2 ${currentPage === 2 ? 'bg-green-2' : 'bg-grey-3'}`} />
				<div
					onClick={() => scrollTo(2)}
					className={`cursor-pointer transition-color w-2 h-2 ${currentPage === 3 ? 'bg-green-2' : 'bg-grey-3'}`} />
				<div
					onClick={() => scrollTo(3)}
					className={`cursor-pointer transition-color w-2 h-2 ${currentPage === 4 ? 'bg-green-2' : 'bg-grey-3'}`} />
				<div
					onClick={() => scrollTo(4)}
					className={`cursor-pointer transition-color w-2 h-2 ${currentPage === 5 ? 'bg-green-2' : 'bg-grey-3'}`} />
				<div
					onClick={() => scrollTo(5)}
					className={`cursor-pointer transition-color w-2 h-2 ${currentPage === 6 ? 'bg-green-2' : 'bg-grey-3'}`} />
				<div
					onClick={() => scrollTo(6)}
					className={`cursor-pointer transition-color w-2 h-2 ${currentPage === 7 ? 'bg-green-2' : 'bg-grey-3'}`} />
			</div>
		</footer>
	);
}

function	Slide1() {
	return (
		<div className={'flex flex-col mx-auto w-full h-full md:max-w-3xl lg:max-w-5xl xl:max-w-6xl'}>
			<section className={'items-center pt-0 -mt-4 h-screen md:mt-0'}>
				<div className={'grid grid-cols-12 h-full md:items-center'}>
					<div className={'flex relative col-span-12 row-span-1 -mx-4 md:hidden md:col-span-6 small:col-span-5'}>
						<Image src={'/image_1.jpeg'} width={525} height={560} loading={'eager'} />
					</div>
					<div className={'col-span-12 row-span-1 pr-0 md:col-span-6 md:pr-10 small:col-span-7'}>
						<h1 className={'mt-4 text-xl font-bold text-black whitespace-pre-wrap md:mt-0 md:text-4xl'}>{'Growing the Future of Decentralized Tech'}</h1>
						<p className={'my-4 text-grey-2 md:my-6'}>{'Sprout DAO is a tech incubator-accelerator program launched by pioneers and innovators across the DeFi and web3 space.'}</p>
						<div className={'flex flex-col space-y-4 space-x-0 md:flex-row md:space-y-0 md:space-x-4'}>
							<Link href={'/apply'}>
								<button className={'w-full md:w-55 button-filled button-large'}>{'Apply'}</button>
							</Link>
							<button className={'w-full md:w-55 button-outline button-large'}>{'Explore'}</button>
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

function	Slide2() {
	return (
		<div className={'flex flex-col mx-auto w-full h-full md:max-w-3xl lg:max-w-5xl xl:max-w-6xl'}>
			<section className={'flex items-center h-screen'}>
				<div className={'grid grid-cols-12 md:items-center'}>
					<div className={'hidden col-span-12 md:block md:col-span-6 small:col-span-5'}>
						<Image src={'/image_2.jpeg'} width={600} height={696} />
					</div>
					<div className={'col-span-12 pl-0 md:col-span-6 md:pl-10 small:col-span-7'}>
						<h2 className={'text-xl font-bold text-black whitespace-pre-wrap md:text-4xl'}>
							{'No five-month bootcamps. No cookie-cutter approaches. Just heads down building. Just cultivation.'}
						</h2>
						<p className={'my-6 text-sm text-grey-2 whitespace-pre-wrap md:text-base'}>
							{'We are builders helping the next generation of startups in blockchain accelerate and grow.\n\nBuilt and run by leading engineers in the space, we understand the complexities of putting your ideas into action and launching them.\n\nWe provide the technical mentorship, resources, network and environment entrepreneurs and builders need.'}
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}

function	Slide3() {
	return (
		<div className={'flex flex-col mx-auto w-full h-full md:max-w-3xl lg:max-w-5xl xl:max-w-6xl'}>
			<section className={'flex flex-col justify-center h-screen'}>
				<h2 className={'mb-6 text-xl font-bold text-black whitespace-pre-wrap md:text-4xl'}>
					{'What we offer'}
				</h2>
				<div className={'flex overflow-x-scroll grid-cols-4 gap-6 items-center md:grid md:w-full inline-cards scrollbar-none'}>
					<div className={'flex flex-col p-6 h-[456px] bg-white'}>
						<h3 className={'mb-6 text-lg font-bold text-black md:text-2xl'}>{'Accepted startups'}</h3>
						<p className={'pb-6 text-sm text-grey-2 md:text-base'}>{'Receive one-on-one tech mentorship, growth/marketing consulting, capital, and other support tailored to each startup.'}</p>
					</div>

					<div className={'flex flex-col p-6 h-[456px] bg-white'}>
						<h3 className={'mb-6 text-lg font-bold text-black md:text-2xl'}>{'Tech Mentorship'}</h3>
						<p className={'pb-6 text-sm text-grey-2 md:text-base'}>{'Get matched with the best mentors who provide you with hands-on support all while providing coveted insights into the DeFi and blockchain space. You will be paired with engineering coaches who will support you as you build.'}</p>
					</div>

					<div className={'flex flex-col p-6 h-[456px] bg-white'}>
						<h3 className={'mb-6 text-lg font-bold text-black md:text-2xl'}>{'Growth'}</h3>
						<p className={'pb-6 text-sm text-grey-2 md:text-base'}>{'Develop strategies to identify product market-fit, implement the right governance and tokenomics model, develop scalable distribution channels, grow your team, and raise venture capital from investors who believe in your vision.'}</p>
					</div>

					<div className={'flex flex-col p-6 h-[456px] bg-white'}>
						<h3 className={'mb-6 text-lg font-bold text-black md:text-2xl'}>{'Community'}</h3>
						<p className={'text-sm text-grey-2 md:text-base'}>{'By participating in the program, you will have life-long access to a network of the space’s top  engineers, mentors, entrepreneurs and alumni projects who are contributing to cutting-edge development in the sector.'}</p>
					</div>
				</div>
			</section>
		</div>
	);
}

function	Slide4() {
	const	partnerSlide = React.useRef(0);
	const	mentorSlide = React.useRef(0);
	
	function	onPartnerSlidePrev() {
		const	index = partnerSlide.current > 0 ? partnerSlide.current - 1 : 0;
		partnerSlide.current = index;
		document.getElementById('partners-slider').scrollLeft = index * (129 + 24);
	}
	function	onPartnerSlideNext() {
		const	children = (document.getElementById('partners-slider').children.length);
		const	index = partnerSlide.current < children ? partnerSlide.current + 1 : 0;
		partnerSlide.current = index;
		document.getElementById('partners-slider').scrollLeft = index * (129 + 24);
	}

	function	onMentorSlidePrev() {
		const	index = mentorSlide.current > 0 ? mentorSlide.current - 1 : 0;
		mentorSlide.current = index;
		document.getElementById('mentors-slider').scrollLeft = index * (282 + 24);
	}
	function	onMentorSlideNext() {
		const	children = (document.getElementById('mentors-slider').children.length);
		const	index = mentorSlide.current < children ? mentorSlide.current + 1 : 0;
		mentorSlide.current = index;
		document.getElementById('mentors-slider').scrollLeft = index * (282 + 24);
	}

	return (
		<div className={'flex flex-col mx-auto w-full h-full md:max-w-3xl lg:max-w-5xl xl:max-w-6xl'}>
			<section className={'flex flex-col justify-center h-screen md:max-w-3xl lg:max-w-5xl xl:max-w-6xl'}>
				<div className={'pr-0 mb-8 md:mb-12'}>
					<h2 className={'mb-4 text-xl font-bold text-black whitespace-pre-wrap md:mb-8 md:text-4xl'}>
						{'Partners'}
					</h2>
					<div className={'flex relative items-center md:w-full'}>
						<div id={'partners-slider'} className={'grid overflow-scroll grid-flow-col gap-6 w-full scroll-smooth scrollbar-none horizontal-snap'}>
							<div className={'flex flex-row justify-center items-center w-[129px] h-[129px] bg-[#262248]'}>
								<Image src={'/partners/partner1.png'} width={104} height={104} />
							</div>
							<div className={'flex flex-row justify-center items-center w-[129px] h-[129px] bg-[#0A0F1F]'}>
								<Image src={'/partners/partner2.png'} width={104} height={104} />
							</div>
							<div className={'flex flex-row justify-center items-center w-[129px] h-[129px] bg-[#FFFFFF]'}>
								<Image src={'/partners/partner3.png'} width={104} height={104} />
							</div>
							<div className={'flex flex-row justify-center items-center w-[129px] h-[129px] bg-[#1969FF]'}>
								<Image src={'/partners/partner4.png'} width={104} height={104} />
							</div>
							<div className={'flex flex-row justify-center items-center  w-[129px] h-[129px] bg-white'}>
								<Image src={'/partners/partner5.png'} width={104} height={104} />
							</div>
							<div className={'flex flex-row justify-center items-center  w-[129px] h-[129px] bg-white'}>
								<Image src={'/partners/partner5.png'} width={104} height={104} />
							</div>
							<div className={'flex flex-row justify-center items-center  w-[129px] h-[129px] bg-white'}>
								<Image src={'/partners/partner5.png'} width={104} height={104} />
							</div>
							<div className={'flex flex-row justify-center items-center  w-[129px] h-[129px] bg-white'}>
								<Image src={'/partners/partner5.png'} width={104} height={104} />
							</div>
							<div className={'flex flex-row justify-center items-center  w-[129px] h-[129px] bg-white'}>
								<Image src={'/partners/partner5.png'} width={104} height={104} />
							</div>
							<div className={'flex flex-row justify-center items-center w-[129px] h-[129px] bg-[#262248]'}>
								<Image src={'/partners/partner1.png'} width={104} height={104} />
							</div>
							<div className={'flex flex-row justify-center items-center w-[129px] h-[129px] bg-[#0A0F1F]'}>
								<Image src={'/partners/partner2.png'} width={104} height={104} />
							</div>
							<div className={'flex flex-row justify-center items-center w-[129px] h-[129px] bg-[#FFFFFF]'}>
								<Image src={'/partners/partner3.png'} width={104} height={104} />
							</div>
							<div className={'flex flex-row justify-center items-center w-[129px] h-[129px] bg-[#1969FF]'}>
								<Image src={'/partners/partner4.png'} width={104} height={104} />
							</div>
						</div>
						<div className={'hidden absolute -left-4 cursor-pointer md:block md:-left-8'} onClick={onPartnerSlidePrev}>
							<IconChevron className={'text-green-2 rotate-180'} />
						</div>
						<div className={'hidden absolute -right-4 cursor-pointer md:block md:-right-8'} onClick={onPartnerSlideNext}>
							<IconChevron className={'text-green-2'} />
						</div>
					</div>
				</div>

				<div className={'pr-0'}>
					<h2 className={'mb-2 text-xl font-bold text-black whitespace-pre-wrap md:mb-4 md:text-4xl'}>
						{'Mentors'}
					</h2>
					<p className={'mb-4 w-full text-sm text-grey-2 md:w-2/3 md:text-base'}>
						{'Mentors are an essential part of SproutDAO. By providing guidance & sharing their wisdom, they create a real impact and lasting relationships.'}
					</p>
					<div className={'flex relative items-center w-full'}>
						<div id={'mentors-slider'} className={'grid overflow-scroll grid-flow-col gap-6 w-full scroll-smooth scrollbar-none horizontal-snap'}>
							<div className={'flex flex-col w-40 h-40 md:w-71 md:h-71 small:w-48 small:h-48'}>
								<Image src={'/mentors/banteg.png'} width={282} height={218} />
								<div className={'flex items-center p-2 w-full text-base font-bold text-grey-1 bg-white md:p-4 md:text-xl small:p-3 small:text-base'}>{'@banteg'}</div>
							</div>
							<div className={'flex flex-col w-40 h-40 md:w-71 md:h-71 small:w-48 small:h-48'}>
								<Image src={'/mentors/tracheopteryx.png'} width={282} height={218} />
								<div className={'flex items-center p-2 w-full text-base font-bold text-grey-1 bg-white md:p-4 md:text-xl small:p-3 small:text-base'}>{'@tracheopteryx'}</div>
							</div>
							<div className={'flex flex-col w-40 h-40 md:w-71 md:h-71 small:w-48 small:h-48'}>
								<Image src={'/mentors/saltyfacu.png'} width={282} height={218} />
								<div className={'flex items-center p-2 w-full text-base font-bold text-grey-1 bg-white md:p-4 md:text-xl small:p-3 small:text-base'}>{'@saltyfacu'}</div>
							</div>
							<div className={'flex flex-col w-40 h-40 md:w-71 md:h-71 small:w-48 small:h-48'}>
								<Image src={'/mentors/shadeundertree.png'} width={282} height={218} />
								<div className={'flex items-center p-2 w-full text-base font-bold text-grey-1 bg-white md:p-4 md:text-xl small:p-3 small:text-base'}>{'@shadeundertree'}</div>
							</div>
							<div className={'flex flex-col w-40 h-40 md:w-71 md:h-71 small:w-48 small:h-48'}>
								<Image src={'/mentors/daryllau.png'} width={282} height={218} />
								<div className={'flex items-center p-2 w-full text-base font-bold text-grey-1 bg-white md:p-4 md:text-xl small:p-3 small:text-base'}>{'@daryllau'}</div>
							</div>
							<div className={'flex flex-col w-40 h-40 md:w-71 md:h-71 small:w-48 small:h-48'}>
								<Image src={'/mentors/skeletor_spaceman.png'} width={282} height={218} />
								<div className={'flex items-center p-2 w-full text-base font-bold text-grey-1 bg-white md:p-4 md:text-xl small:p-3 small:text-base'}>{'@skeletor_spaceman'}</div>
							</div>
							<div className={'flex flex-col w-40 h-40 md:w-71 md:h-71 small:w-48 small:h-48'}>
								<Image src={'/mentors/x48114.png'} width={282} height={218} />
								<div className={'flex items-center p-2 w-full text-base font-bold text-grey-1 bg-white md:p-4 md:text-xl small:p-3 small:text-base'}>{'@x48114'}</div>
							</div>
							<div className={'flex flex-col w-40 h-40 md:w-71 md:h-71 small:w-48 small:h-48'}>
								<Image src={'/mentors/flashfish.png'} width={282} height={218} />
								<div className={'flex items-center p-2 w-full text-base font-bold text-grey-1 bg-white md:p-4 md:text-xl small:p-3 small:text-base'}>{'@flashfish'}</div>
							</div>
							<div className={'flex flex-col w-40 h-40 md:w-71 md:h-71 small:w-48 small:h-48'}>
								<Image src={'/mentors/farrahmay.png'} width={282} height={218} />
								<div className={'flex items-center p-2 w-full text-base font-bold text-grey-1 bg-white md:p-4 md:text-xl small:p-3 small:text-base'}>{'@farrahmay'}</div>
							</div>
						</div>
						<div className={'hidden absolute -left-8 cursor-pointer md:block'} onClick={onMentorSlidePrev}>
							<IconChevron className={'text-green-2 rotate-180'} />
						</div>
						<div className={'hidden absolute -right-8 cursor-pointer md:block'} onClick={onMentorSlideNext}>
							<IconChevron className={'text-green-2'} />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

function	Slide5() {
	return (
		<div className={'flex flex-col mx-auto w-full h-full md:max-w-3xl lg:max-w-5xl xl:max-w-6xl'}>
			<section className={'flex items-center h-screen'}>
				<div className={'grid grid-cols-12 md:items-center'}>
					<div className={'col-span-12 pr-0 md:col-span-6 md:pr-10 small:col-span-7'}>
						<h2 className={'text-xl font-bold text-black whitespace-pre-wrap md:text-4xl'}>
							{'How does the program work?'}
						</h2>
						<p className={'my-6 text-sm text-grey-2 whitespace-pre-wrap md:mb-10 md:text-base'}>
							{'We start off with a 4 week engineering sprint where you work 1x1 with our development team. We do not however have a set duration or start date. We are focused on delivering what startups need to position them for success across their next milestone.'}
						</p>
						<div>
							<h3 className={'text-lg font-bold text-black md:text-2xl'}>{'The application process:'}</h3>
							<p className={'mt-4 text-sm text-grey-2 md:text-base'}>{'We welcome innovative, high-potential projects that can benefit from our resources and extended network. As a rule, we strive to foster a collaborative space and build a highly engaged applicant community that represents a rich variety of sectors like DeFi, NFTs, Metaverse, and Gaming among others.'}</p>
						</div>
					</div>
					<div className={'hidden col-span-12 md:block md:col-span-6 small:col-span-5'}>
						<Image src={'/image_3.jpeg'} width={600} height={696} />
					</div>
				</div>
			</section>
		</div>
	);
}

function	Slide6() {
	return (
		<div className={'flex flex-col mx-auto w-full h-full md:max-w-3xl lg:max-w-5xl xl:max-w-6xl'}>
			<section className={'flex items-center h-screen'}>
				<div className={'grid grid-cols-12 md:items-center'}>
					<div className={'hidden col-span-12 md:block md:col-span-6 small:col-span-5'}>
						<Image src={'/image_4.jpeg'} width={600} height={696} loading={'eager'}/>
					</div>
					<div className={'col-span-12 pl-0 md:col-span-6 md:pl-10 small:col-span-7'}>
						<h3 className={'text-lg font-bold text-black whitespace-pre-wrap md:text-2xl'}>
							{'Applicants interested in our programs should have:'}
						</h3>
						<p className={'hidden pl-4 mt-2 text-sm text-grey-2 whitespace-pre-wrap md:block md:text-base'}>
							{'A project dedicated to solving a compelling problem\n\nA founder who can be dedicated to the program\n\nA POC, MVP, or compelling idea'}
						</p>
						<p className={'block pl-4 mt-2 text-sm text-grey-2 whitespace-pre-wrap md:hidden md:text-base'}>
							{'A project dedicated to solving a compelling problem\nA founder who can be dedicated to the program\nA POC, MVP, or compelling idea'}
						</p>
						<p className={'mt-8 text-sm text-grey-2 md:text-base'}>
							<b className={'text-black'}>{'Step I.'}</b>{' Startups apply online using the SproutDAO Application Form. Applications are available all year. If accepted into the program, you and your team will spend 1-2 months building your product and scaling your idea.'}
						</p>
						<p className={'mt-8 text-sm text-grey-2 md:text-base'}>
							<b className={'text-black'}>{'Step II.'}</b>{' Applicants that meet the eligibility criteria will be contacted by a member of the Programs team to schedule a follow up meeting.'}
						</p>
						<p className={'mt-8 text-sm text-grey-2 md:text-base'}>
							<b className={'text-black'}>{'Step III.'}</b>{' Selected startups will be invited to pitch to the Programs team.'}
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}

function	Slide7() {
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
		<div className={'flex flex-col mx-auto w-full h-full md:max-w-3xl lg:max-w-5xl xl:max-w-6xl'}>
			<section className={'flex items-center h-screen'}>
				<div className={'grid grid-cols-12 md:items-center'}>
					<div className={'col-span-12 pr-0 md:col-span-6 md:pr-10 small:col-span-7'}>
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
							}}>
							<h3 className={'mb-4 text-lg font-bold text-black whitespace-pre-wrap md:text-2xl'}>
								{'Stay in the loop: Sign up with your email address to receive news and updates.'}
							</h3>
							<label className={'flex flex-col font-bold text-grey-2'}>
								{'Sign up'}
								<input
									required
									name={'email'}
									type={'email'}
									className={'mt-2 w-full input'}
									placeholder={'Your e-mail'} />
							</label>
							<button className={'flex justify-center items-center mt-4 w-full h-10 text-center md:mt-4 md:w-55 button-filled button-large'}>
								{handleSubmit()}
							</button>
						</form>

						<div className={'mt-12'}>
							<h3 className={'mb-4 text-lg font-bold text-black whitespace-pre-wrap md:text-2xl'}>
								{'Other questions, comments, or concerns?'}
							</h3>
							<p className={'text-sm text-grey-2 md:text-base'}>{'Email '}<a href={'mailto:people@yearn.finance'} className={'text-green-2 link'}>{'people@yearn.finance'}</a>{' and we will get back to you shortly.'}</p>
						</div>
					</div>
					<div className={'hidden col-span-12 md:block md:col-span-6 small:col-span-5'}>
						<Image src={'/image_5.jpeg'} width={600} height={696} loading={'eager'}/>
					</div>
				</div>
			</section>
		</div>
	);
}

function Wrapper() {
	const	[slideSize, set_slideSize] = React.useState(0);
	const	[currentPage, set_currentPage] = React.useState(0);

	const	ref = React.useRef();
	const	slideRef = React.useRef();
	const	{y} = useScroll();

	React.useEffect(() => {
		const	sectionHeight = slideRef?.current?.getBoundingClientRect()?.height || 0;
		const	positionFromTop = ref?.current?.getBoundingClientRect()?.top || 0;
		set_currentPage(positionFromTop > 0 ? 0 : Math.round((Math.abs(positionFromTop / sectionHeight) + 1)));
		set_slideSize(sectionHeight);
	}, [y, slideRef, ref]);

	function	scrollTo(page) {
		window.scroll({top: (slideSize * page), behavior: 'smooth'});
	}

	return (
		<>
			<div ref={ref} className={'section-wrapper'}>
				<section ref={slideRef} className={'flex w-full h-screen section'}>
					<div className={'w-full h-full'}>
						<Slide1 moveSectionDown={() => scrollTo(1)} />
					</div>
				</section>

				<section className={'flex w-full h-screen section'}>
					<div className={'w-full h-full'}>
						<Slide2 />
					</div>
				</section>

				<section className={'flex w-full h-screen section'}>
					<div className={'w-full h-full'}>
						<Slide3 />
					</div>
				</section>

				<section className={'flex w-full h-screen section'}>
					<div className={'w-full h-full'}>
						<Slide4 />
					</div>
				</section>

				<section className={'flex w-full h-screen section'}>
					<div className={'w-full h-full'}>
						<Slide5 />
					</div>
				</section>
				<section className={'flex w-full h-screen section'}>
					<div className={'w-full h-full'}>
						<Slide6 />
					</div>
				</section>
				<section className={'flex w-full h-screen section'}>
					<div className={'w-full h-full'}>
						<Slide7 />
					</div>
				</section>
			</div>
			<Footer currentPage={currentPage} scrollTo={scrollTo} />
		</>
	);
}

export default Wrapper;
