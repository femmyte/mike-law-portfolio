'use client';
import React, { useState, useEffect } from 'react';
import Editor from '../../../../../../components/admin/common/Editor';
import FileUpload from '../../../../../../components/admin/common/FileUpload';
const EditPortfolio = () => {
	const [editorLoaded, setEditorLoaded] = useState(false);
	const [data, setData] = useState('');

	useEffect(() => {
		setEditorLoaded(true);
	}, []);
	return (
		<form>
			<div className=' py-[24px] flex flex-col md:flex-row gap-y-[40px] gap-x-[50px]'>
				<div className='md:w-[50%]'>
					<input
						type='text'
						className='border border-black w-full rounded-[8px] h-[96px] px-[15px]'
						placeholder='Title/Heading'
					/>
					<p className='mt-[30px] mb-[1'>Media/URL</p>
					<FileUpload />
					<input
						type='text'
						className='border border-black w-full rounded-[8px] px-[15px] h-[64px] mt-[16px]'
						placeholder='URL Links'
					/>
					<p className='mt-[50px] mb-[16px]'>More Areas Contents</p>
					<FileUpload />
					<input
						type='text'
						className='mt-[16px] border border-black w-full rounded-[8px] h-[96px] px-[15px]'
						placeholder='Title/Heading'
					/>
					<input
						type='text'
						className='border border-black w-full rounded-[8px] px-[15px] h-[64px] mt-[16px]'
						placeholder='Sub Heading'
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
							setData(data);
						}}
						editorLoaded={editorLoaded}
					/>
				</div>
			</div>
		</form>
	);
};

export default EditPortfolio;
