import { AiFillHome } from 'react-icons/ai';
import { ImUsers } from 'react-icons/im';
import { MdCategory } from 'react-icons/md';
import { HiOutlineUserGroup } from 'react-icons/hi';

export const links = [
	{
		title: 'Dashboard',
		links: [
			{
				name: 'dashboard',
				icon: <AiFillHome />,
			},
		],
	},

	{
		title: 'Pages',
		links: [
			{
				name: 'portfolio',
				icon: <HiOutlineUserGroup />,
			},
			{
				name: 'store',
				icon: <HiOutlineUserGroup />,
			},
			{
				name: 'orders',
				icon: <HiOutlineUserGroup />,
			},
			{
				name: 'blog',
				icon: <HiOutlineUserGroup />,
			},
			{
				name: 'about',
				icon: <HiOutlineUserGroup />,
			},
			{
				name: 'contact',
				icon: <HiOutlineUserGroup />,
			},
		],
	},
];
