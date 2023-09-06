import React, { useState, useEffect } from 'react';
import Editor from '../common/Editor';
// import FileUpload from '../common/FileUpload';
import { useSubmit } from '../../../utils/services/hooks/useSubmit';
import { toast } from 'react-toastify';
const AddEvent = () => {
	const [editorLoaded, setEditorLoaded] = useState(false);
	const [description, setDescription] = useState('');
	const [eventState, setEventState] = useState({
		name: '',
		location: '',
		date: '',
		price: '',
		type: '',
	});
	const { submitItem } = useSubmit();
	const [btnClicked, setBtnClicked] = useState(false);
	useEffect(() => {
		setEditorLoaded(true);
	}, []);

	const handleChange = (event) => {
		const value =
			event.target.type === 'checkbox'
				? event.target.checked
				: event.target.value;
		setEventState({
			...eventState,
			[event.target.name]: value,
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setBtnClicked(true);
		const url = '/event';
		const itemData = {
			name: eventState.name,
			location: eventState.location,
			date: eventState.date,
			price: eventState.price,
			type: eventState.type,
			description,
		};
		const result = await submitItem({ url, itemData });

		if (result.isError === false) {
			toast('Event created successfully');

			setBtnClicked(false);
		} else {
			toast(result.message);
		}
		setBtnClicked(false);

		// console.log(result.data);
		// console.log(result.message);
		// console.log(result.isError);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className=' py-[24px] flex flex-col md:flex-row gap-y-[40px] gap-x-[50px]'>
				<div className='md:w-[50%]'>
					<input
						type='text'
						className='border border-black w-full rounded-[8px] h-[96px] px-[15px]'
						placeholder='Event Name'
						name='name'
						value={eventState.name}
						onChange={handleChange}
						required
					/>
					<p className='mt-[20px] font-bold text-[18px]'>
						Tag Event as
					</p>
					<div className='flex mt-[10px] gap-x-[30px] flex-wrap gap-y-2'>
						<div className=''>
							<input
								type='radio'
								id='Hybrid'
								name='type'
								value='Hybrid'
								checked={eventState.type === 'Hybrid'}
								onChange={handleChange}
								required
							/>
							<label htmlFor='Hybrid' className='ml-[13px]'>
								Hybrid Event
							</label>
						</div>
						<div className=''>
							<input
								type='radio'
								id='Virtual'
								name='type'
								value='Virtual'
								checked={eventState.type === 'Virtual'}
								onChange={handleChange}
								required
							/>
							<label htmlFor='Virtual' className='ml-[13px]'>
								Virtual Event
							</label>
						</div>
						<div className=''>
							<input
								type='radio'
								id='Physical'
								name='type'
								value='Physical'
								checked={eventState.type === 'Physical'}
								onChange={handleChange}
								required
							/>
							<label htmlFor='Physical' className='ml-[13px]'>
								Physical Event
							</label>
						</div>
					</div>
					<input
						type='text'
						className='border border-black w-full rounded-[8px] px-[15px] h-[64px] mt-[16px]'
						placeholder='Location'
						name='location'
						value={eventState.location}
						onChange={handleChange}
						required
					/>
					<input
						type='date'
						className='mt-[16px] border border-black w-full rounded-[8px] h-[96px] px-[15px]'
						placeholder=''
						name='date'
						value={eventState.date}
						onChange={handleChange}
						required
					/>
					<input
						type='number'
						className='border border-black w-full rounded-[8px] px-[15px] h-[64px] mt-[16px]'
						placeholder='Price'
						name='price'
						value={eventState.price}
						onChange={handleChange}
						required
					/>
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
			<div className='my-[20px] '>
				<button
					type='submit'
					className='p-[10px] rounded-full bg-[#C1C1C1]  text-white  flex items-center gap-x-[10px]  w-max mr-[20px]'
				>
					{btnClicked ? 'Loading...' : <span>Add Event</span>}
					<img
						src={require(`../../../images/icons/arrowrightwhite.png`)}
						className=' '
						alt='arrow logo'
					/>
				</button>
			</div>
		</form>
	);
};

export default AddEvent;
