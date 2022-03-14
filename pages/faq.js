import	React, {useState}				from	'react';
import	Footer		from	'components/Footer';

function	FAQElement({label, children}) {
	const	[isExpandedAnimation, set_isExpandedAnimation] = useState(false);

	function	onExpand() {
		set_isExpandedAnimation(!isExpandedAnimation);
	}

	return (
		<div className={'w-full bg-white'}>
			<div onClick={onExpand} className={'flex flex-row justify-between items-center p-4 text-base font-bold text-black whitespace-pre-wrap cursor-pointer md:p-6 md:text-xl'}>
				{label}
				<svg
					width={'24'}
					height={'24'}
					className={`text-green-2 transform transition-transform ${isExpandedAnimation ? '' : '-rotate-90'} min-w-[24px]`}
					viewBox={'0 0 24 24'}
					fill={'none'}
					xmlns={'http://www.w3.org/2000/svg'}>
					<path fillRule={'evenodd'} clipRule={'evenodd'} d={'M17.7439 9.18558C18.0556 9.45834 18.0872 9.93216 17.8144 10.2439L12.5644 16.2439C12.422 16.4066 12.2163 16.5 12 16.5C11.7837 16.5 11.578 16.4066 11.4356 16.2439L6.18558 10.2439C5.91282 9.93216 5.9444 9.45834 6.25613 9.18558C6.56786 8.91282 7.04168 8.9444 7.31444 9.25613L12 14.6111L16.6856 9.25613C16.9583 8.9444 17.4321 8.91282 17.7439 9.18558Z'} fill={'currentcolor'}/>
				</svg>
			</div>
			<div className={`w-full transition-max-height duration-500 overflow-hidden ${isExpandedAnimation ? 'max-h-96' : 'max-h-0'}`}>
				{children}
			</div>
		</div>
	);
}

function	FAQ() {
	return (
		<div className={'space-y-2 w-full'}>
			<FAQElement label={'What is an incubator-accelerator?'}>
				<div className={'px-4 pb-4 w-full text-sm text-grey-1 whitespace-pre-line md:px-6 md:pb-6 md:w-2/3 md:text-base'}>
					{'We offer incubation and accelerator programs. Our accelerator program "accelerates" the growth of an existing project, while our incubator program incubates disruptive ideas and helps bring them to reality. Both of our programs offer an environment of collaboration and mentorship. We provide access to a multitude of resources and mentorship from seasoned builders.'}
				</div>
			</FAQElement>

			<FAQElement label={'What projects should apply to this program?'}>
				<div className={'px-4 pb-4 w-full text-sm text-grey-1 whitespace-pre-line md:px-6 md:pb-6 md:w-2/3 md:text-base'}>
					{'We fund all types of startups, working in all verticals, using any type of business model. Do keep in mind, however, that our focus is on early stage start-ups rather than funded projects. We encourage projects interested in building on Yearn Finance to apply.'}
				</div>
			</FAQElement>

			<FAQElement label={'What investments does SproutDAO make in accepted start-ups?'}>
				<div className={'px-4 pb-4 w-full text-sm text-grey-1 whitespace-pre-line md:px-6 md:pb-6 md:w-2/3 md:text-base'}>
					{'SproutDAO provides portfolio start-ups with access to financial, human, and intellectual capital to fuel the success of their project. We provide accepted start-ups with a seed grant between 100k-200k based on their needs and current stage of growth and in return Sprout DAO will receive 6% of the Token Reserve. We provide the seed funding to get you going, but you may well need more funding to really make it. Near the end of our program, we’ll organize an investor sprint where you will meet with angel investors and venture capitalists. We’ll coach you so you’re as effective as possible, and do everything we can to help get you follow on funding.'}
				</div>
			</FAQElement>

			<FAQElement label={'What benefits do I receive from the incubator-accelerator program?'}>
				<div className={'px-4 pb-4 w-full text-sm text-grey-1 whitespace-pre-line md:px-6 md:pb-6 md:w-2/3 md:text-base'}>
					{'Acceleration or incubation over a defined period based on your needs. Our primary focus is technical consulting however we also offer 1x1 marketing, product-market fit, tokenomics, governance, and growth consulting.'}
					<ul>
						<li>{'Access to capital and funding.'}</li>
						<li>{'Lifetime access to the Sprout DAO network of entrepreneurs, including leading industry partners, alumni start-ups, and mentors.'}</li>
					</ul>
				</div>
			</FAQElement>

			<FAQElement label={'How does the program work?'}>
				<div className={'px-4 pb-4 w-full text-sm text-grey-1 whitespace-pre-line md:px-6 md:pb-6 md:w-2/3 md:text-base'}>
					{'This is a virtual program. We build the program around each start-ups needs, however we begin with a 4 week development sprint focused on engineering fundamentals including security and product-market fit.'}
				</div>
			</FAQElement>

			<FAQElement label={'What does a typical day look like during the program?'}>
				<div className={'px-4 pb-4 w-full text-sm text-grey-1 whitespace-pre-line md:px-6 md:pb-6 md:w-2/3 md:text-base'}>
					{'You’ll be hard at work on your product. About two or three nights a week, we organize educational sessions with our mentors. We don’t tell you what to do or when, but we create an environment that is conducive to helping your startup every day. And we’ll make sure you have lots of experienced mentors around to help you.'}
				</div>
			</FAQElement>

			<FAQElement label={'How do you choose what projects to accept?'}>
				<div className={'px-4 pb-4 w-full text-sm text-grey-1 whitespace-pre-line md:px-6 md:pb-6 md:w-2/3 md:text-base'}>
					{'We look at idea, team, market—in that order. We choose great founders who are proposing products that solve real problems or create meaningful innovations. The best things you can do to strengthen your application are:'}
					<ul>
						<li>{'Make progress on your prototype or idea and reference it in the application;'}</li>
						<li>{'Demonstrate early traction or provide data points to validate your core assumptions.'}</li>
					</ul>
				</div>
			</FAQElement>
		</div>
	);
}


function Wrapper() {
	return (
		<>
			<section className={'flex flex-col mx-auto mt-20 w-full max-w-6xl h-full md:mt-40'}>
				<FAQ />
			</section>
			<Footer />
		</>
	);
}

export default Wrapper;