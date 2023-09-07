import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useSubmit } from '../../../utils/services/hooks/useSubmit';
// import UploadcareImage from '@uploadcare/nextjs-loader';
import uploadcare from 'uploadcare-widget';
const AddPortfolio = () => {
	const { submitItem } = useSubmit();
	const [btnClicked, setBtnClicked] = useState(false);
	const [title, setTitle] = useState('');
	const [url, setUrl] = useState('');
	const [file, setFile] = useState(null);
	const [image, setImage] = useState('');
	React.useEffect(() => {
		// widget = uploadcare.Widget("#uploader", {
		//   publicKey: "3f38fe2d4402e02dcef4",
		// });

		// get a widget reference
		const widget = uploadcare.Widget('[role=uploadcare-uploader]');

		// listen to the "upload completed" event
		widget.onUploadComplete((fileInfo) => {
			// get a CDN URL from the file info
			setImage(fileInfo.cdnUrl);
		});
	});
	async function handleSubmit(e) {
		e.preventDefault();
		setBtnClicked(true);
		const url = '/portfolio';
		const itemData = {
			title: title,
			url: url,
			imageUrl: image,
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
			{/* <div className=' py-[24px] flex flex-col md:flex-row gap-y-[40px] gap-x-[50px]'> */}
			<div className='md:w-[80%] px-[20px] md:mx-auto'>
				<input
					type='text'
					className='border border-black w-full rounded-[8px] h-[96px] px-[15px]'
					placeholder='Title/Heading'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					required
				/>
				<p className='mt-[30px] mb-[1'>Media/URL</p>
				{/* <FileUpload /> */}
				{/* <input
					type='file'
					// className='border border-black w-full rounded-[8px] h-[64px] px-[15px]'
					className='flex rounded-[8px] py-[20px] bg-white border border-black w-full items-center gap-x-[10px] md:h-[64px] px-[20px]'
					placeholder='Title/Heading'
					onChange={handleFileChange}
				/> */}
				<div className='flex rounded-[8px] py-[20px] bg-white border border-black w-full items-center gap-x-[10px] md:h-[64px] px-[20px]'>
					<input
						type='hidden'
						role='uploadcare-uploader'
						data-public-key='3f38fe2d4402e02dcef4'
						data-tabs='file camera url facebook gdrive gphotos dropbox'
						data-effects='crop'
						className='upload'
						style={{ backgroundColor: 'red!important' }}
					/>
				</div>
				<input
					type='text'
					className='border border-black w-full rounded-[8px] px-[15px] h-[64px] mt-[16px]'
					placeholder='URL Links'
					value={url}
					onChange={(e) => setUrl(e.target.value)}
					required
				/>
				<div className='my-[20px] w-full flex justify-center'>
					<button
						type='submit'
						className='p-[10px] rounded-full bg-[#C1C1C1]  text-white  flex items-center gap-x-[10px]  w-max mr-[20px]'
					>
						{/* <span>Add Product</span> */}
						{btnClicked ? 'Loading...' : 'Add Portfolio'}
						<img
							src={require(`../../../images/icons/arrowrightwhite.png`)}
							className=' '
							alt='arrow logo'
						/>
					</button>
				</div>
			</div>
			{/* </div> */}
		</form>
	);
};

export default AddPortfolio;
