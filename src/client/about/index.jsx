import React from 'react';
import Header from '../../components/common/Header';
import { Link } from 'react-router-dom';
import Nav from '../../components/common/Nav';
import Footer from '../../components/common/Footer';

const About = () => {
	return (
		<div>
			<Nav />
			<Header
				title='Constitutional Lawyer, Human Rights Activist, and Senior Advocate of Nigeria'
				link='/portfolio'
				btnText='Explore His Portfolio'
			/>
			<div className='md:flex gap-x-[20px] px-[20px] md:px-[70px] py-[20px] md:py-[70px]  '>
				<img src={require('../../images/about.png')} alt='about' />
				<p className='font-[400] text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] text-justify mt-[36px] md:mt-0'>
					With over 40 years of legal experience, Chief Mike Agbedor
					Abu Ozekhome is a renowned Constitutional Lawyer, Human
					Rights Activist, and Senior Advocate of Nigeria (SAN). Chief
					Mike Agbedor Abu Ozekhome is a renowned Constitutional
					Lawyer, Human Rights Activist, and Senior Advocate of
					Nigeria (SAN). With over 40 years of legal experience, Chief
					Ozekhome has made a name for himself as a leading voice in
					the legal profession and a champion of justice and human
					rights. But Chief Ozekhome is more than just a lawyer. He is
					also a Pro-Democracy Campaigner; Member of the Order of the
					Federal Republic (OFR), Senior Advocate of the Masses (SAM),
					Voice of the People (VOP), Senior Advocate of Nigerian
					Students (SANS), Notary Public of Nigeria, Patriot,
					Pan-Nigerian, Author, Motivational Speaker, Public Affairs
					Analyst and Knight of the Order of St.Mulumba (KSM). As a
					lawyer, Chief Ozekhome has dedicated his career to defending
					the rights of the people and fighting for justice. He has
					represented numerous clients in high-profile cases, and has
					won landmark rulings in several cases. His expertise in
					constitutional law and human rights has earned him national
					and international recognition, and he has received several
					awards and honors for his contributions to the legal
					profession and society at large. But beyond his legal
					career, Chief Ozekhome is also a prolific author, public
					speaker, and social commentator. His works span a wide range
					of topics, from legal and political issues social and
					cultural matters. He is a sought-after speaker at
					conferences and events, and has inspired countless
					individuals with his motivational speeches and writings.
				</p>
			</div>
			<section className='bg-[#F9F9F9] px-[20px] md:px-[70px] py-[50px]  md:py-[70px] md:flex items-center gap-x-[130px]'>
				<img
					src={require('../../images/aboutoffice.png')}
					alt='about office'
				/>
				<div className='mt-[40px] md:mt-0'>
					<p className='mb-[20px] font-[400] text-[16px] md:text-[20px] leading-[28px]'>
						Interested in learning more about Chief Mike Agbedor Abu
						Ozekhome&apos;s legal expertise? Or to see how he can
						help you with your legal needs
					</p>
					<Link to='/contact' className=''>
						<div className='py-[10px] text-[16px] px-[20px] rounded-full border border-black flex items-center gap-x-[7px]  w-max'>
							<span className=''> Contact Us Here</span>
							<img
								src={require(`../../images/icons/arrowright.png`)}
								className=' '
								alt='arrow logo'
							/>
						</div>
					</Link>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default About;
