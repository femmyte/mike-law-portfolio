'use client';
import React, { useState, useEffect } from 'react';
import InputLine from '../../../../components/admin/common/InputLine';
import Editor from '../../../../components/admin/common/Editor';
import FileUpload from '../../../../components/admin/common/FileUpload';
import { useFetch } from '@/utils/services/hooks/useFetch';
import FullLoader from '@/components/loaders/FullLoaders';
import FullError from '@/components/errors/FullError';
import { useSubmit } from '../../../../utils/services/hooks/useSubmit';
import { toast } from 'react-toastify';

const notes = [
	'BANKING, CORPORATE FINANCE AND INSURANCE',
	'CORPORATE & COMMERCIAL',
	'INSOLVENCY & DEBT RECOVERY',
	'SPECIAL PROJECTS & EMERGENCY ISSUES',
	'TAXATION',
	'REAL PROPERTY',
	'OIL, GAS & ENVIRONMENTAL LAW',
];

const NoteCard = ({ note, btnText }) => {
	return (
		<div className='flex flex-col md:flex-row rounded-[10px] py-[9px] px-[24px] md:rounded-full bg-[#fbfbfb] shadow w-full md:justify-between items-center md:h-[64px] mb-[14px]'>
			<p className='font-[500] text-[10px] leading-[16px] md:w-[176px]'>
				{note}
			</p>
			<button
				type='submit'
				className='p-[10px] rounded-full bg-[#C1C1C1]  text-white  flex items-center gap-x-[10px]  w-max '
			>
				<span>Edit</span>
				<img
					src={`/images/icons/arrowright.png`}
					className=' '
					alt='arrow logo'
				/>
			</button>
		</div>
	);
};

const About = () => {
	const { submitItem } = useSubmit();
	const [editorLoaded, setEditorLoaded] = useState(false);
	const [info, setInfo] = useState('');
	const [heading, setHeading] = useState('');
	const [tagline, setTagline] = useState('');
	const [areaTitle, setAreaTitle] = useState('');
	const [areaContent, setAreaContent] = useState('');

	const [practice, setPractices] = useState([]);
	// const [aboutState, setAboutState] = useState({
	// 	heading: '',
	// 	tagline: '',
	// });
	useEffect(() => {
		setEditorLoaded(true);
	}, []);

	const handleChange = (evt) => {
		const value =
			evt.target.type === 'checkbox'
				? evt.target.checked
				: evt.target.value;
		setAboutState({
			...aboutState,
			[evt.target.name]: value,
		});
	};

	const { data, isInitialLoading, isSuccess, isError } = useFetch(
		'/practices/',
		'get-practice'
	);

	useEffect(() => {
		if (isSuccess) {
			setPractices(data.practices);
		}
	}, [isSuccess, data]);

	async function handleSubmit(e) {
		e.preventDefault();
		const url = '/about-us';
		const itemData = {
			heading: heading,
			tagline: tagline,
			bioContent: info,
		};
		const result = await submitItem({ url, itemData });

		if (result.isError === false) {
			toast('About Details created successfully');
		} else {
			toast(result.message);
		}
		// console.log(result.data);
		// console.log(result.message);
		// console.log(result.isError);
	}
	async function handleSubmitArea(e) {
		e.preventDefault();
		const url = '/about-us';
		const itemData = {
			areaOfPractice: areaTitle,
			content: areaContent,
		};
		const result = await submitItem({ url, itemData });

		if (result.isError === false) {
			toast('Area Details created successfully');
		}
		// console.log(result.data);
		// console.log(result.message);
		// console.log(result.isError);
	}

	// if (isInitialLoading) {
	// 	return <FullLoader />;
	// }
	// if (isError) {
	// 	return <FullError />;
	// }
	return (
		<div className='px-[20px]'>
			<InputLine
				placeholder='Edit Your Profile to Meet Up New Achievements'
				btnText='Save'
			/>
			<form
				onSubmit={handleSubmit}
				className=' py-[24px] flex flex-col md:flex-row gap-y-[40px] gap-x-[50px]'
			>
				<div className='md:w-[50%]'>
					<textarea
						className='border border-black w-full rounded-[8px] h-[100px] md:h-[156px] px-[15px]'
						placeholder='Heading'
						name='heading'
						value={heading}
						onChange={(e) => setHeading(e.target.value)}
					></textarea>
					<textarea
						className='border border-black w-full rounded-[8px] h-[100px] md:h-[156px] px-[15px]'
						placeholder='Tagline'
						name='tagline'
						value={tagline}
						onChange={(e) => setTagline(e.target.value)}
					></textarea>
					{/* <FileUpload text='Upload Image' /> */}
					<div className='my-[20px]'>
						<button
							type='submit'
							className='p-[10px] rounded-full bg-[#C1C1C1]  text-white  flex items-center gap-x-[10px]  w-max mr-[20px]'
						>
							<span>Submit</span>
							<img
								src={`/images/icons/arrowrightwhite.png`}
								className=' '
								alt='arrow logo'
							/>
						</button>
					</div>
				</div>
				<div className='md:w-[50%]'>
					<Editor
						name='description'
						onChange={(data) => {
							setInfo(data);
						}}
						editorLoaded={editorLoaded}
					/>
				</div>
			</form>
			<div className='w-full py-[24px] flex flex-col md:flex-row gap-y-[40px] gap-x-[50px] mt-[30px] md:mt-[60px]'>
				<form onSubmit={handleSubmitArea} className='md:flex-1'>
					<p className='mt-[30px] mb-[16px]'>Areas of Practice</p>
					<div className='flex flex-col md:flex-row rounded-[8px] py-[20px] bg-white border border-black w-full md:justify-between items-center md:h-[64px]'>
						<input
							type='text'
							className='w-full md:w-3/5 bg-transparent border-none focus:border-none focus:outline-none text-black px-[20px] h-[64px]'
							placeholder='Create New'
						/>
						{/* <button
							type='submit'
							className='p-[10px] rounded-full bg-[#C1C1C1]  text-white  flex items-center gap-x-[10px]  w-max mr-[20px]'
						>
							<span>Add Area</span>
							<img
								src={`/images/icons/arrowrightwhite.png`}
								className=' '
								alt='arrow logo'
							/>
						</button> */}
					</div>
					<textarea
						className='border border-black w-full rounded-[8px] h-[100px] md:h-[250px] px-[15px] mt-[20px]'
						placeholder='Add Content'
					></textarea>
					<div className='my-[20px]'>
						<button
							type='submit'
							className='p-[10px] rounded-full bg-[#C1C1C1]  text-white  flex items-center gap-x-[10px]  w-max mr-[20px]'
						>
							<span>Add Area</span>
							<img
								src={`/images/icons/arrowrightwhite.png`}
								className=' '
								alt='arrow logo'
							/>
						</button>
					</div>
				</form>
				<div className='md:flex-1'>
					{notes.map((note) => {
						return (
							<div className='my-[2px]' key={note}>
								<NoteCard note={note} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default About;
