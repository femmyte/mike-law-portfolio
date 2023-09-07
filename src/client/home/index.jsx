import React from 'react';
import Practice from '../../components/common/Practice';
import Counter from '../../components/common/Counter';
import Animation from '../../components/common/Animation';
import { Link } from 'react-router-dom';
import Nav from '../../components/common/Nav';
import Footer from '../../components/common/Footer';
// import DataContext from '@/useContext';
import Testimony from '../../components/common/Testimony';
const page = () => {
	// const data = useContext(DataContext)
	return (
		<>
			<Nav />
			<div className='border-b border-black md:mx-[70px] hidden md:block'></div>
			<main>
				<section className='flex flex-col md:flex-row items-center pl-[20px] md:pl-[70px] h-[100vh]  overflow-y-hidden relative py-5 gap-x-[20px]'>
					<div className='basis-3/5'>
						<h1 className='font-[700] text-black text-[50px] md:text-[102px] leading-[50px] md:leading-[102px]'>
							Law with a special touch.
						</h1>
						<p className='text-black font-[400] text-[14px] md:text-[16px] leading-[24px] mt-[20px] md:mt-[32px]'>
							With over 40 years of legal experience, Chief Mike
							Agbedor Abu Ozekhome is a renowned Constitutional
							Lawyer, Human Rights Activist, and Senior Advocate
							of Nigeria (SAN).
						</p>
						<p className='text-black font-[400] text-[14px] md:text-[16px] leading-[24px] mt-[20px]'>
							Chief Mike Agbedor Abu Ozekhome is a Constitutional
							Lawyer, Human Rights Activist, Pro-Democracy
							Campaigner, Senior Advocate of Nigeria (SAN),
							Officer of the Federal Republic (OFR), Bencher,
							Senior Advocate of the Masses (SAM), Voice of the
							People (VOP), Senior Advocate of Nigerian Students
							(SANS), Notary Public of Nigeria, Patriot,
							Pan-Nigerian, Pan-Africanist, Author, Researcher,
							Scholar, Multi-Columnist, Philosopher, Thinker,
							Motivational Speaker, Social Critic, Public Affairs
							Analyst, Pro-masses Advocate and Knight of the Order
							of St. Mulumba (KSM). Ozekhome is a Chartered
							Arbitrator, Conciliator, Negotiator and Mediator.
						</p>
					</div>
					<div className='basis-2/5 ozekhome-bg bg-cover  bg-center h-full'></div>
				</section>
				<Animation style='zoom-in-left' placement='center-center'>
					<section className='bg-[#F3F3F3] py-[64px] md:py-[84px] px-[21px] md:px-[70px]'>
						<Practice
							title='BANKING, CORPORATE FINANCE AND INSURANCE'
							description='Banking law advisories | Loan documentation | Perfection of securities | Asset-based finance | Off-balance sheet and lease transactions | Advisories on project financing | Debt instruments rescheduling | Advice on insurance law and practice.'
						/>
						<Practice
							title='CORPORATE & COMMERCIAL'
							description='Partnership |S ole proprietorship | Asset purchase |Leases Agency | Distributorship and other contracts related to the operation of business in Nigeria; | Business Law and Stock Exchange requirements | Establishing and maintaining subsidiaries and affiliate of foreign companies in Nigeria | Corporate Secretarial Services | Public company floatation and other capital raising | Filing of annual returns/reports, organization and management of annual general meetings etc.'
						/>
						<Practice
							title='INSOLVENCY & DEBT RECOVERY'
							description='Contentious and non-contentious liquidations & company winding-up | Receivership |    Schemes of Arrangement | ReconstructionsAsset-based finance | Restructuring | Acquisitions, mergers & takeovers | Recovery of debt with or                     without legal proceedings | Enforcement of guarantee and bonds'
						/>
						<Practice
							title='SPECIAL PROJECTS & EMERGENCY ISSUES'
							description='Legal advisory in relation to emerging trends in the Nigerian economy such as: the privatization and commercialization policies of the Nigerian Government | Regulations within the Telecommunications Industry, the Pensions reforms, etc; | Security and intelligence matters in all its ramifications.
'
						/>
						<Practice
							title='TAXATION'
							description='Legal services relating to State and Federal taxes | Planning and implementation decisions having tax effect or benefit compliance etc; | Representation of clients in all types of tax matters in court or before other tribunals.'
						/>
						<Practice
							title='REAL PROPERTY'
							description='Negotiations and preparation of deed of agreements | Leases, assignments and mortgages of interest in properties both locally and abroad. |Perfection of legal documents and execution of searches at the Lands Registries. | Acting as property consultants and Estate Agents for the purpose of purchasing, selling, reconstructing, etc of properties.'
						/>
						<Practice
							title='OIL, GAS & ENVIRONMENTAL LAW'
							description='Advising on compliance with Nigerian Petroleum laws and regulations, preparation and regulation of oil Mining leases, generally interfacing with Department of petroleum Resources, NNPC and its offshoots, etc; | The law in relation to prospecting, production, distribution and marketing of petroleum and gas; environmental protection law, investment in petroleum industry, PSC, JVC, Farm out and concessionary rights, support services agreements, etc.
'
						/>
						<Practice
							title='ENERGY, ELECTRICITY LAWS & REGULATIONS'
							description='Advisory and consultancy services in the field of energy | Regulatory provisions, investment opportunities, unbundling privatization, licenses and permits from regulatory bodies, etc.'
						/>
						<Practice
							title='FOREIGN INVESTMENT'
							description='Advising on foreign investment laws | Implementation and regulation in Nigeria | Processing of business and residence permits as well as expatriate quotas and other government permits and licenses | Immigration and Customs matters, etc.
'
						/>
						<Practice
							title='BROADCASTING & TELECOMMUNICATIONS'
							description='Rendering consultancy services to broadcasting and telecommunications companies in a privatized, diversified and competitive environment. | Preparation of interconnectivity, and Network agreements. Procurement of licenses and permits from regulatory bodies, e.g. NBC, NCC, etc
'
						/>
						<Practice
							title='AVIATION, MARITIME & PRACTICE'
							description='High level and comprehensive legal consultancy services to aircraft leasing companies, operating leasors and airlines. | Experience dealing with export credit and other government agencies, manufacturers and many other companies involved in the aviation sector. | Providing advice on areas involving aircraft finance and leasing, corporate and commercial aspects relevant to the aviation market. | We also provide consultancy services dealing with Maritime on areas involving shipping law, arbitration, insurance and reinsurance, contracts, charter party, lay time, demurrage, conflict of laws, carriage by sea, sale of goods and much more.'
						/>
						<Practice
							title='ICT CONSULTANT'
							description='Consultancy services on ICT including: e-commerce, data protection, IT contract, business technology, copyright and internet, software piracy, IT disputes and telecommunication and much more.'
						/>
						<Practice
							title='INTELLECTUAL PROPERTY'
							description='Registration, protection, and enforcement of trademarks, copyrights, patents, designs and trade secrets, licensing, technology transfer, media law, packaging, labeling, manufacturing and distribution agreements.'
						/>
					</section>
				</Animation>
				<Animation style='fade-down-right'>
					<section className='relative h-[369px] home-bg-small md:home-bg  bg-cover bg-center overflow-hidden'>
						<div
							className='absolute top-[1px] left-0 right-0 bottom-0 h-[369px] z-[1]'
							// style={{
							//   background: "rgba(0, 0, 0, 0.92)",
							//   // "linear-gradient(84.59deg, rgba(0, 0, 0, 0.58) 17.84%, rgba(0, 0, 0, 0.17) 52.14%, rgba(0, 0, 0, 0.65) 80.9%)",  }}
						/>
						<div className='relative z-[100] px-[20px] md:px-[70px] flex flex-col md:flex-row h-full items-center justify-between py-2'>
							<div className='md:w-[799px]'>
								<p className='text-white font-[400] text-[40px] md:text-[70px] leading-[40px] md:leading-[80px] md:mb-[20px]'>
									Hear what our clients & companies are saying
									about Him
								</p>
								<Link
									to='/portfolio'
									className='py-[10px] px-[20px] rounded-full border border-white flex items-center gap-x-[7px]  h-[50px] text-white w-[230px]'
								>
									<span className='text-[16px]'>
										{' '}
										Explore His Portfolio
									</span>
									<img
										src={require(`../../images/icons/arrowrightwhite.png`)}
										className=' '
										alt='Arrow'
									/>
								</Link>
							</div>
							<img
								src={require('../../images/logo2.png')}
								alt='logo'
								className='w-[59px] h-[80px] justify-self-end'
							/>
						</div>
					</section>
				</Animation>
				<Animation style='fade-up-left'>
					<section className='px-[70px] flex flex-col md:flex-row items-center justify-center gap-x-[150px] min-h-[393px] md:h-[284px]'>
						<Counter number={50} text='Years of Experience' />
						<Counter number={12} text='Areas of Practices' />
						<Counter
							number={100}
							text='Happy Clients & Companies'
						/>

						{/* <Counter number={50} text='' /> */}
					</section>
				</Animation>
				<Testimony />
			</main>
			<Footer />
		</>
	);
};

export default page;
