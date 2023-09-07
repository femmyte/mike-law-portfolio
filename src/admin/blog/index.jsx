import React, { useState, useEffect } from 'react';
import InputLine from '../../components/admin/common/InputLine';
import Editor from '../../components/admin/common/Editor';
import { toast } from 'react-toastify';
import { CiCircleRemove } from 'react-icons/ci';
import { useSubmit } from '../../utils/services/hooks/useSubmit';
import FileUpload from '../../components/admin/common/FileUpload';
import uploadcare from 'uploadcare-widget';
import DashboardLayout from '../../components/admin/common/DashboardLayout';
const Blog = () => {
	const { submitItem } = useSubmit();
	const [editorLoaded, setEditorLoaded] = useState(false);
	const [description, setDescription] = useState('');
	const [heading, setHeading] = useState('');
	const [urlLink, setUrlLink] = useState('');
	const [file, setFile] = useState(null);
	const [tag, setTag] = useState('');
	const [tags, setTags] = useState([]);
	const [btnClicked, setBtnClicked] = useState(false);
	const [image, setImage] = useState('');
	React.useEffect(() => {
		const widget = uploadcare.Widget('[role=uploadcare-uploader]');

		// listen to the "upload completed" event
		widget.onUploadComplete((fileInfo) => {
			// console.log(fileInfo);
			setImage(fileInfo.cdnUrl);
		});
	});
	useEffect(() => {
		setEditorLoaded(true);
	}, []);

	const generateSlug = (title) => {
		const lowercaseTitle = title.toLowerCase();
		const words = lowercaseTitle.split(' ');
		const slug = words.join('-');
		return slug;
	};
	const handleTagSubmit = (tag) => {
		setTags((prevTags) => [...prevTags, tag]);
		setTag('');
	};
	const handleTagRemove = (tag) => {
		setTags((prevTags) => prevTags.filter((t) => t !== tag));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setBtnClicked(true);
		const slug = generateSlug(heading);

		const url = '/blog/new';
		const itemData = {
			title: heading,
			media: image,
			urlLinks: urlLink,
			tags: [...tags],
			blogContent: description,
			slug: slug,
		};
		const result = await submitItem({ url, itemData });

		if (result.isError === false) {
			toast('Blog Post created successfully');
			setBtnClicked(false);
			setEditorLoaded(true);
			setDescription('');
			setHeading('');
			setUrlLink('');
			setImage('');
			setTag('');
			setTags('');
		} else {
			toast('error creating blog post');
		}
		setBtnClicked(false);
		// console.log(result.data);
		// console.log(result.message);
		// console.log(result.isError);
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
			// console.error(
			// 	'Invalid file type. Please select a JPEG, PNG, or GIF image.'
			// );
		}
	};
	// if (isInitialLoading) {
	// return <FullLoader />;
	// }
	// if (isError) {
	// return <FullError />;
	// }
	return (
		<DashboardLayout>
			<div className='px-[20px]'>
				<InputLine
					placeholder='Create a new blog post'
					btnText='Save'
				/>
				<form onSubmit={handleSubmit}>
					<div className=' py-[24px] flex flex-col md:flex-row gap-y-[40px] gap-x-[50px]'>
						<div className='md:w-[50%]'>
							<input
								type='text'
								className='border border-black w-full rounded-[8px] h-[96px] px-[15px]'
								placeholder='Title/Heading'
								value={heading}
								onChange={(e) => setHeading(e.target.value)}
								required
							/>
							{/* <input
							type='text'
							className='border border-black w-full rounded-[8px] px-[15px] h-[64px] mt-[16px]'
							placeholder='Minutes of Reading'
						/> */}
							<p className='mt-[30px] mb-[1'>Media/URL</p>
							{/* <input
							type='file'
							// className='border border-black w-full rounded-[8px] h-[64px] px-[15px]'
							className='flex rounded-[8px] py-[20px] bg-white border border-black w-full items-center gap-x-[10px] md:h-[64px] px-[20px]'
							placeholder='Title/Heading'
							onChange={handleFileChange}
						/> */}
							<FileUpload />
							<input
								type='text'
								className='border border-black w-full rounded-[8px] px-[15px] h-[64px] mt-[16px]'
								placeholder='URL Links'
								value={urlLink}
								required
								onChange={(e) => setUrlLink(e.target.value)}
							/>
							<p className='mt-[30px] mb-[16px]'>Tag/Category</p>
							<div className='flex flex-col md:flex-row rounded-[8px] py-[20px] bg-white border border-black w-full md:justify-between items-center md:h-[64px]'>
								<input
									type='text'
									className='w-full md:w-4/5 bg-transparent border-none focus:border-none focus:outline-none text-black px-[20px] h-[64px]'
									placeholder='Create New'
									value={tag}
									onChange={(e) => setTag(e.target.value)}
								/>
								{tag && (
									<button
										type='submit'
										className='p-[10px] rounded-full bg-[#C1C1C1]  text-white  flex items-center gap-x-[10px]  w-max mr-[20px]'
										onClick={() => handleTagSubmit(tag)}
									>
										<span>Create</span>
										<img
											src={`/images/icons/arrowrightwhite.png`}
											className=' '
											alt='arrow logo'
										/>
									</button>
								)}
							</div>
							{/* <div className='flex mt-[20px] gap-x-[10px] flex-wrap gap-y-2'> */}
							<ul className='flex mt-[20px] gap-x-[10px] flex-wrap gap-y-2'>
								{tags.length > 0 &&
									tags.map((newTag, index) => (
										<li key={newTag + index}>
											<button
												type='button'
												className='p-[10px] rounded-full border border-black  text-black  flex items-center gap-x-[10px]  w-max mr-[20px]'
											>
												<span>{newTag}</span>
												{/* <img
										src={`/images/icons/arrowright.png`}
										className=' '
										alt='arrow logo'
									/> */}
												<CiCircleRemove
													onClick={() =>
														handleTagRemove(newTag)
													}
												/>
											</button>
										</li>
									))}
							</ul>
							{/* {tags?.map((newTag) => (
								<button
									type='submit'
									className='p-[10px] rounded-full border border-black  text-black  flex items-center gap-x-[10px]  w-max mr-[20px]'
								>
									<span>{newTag}</span>
									{/* <img
										src={`/images/icons/arrowright.png`}
										className=' '
										alt='arrow logo'
									/> *
									<CiCircleRemove
										onClick={() => handleTagRemove(newTag)}
									/>
								</button>
							))} */}
							{/* </div> */}
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
					<div className='flex items-center w-full justify-center mt-[30px]'>
						<button
							type='submit'
							className='p-[10px] px-[20px] rounded-full border border-black  text-black  flex items-center gap-x-[10px]  w-max mr-[20px]'
						>
							{btnClicked ? 'Loading...' : 'Submit'}
						</button>
					</div>
				</form>
			</div>
		</DashboardLayout>
	);
};

export default Blog;
