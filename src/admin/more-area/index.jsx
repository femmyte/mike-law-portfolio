import Editor from '../../components/admin/common/Editor';
import { useSubmit } from '../../utils/services/hooks/useSubmit';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
const MoreArea = () => {
	const { submitItem } = useSubmit();
	const [btnClicked, setBtnClicked] = useState(false);
	const [editorLoaded, setEditorLoaded] = useState(false);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [subHeading, setSubHeading] = useState('');
	const [file, setFile] = useState(null);

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

	async function handleSubmit(e) {
		e.preventDefault();
		setBtnClicked(true);
		const url = '/store';
		const itemData = {
			title: title,
			subHeading: subHeading,
			description: description,
			imageUrl: file,
			// redirectUrl: redirectUrl,
		};
		const result = await submitItem({ url, itemData });

		if (result.isError === false) {
			toast('Area Details created successfully');
			setDescription('');
			setTitle('');
			setSubHeading('');
			setFile(null);
			setBtnClicked(false);
		}
		setBtnClicked(false);

		console.log(result.data);
		console.log(result.message);
		console.log(result.isError);
	}
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
			<div className=' py-[24px] px-5 flex flex-col md:flex-row gap-y-[40px] gap-x-[50px]'>
				<div className='md:w-[50%]'>
					<p className=' mb-[16px]'>More Areas Contents</p>
					{/* <FileUpload /> */}
					<input
						type='file'
						// className='border border-black w-full rounded-[8px] h-[64px] px-[15px]'
						className='flex rounded-[8px] py-[20px] bg-white border border-black w-full items-center gap-x-[10px] md:h-[64px] px-[20px]'
						placeholder='Title/Heading'
						onChange={handleFileChange}
					/>
					<input
						type='text'
						className='mt-[16px] border border-black w-full rounded-[8px] h-[96px] px-[15px]'
						placeholder='Title/Heading'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
					<input
						type='text'
						className='border border-black w-full rounded-[8px] px-[15px] h-[64px] mt-[16px]'
						placeholder='Sub Heading'
						value={subHeading}
						onChange={(e) => setSubHeading(e.target.value)}
						required
					/>

					<div className='flex mt-[20px] gap-x-[30px] flex-wrap gap-y-2'>
						<div className=''>
							<input
								type='radio'
								id='article'
								name='option'
								value='article'
							/>
							<label htmlFor='article' className='ml-[13px]'>
								Use as article
							</label>
						</div>
						<div className=''>
							<input
								type='radio'
								id='book'
								name='option'
								value='book'
							/>
							<label htmlFor='book' className='ml-[13px]'>
								Use as Book
							</label>
						</div>
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
				<div className='my-[20px]'>
					<button
						type='submit'
						className='p-[10px] rounded-full bg-[#C1C1C1]  text-white  flex items-center gap-x-[10px]  w-max mr-[20px]'
					>
						{/* <span>Add Product</span> */}
						{btnClicked ? 'Loading...' : 'Add More Area'}
						<img
							src={`/images/icons/arrowrightwhite.png`}
							className=' '
							alt='arrow logo'
						/>
					</button>
				</div>
			</div>
		</form>
	);
};

export default MoreArea;
