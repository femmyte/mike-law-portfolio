import React from 'react';
import InputLine from '../../../../../../components/admin/common/InputLine';
async function getMessage(id) {
	const message = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/v1/contact/${id}`
	).then((res) => res.json());
	return message;
}
export async function generateStaticParams() {
	const message = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/v1/contact/`
	).then((res) => res.json());

	return message.map((message) => ({
		id: message._id,
	}));
}
const dateConversion = (dateStr) => {
	// const dateStr = '2023-07-14T19:40:47.204Z';
	const date = new Date(dateStr);
	const currentDate = new Date();

	let formattedTime = date.toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
	});
	if (date.toDateString() === currentDate.toDateString()) {
		formattedTime = 'today ' + formattedTime;
	}
	return formattedTime;
};
export const revalidate = 0;

const Message = async ({ params: { id } }) => {
	const messages = await getMessage(id);

	if (!messages._id) {
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
				placeholder='View new messages from your customer'
				btnText='Save'
			/>
			<div className='mt-[30px] md:mt-[45px]'>
				<p className='font-[700] text-[12px] leading-[16px] mb-[5px]'>
					Sender Name
				</p>
				<p className='font-[400] text-[12px] leading-[16px] '>
					{messages.senderName}
				</p>
				<div className='flex flex-col md:flex-row mt-[28px] gap-[24px]'>
					<div className=''>
						<p className='font-[700] text-[12px] leading-[16px] mb-[5px]'>
							Subject
						</p>
						<p className='font-[400] text-[12px] leading-[16px] mb-[5px]'>
							{messages.subject}
						</p>
					</div>
					<div className=''>
						<p className='font-[700] text-[12px] leading-[16px] mb-[5px]'>
							Detials
						</p>
						<p className='font-[400] text-[12px] leading-[16px] mb-[5px]'>
							{dateConversion(messages.createdAt)}
						</p>
					</div>
				</div>
				<div className='my-[28px]'>
					<p className='font-[700] text-[12px] leading-[16px] mb-[5px]'>
						Email Address
					</p>
					<p className='font-[400] text-[12px] leading-[16px] mb-[5px]'>
						{messages.emailAddress}
					</p>
				</div>
				<div className='w-full md:w-[430px]'>
					<p className='font-[700] text-[12px] leading-[16px] mb-[5px]'>
						Message
					</p>
					<p className='font-[400] text-[12px] leading-[16px] mb-[5px]'>
						{removePTags(messages.message)}
					</p>
				</div>
			</div>
			<div className='mt-[30px] md:mt-[45px] w-full md:w-[430px]'>
				<textarea
					className='border border-black w-full rounded-[8px] h-[100px] md:h-[250px] px-[15px] mt-[20px]'
					placeholder='Reply Via Email'
				></textarea>

				<div className='flex gap-x-[20px] md:gap-x-[35px] justify-end mt-[20px] md:mt-[44px]'>
					<button className=''>Delete</button>
					<button
						type='submit'
						className='py-[10px] px-[20px] rounded-full bg-black  text-white  flex items-center gap-x-[10px]  w-max mr-[20px]'
					>
						<span>Send</span>
						<img
							src={`/images/icons/arrowrightwhite.png`}
							className=' '
							alt='arrow logo'
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Message;
