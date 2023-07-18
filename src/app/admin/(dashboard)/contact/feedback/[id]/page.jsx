import React from 'react';
import InputLine from '../../../../../../components/admin/common/InputLine';

async function getMessage(id) {
	const message = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/v1/feedback/${id}`
	).then((res) => res.json());
	return message;
}
export async function generateStaticParams() {
	const message = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/v1/feedback/`
	).then((res) => res.json());

	return message.map((message) => ({
		id: message._id,
	}));
}
const Feedback = async ({ params: { id } }) => {
	const feedbacks = await getMessage(id);

	if (!feedbacks._id) {
		return (
			<div className='flex h-screen w-full bg-black text-white items-center justify-center'>
				<p className='font-[700] text-[20px] text-white'>Loading...</p>
			</div>
		);
	}
	const removePTags = (text) => {
		const regex = /<p[^>]*>(.*?)<\/p>/g;
		return text?.replace(regex, '$1');
	};
	return (
		<div className='px-[20px] w-full'>
			<InputLine
				placeholder='Edit Your Profile to Meet Up New Achievements'
				btnText='Save'
			/>
			<div className='mt-[30px] md:mt-[45px]'>
				<p className='font-[700] text-[12px] leading-[16px] mb-[5px]'>
					Sender Name
				</p>
				<p className='font-[400] text-[12px] leading-[16px] '>
					{feedbacks?.name}
				</p>
				<div className='flex flex-col md:flex-row mt-[28px] gap-[24px]'>
					<div className=''>
						<p className='font-[700] text-[12px] leading-[16px] mb-[5px]'>
							Detials
						</p>
						<p className='font-[400] text-[12px] leading-[16px] mb-[5px]'>
							{feedbacks?.date}
						</p>
					</div>
				</div>
				<div className='my-[28px]'>
					<p className='font-[700] text-[12px] leading-[16px] mb-[5px]'>
						Email Address
					</p>
					<p className='font-[400] text-[12px] leading-[16px] mb-[5px]'>
						{feedbacks?.email}
					</p>
				</div>
				<div className='w-full md:w-[430px]'>
					<p className='font-[700] text-[12px] leading-[16px] mb-[5px]'>
						Message
					</p>
					<p className='font-[400] text-[12px] leading-[16px] mb-[5px]'>
						{removePTags(feedbacks?.message)}
					</p>
				</div>
			</div>
			<p className='font-[700] text-[12px] leading-[16px] mb-[18px] mt-[25px] md:mt-[68px]'>
				Approve as a testimonials on homepage
			</p>
			<div className='flex gap-x-[20px] md:gap-x-[35px] justify-start '>
				<button
					type='submit'
					className='py-[10px] px-[20px] rounded-full border border-black  text-black   w-max mr-[20px]'
				>
					Delete
				</button>
				<button
					type='submit'
					className='py-[10px] px-[20px] rounded-full bg-black  text-white  flex items-center gap-x-[10px]  w-max mr-[20px]'
				>
					<span>Yes</span>
					<img
						src={`/images/icons/arrowrightwhite.png`}
						className=' '
						alt='arrow logo'
					/>
				</button>
			</div>
		</div>
	);
};

export default Feedback;
