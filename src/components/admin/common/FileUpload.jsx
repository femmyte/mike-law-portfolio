import React from 'react';

const FileUpload = () => {
	return (
		<div className='flex rounded-[8px] py-[20px] bg-white border border-black w-full items-center gap-x-[10px] md:h-[64px] px-[20px]'>
			<input
				type='hidden'
				role='uploadcare-uploader'
				data-public-key='3f38fe2d4402e02dcef4'
				data-tabs='file camera url facebook gdrive gphotos dropbox'
				data-effects='crop'
				className='upload'
				style={{ backgroundColor: 'red !important' }}
			/>
		</div>
	);
};

export default FileUpload;
