import React from 'react';
import ReactPlayer from 'react-player';

const VideoComponent = ({ title, date, imgUrl, url }) => {
	// console.log(url);
	return (
		<div className=''>
			{url ? (
				// <div className='w-[353px] h-[251px] md:w-[420px] md:h-[316px]'>
				<ReactPlayer
					url={'https://www.youtube.com/watch?v=9nY9EAhgJYs'}
					controls
					width='100%'
					// height='100%'
				/>
			) : (
				// </div>
				<img
					src={`${imgUrl ? imgUrl : '/images/videobg.png'}`}
					alt='video background'
					className='relative w-[353px] h-[251px] md:w-[420px] md:h-[316px]'
				/>
			)}
			<p className='mt-[20px] font-[500] text-[20px] leading-[28px]'>
				{title}
			</p>
			<div className='h-[1px] bg-black w-full my-[12px]'></div>
			<p className='font-[400] text-[16px] leading-[32px]'>{date}</p>
		</div>
	);
};

export default VideoComponent;
