import	React				from	'react';
import	useScroll			from	'hooks/useScroll';
import	Image				from	'next/image';
import Link from 'next/link';

function	Footer({currentPage, scrollTo}) {
	return (
		<footer className={'fixed inset-x-0 bottom-0 z-10 px-4 w-full bg-background md:px-0'}>
			<div className={'flex flex-row justify-center py-6 mx-auto mt-auto space-x-4 w-full max-w-6xl md:justify-start md:py-10'}>
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
			</div>
		</footer>
	);
}

function	Slide1() {
	return (
		<div className={'flex flex-col mx-auto w-full max-w-6xl h-full'}>
			<section className={'items-start pt-20 h-screen md:pt-60 small:pt-32'}>
				<div className={'grid grid-cols-12 md:items-center'}>
					<div className={'col-span-12 pr-0 md:col-span-6 md:pr-10 small:col-span-7'}>
						<h1 className={'mt-10 text-3xl font-bold text-black whitespace-pre-wrap md:mt-0 md:text-4xl'}>{'Redefining the Future of Decentralized Tech'}</h1>
						<p className={'my-6 text-grey-2'}>{'Sprout DAO is a tech incubator-accelerator program launched by pioneers and innovators across the DeFi and web3 space.'}</p>
						<div className={'flex flex-row space-x-4'}>
							<Link href={'/apply'}>
								<button className={'w-55 button-filled button-large'}>{'Apply'}</button>
							</Link>
							<button className={'w-55 button-outline button-large'}>{'Explore'}</button>
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
		<div className={'flex flex-col mx-auto w-full max-w-6xl h-full'}>
			<section className={'items-start pt-20 h-screen md:pt-60 small:pt-32'}>
				<div className={'grid grid-cols-12 md:items-center'}>
					<div className={'hidden col-span-12 md:block md:col-span-6 small:col-span-5'}>
						<Image src={'/image_2.jpeg'} width={600} height={696} />
					</div>
					<div className={'col-span-12 pl-0 md:col-span-6 md:pl-10 small:col-span-7'}>
						<h2 className={'text-xl font-bold text-black whitespace-pre-wrap md:text-4xl'}>
							{'No five-month bootcamps. No cookie-cutter approaches. Just heads down building.'}
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
		<div className={'flex flex-col mx-auto w-full max-w-6xl h-full'}>
			<section className={'items-start pt-20 h-screen md:pt-60 small:pt-32'}>
				<section className={'flex flex-col'}>
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
			</section>
		</div>
	);
}

function	Slide4() {
	return (
		<div className={'flex flex-col mx-auto w-full max-w-6xl h-full'}>
			<section className={'items-start pt-20 h-screen md:pt-60 small:pt-32'}>
				<div className={'grid grid-cols-12'}>
					<div className={'col-span-12 pr-0 md:col-span-6 md:pr-10 small:col-span-7'}>
						<h2 className={'text-xl font-bold text-black whitespace-pre-wrap md:text-4xl'}>
							{'Mentors'}
						</h2>
						<p className={'my-6 text-sm text-grey-2 whitespace-pre-wrap md:text-base'}>
							{'Mentors are an essential part of SproutDAO. By providing guidance & sharing their wisdom, they create a real impact and lasting relationships.'}
						</p>
					</div>
					<div className={'col-span-12 md:col-span-6 small:col-span-5'}>
						<div className={'grid grid-cols-2 gap-6'}>
							<div>
								<Image src={'/mentors/a.jpeg'} width={800} height={533} />
								<h4 className={'pt-2 pb-1 text-lg text-black'}>{'Minor'}</h4>
								<p className={'text-sm text-grey-2'}>{'A modest father from Manchester is obsessed with light sabres. People often compare him to a supermodel. He always carries a newspaper.'}</p>
							</div>
							<div>
								<Image src={'/mentors/b.jpeg'} width={800} height={533} />
								<h4 className={'pt-2 pb-1 text-lg text-black'}>{'Bang-tug'}</h4>
								<p className={'text-sm text-grey-2'}>{'A shy professor who finds it hard to stay out of trouble. His top quality is that he is particularly cute. His purpose in life is to find a soulmate.'}</p>
							</div>
							<div>
								<Image src={'/mentors/c.jpeg'} width={800} height={533} />
								<h4 className={'pt-2 pb-1 text-lg text-black'}>{'Vodka Champagne'}</h4>
								<p className={'text-sm text-grey-2'}>{'A dishonest engineer from Brisbane is obsessed with chocolate. He has hair like a bird\'s nest. He always carries two phones.'}</p>
							</div>
							<div>
								<Image src={'/mentors/d.jpeg'} width={800} height={533} />
								<h4 className={'pt-2 pb-1 text-lg text-black'}>{'Skullator'}</h4>
								<p className={'text-sm text-grey-2'}>{'A 25-year-old engineer is traumatised by the loss of his right pinky when he was twelve. His biggest fear is being killed by a duck.'}</p>
							</div>

						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

function	Slide5() {
	return (
		<div className={'flex flex-col mx-auto w-full max-w-6xl h-full'}>
			<section className={'items-start pt-20 h-screen md:pt-60 small:pt-32'}>
				<div className={'grid grid-cols-12 md:items-center'}>
					<div className={'col-span-12 pr-0 md:col-span-6 md:pr-10 small:col-span-7'}>
						<h2 className={'text-xl font-bold text-black whitespace-pre-wrap md:text-4xl'}>
							{'How does the program work?'}
						</h2>
						<p className={'my-6 text-sm text-grey-2 whitespace-pre-wrap md:mb-10 md:text-base'}>
							{'We start off with a 4 week engineering sprint where you work 1x1 with our development team. We do not however have a set duration or start date. We are focused on delivering what startups need to position them for success across their next milestone. '}
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
		<div className={'flex flex-col mx-auto w-full max-w-6xl h-full'}>
			<section className={'items-start pt-20 h-screen md:pt-60 small:pt-32'}>
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
	return (
		<div className={'flex flex-col mx-auto w-full max-w-6xl h-full'}>
			<section className={'items-start pt-20 h-screen md:pt-60 small:pt-32'}>
				<div className={'grid grid-cols-12 md:items-center'}>
					<div className={'col-span-12 pr-0 md:col-span-6 md:pr-10 small:col-span-7'}>
						<form
							onSubmit={(e) => {
								e.preventDefault();
								const form = document.forms['apply-form'];
								const scriptURL = 'https://script.google.com/macros/s/AKfycbx3k-loOJfhKvbyn4ORH343B5xwbcAzLnnxQcTNffGyOunWonl0F16OwozhjisJE3kV/exec';
								fetch(scriptURL, {method: 'POST', body: new FormData(form)})
									.then(response => console.log('Success!', response))
									.catch(error => console.error('Error!', error.message));
							}}>
							<h3 className={'mb-4 text-lg font-bold text-black whitespace-pre-wrap md:text-2xl'}>
								{'Stay in the loop: Sign up with your email address to receive news and updates.'}
							</h3>
							<label className={'flex flex-col font-bold text-grey-2'}>
								{'Sign up'}
								<input
									name={'email'}
									required
									type={'email'}
									className={'mt-2 w-full input'}
									placeholder={'Your e-mail'} />
							</label>
							<button className={'mt-4 w-full md:mt-4 md:w-55 button-filled button-large'}>{'Submit'}</button>
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
						<Slide2 moveSectionDown={() => scrollTo(2)} />
					</div>
				</section>

				<section className={'flex w-full h-screen section'}>
					<div className={'w-full h-full'}>
						<Slide3 moveSectionDown={() => scrollTo(3)} />
					</div>
				</section>

				<section className={'flex w-full h-screen section'}>
					<div className={'w-full h-full'}>
						<Slide4 moveSectionDown={() => scrollTo(4)} />
					</div>
				</section>

				<section className={'flex w-full h-screen section'}>
					<div className={'w-full h-full'}>
						<Slide5 moveSectionDown={() => scrollTo(5)} />
					</div>
				</section>
				<section className={'flex w-full h-screen section'}>
					<div className={'w-full h-full'}>
						<Slide6 moveSectionDown={() => scrollTo(6)} />
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
