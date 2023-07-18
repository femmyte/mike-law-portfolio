'use client';
import React, { useState, useEffect } from 'react';
import Editor from '../common/Editor';
import FileUpload from '../common/FileUpload';
import { useSubmit } from '@/utils/services/hooks/useSubmit';
const AddEvent = () => {
	const [editorLoaded, setEditorLoaded] = useState(false);
	const [description, setDescription] = useState('');
	const [eventState, setEventState] = useState({
		name: '',
		location: '',
		date: '',
		price: '',
		type: '',
		speakers: '',
	});
	const { submitItem } = useSubmit();
	const [btnClicked, setBtnClicked] = useState(false);
	const [title, setTitle] = useState('');
	const [url, setUrl] = useState('');
	const [file, setFile] = useState(null);
	useEffect(() => {
		setEditorLoaded(true);
	}, []);
	const handleSubmit = async (e) => {
		e.preventDefaut();
		e.preventDefault();
		setBtnClicked(true);
		const url = '/portfolio';
		const itemData = {
			title: title,
			url: url,
			imageUrl: file,
		};
		const result = await submitItem({ url, itemData });

		if (result.isError === false) {
			toast('Area Details created successfully');
			setTitle('');
			setUrl('');
			setFile(null);
			setBtnClicked(false);
		}
		setBtnClicked(false);

		console.log(result.data);
		console.log(result.message);
		console.log(result.isError);
	};
	const handleFileChange = (e) => {
		const selectedFile = e.target.files[0];
		const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];

		if (selectedFile && allowedTypes.includes(selectedFile.type)) {
			setFile(selectedFile);
		} else {
			setFile(null);
			// Display an error message or perform any desired error handling
			toast.warning(
				'Invalid file type. Please select a JPEG, PNG, or GIF image.'
			);
			console.error(
				'Invalid file type. Please select a JPEG, PNG, or GIF image.'
			);
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className=' py-[24px] flex flex-col md:flex-row gap-y-[40px] gap-x-[50px]'>
				<div className='md:w-[50%]'>
					<input
						type='text'
						className='border border-black w-full rounded-[8px] h-[96px] px-[15px]'
						placeholder='Event Name'
					/>
					<div className='my-[18px] align-left'>
						<input
							type='radio'
							id='book'
							name='option'
							value='upcoming'
						/>
						<label htmlFor='book' className='ml-[13px]'>
							Tag as “Upcoming Event”
						</label>
					</div>
					<input
						type='text'
						className='border border-black w-full rounded-[8px] px-[15px] h-[64px] mt-[16px]'
						placeholder='Location'
					/>
					<input
						type='date'
						className='mt-[16px] border border-black w-full rounded-[8px] h-[96px] px-[15px]'
						placeholder=''
					/>
					<input
						type='number'
						className='border border-black w-full rounded-[8px] px-[15px] h-[64px] mt-[16px]'
						placeholder='Price'
					/>

					<div className='my-[20px]'>
						<button
							type='submit'
							className='p-[10px] rounded-full bg-[#C1C1C1]  text-white  flex items-center gap-x-[10px]  w-max mr-[20px]'
						>
							<span>Add Event</span>
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
							setDescription(data);
						}}
						editorLoaded={editorLoaded}
					/>
				</div>
			</div>
		</form>
	);
};

export default AddEvent;
