import React, { useState } from 'react';
import InputLine from '../../components/admin/common/InputLine';
import Messages from '../../components/admin/contact/Messages';
import Feedback from '../../components/admin/contact/Feedback';

const Contact = () => {
	const [showMessage, setShowMessage] = useState(true);
	const [showFeedback, setShowFeedback] = useState(false);
	const [show, setShow] = useState('message');
	const handleShow = (e, page) => {
		e.preventDefault();
		if (page === 'message') {
			setShow('message');
			// setShowFeedback(false);
			// setShowMessage(true);
		} else if (page === 'feedback') {
			setShow('feedback');
			// setShowMessage(false);
			// setShowFeedback(true);
		}
	};
	return (
		<div className='px-[20px] w-full'>
			<InputLine
				placeholder='View new messages from your customer'
				btnText='Save'
			/>
			<div className='flex items-center justify-center gap-x-[20px] mt-[44px] mb-[70px] md:w-[50%] mx-auto'>
				<div className='flex flex-col w-[170px] '>
					<button
						className={`mb-[12px] text-center text-[16px] font-[400] leading-[19px]
						${show === 'message' ? 'text-black' : 'text-[#929292]'}
						`}
						onClick={() => setShow('message')}
					>
						Messages
					</button>
					<div
						className={`w-full h-[2px] ${
							show === 'message' ? 'bg-black' : 'bg-[#929292]'
						}`}
					></div>
				</div>
				<div className='flex flex-col w-[170px] '>
					<button
						className={`mb-[12px] text-center text-[16px] font-[400] leading-[19px]
						${show === 'feedback' ? 'text-black' : 'text-[#929292]'}
						`}
						onClick={() => setShow('feedback')}
					>
						Feedbacks
					</button>
					<div
						className={`w-full h-[2px] ${
							show === 'feedback' ? 'bg-black' : 'bg-[#929292]'
						}`}
					></div>
				</div>
			</div>
			<div className=''>
				<p className='font-[700] text-[20px] leading-[16px] text-center mb-[30px] '>
					{show === 'message' ? 'Messages' : 'Feedbacks'}
				</p>
				{show === 'message' ? <Messages /> : <Feedback />}
			</div>
		</div>
	);
};

export default Contact;
