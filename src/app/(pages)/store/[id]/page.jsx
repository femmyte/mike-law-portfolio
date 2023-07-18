import React from 'react';
import Article from '../../../../components/pages/Article';
import Header from '../../../../components/common/Header';
import OrderForm from '@/components/forms/OrderForm';
// export const revalidate = 0;
// export const dynamic = 'force-dynamic';

async function getProduct(id) {
	const product = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/v1/store/${id}`
	).then((res) => res.json());
	return product;
}
export async function generateStaticParams() {
	const products = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/v1/store/`
	).then((res) => res.json());

	return products.map((product) => ({
		id: product._id,
	}));
}

const SingleStore = async ({ params: { id } }) => {
	// const [product, setProduct] = useState([]);
	// const { data, isInitialLoading, isSuccess, isError } = useFetch(
	// 	`/store/${id}`,
	// 	'get-single-product-user'
	// );
	// useEffect(() => {
	// 	if (isSuccess) {
	// 		setProduct(data);
	// 	}
	// }, [isSuccess, data]);

	// if (isInitialLoading) {
	// 	return <FullLoader />;
	// }
	// if (isError) {
	// 	return <FullError />;
	// }

	const product = await getProduct(id);
	console.log(product);
	const removePTags = (text) => {
		const regex = /<p[^>]*>(.*?)<\/p>/g;
		return text?.replace(regex, '$1');
	};
	return (
		<>
			<Header
				title={product?.name}
				link='/portfolio'
				btnText='Explore His Portfolio'
			/>

			<div className='md:flex gap-x-[120px] px-[20px] md:px-[70px] py-[20px] md:py-[70px] '>
				<div className='md:w-[830px] bg-[#F9F9F9] pb-[20px]'>
					<div className='w-full pb-[28px] h-max  rounded-t-[24px]'>
						<img
							src={`${
								product?.coverImage
									? product?.coverImage
									: '/images/barcaprec.png'
							}`}
							alt='about'
						/>
						<p className='font-[400] text-[25px] md:text-[32px] leading-[33px] md:leading-[38px] px-[26px] mt-[20px] md:mt-[47px]'>
							{product?.name}
						</p>
						<p className='font-[400] text-[25px] md:text-[32px] leading-[33px] md:leading-[38px] px-[26px] mt-[20px] md:mt-[47px]'>
							#{Number(product?.price).toLocaleString()}
						</p>
					</div>
					<div className='px-[26px] bg-white h-max'>
						<p className='font-[500] text-[16px] md:text-[16px]  md:leading-[24px]  text-[#B7B7B7] uppercase mt-[22px] mb-[12px]'>
							Description
						</p>
						<p className='font-[500] text-[16px] md:text-[16px]  md:leading-[24px]  text-black mb-[22px] text-justify '>
							{removePTags(product?.description)}
						</p>
					</div>
				</div>
				<OrderForm product={product} />
			</div>
			<section>
				<Article />
			</section>
		</>
	);
};

export default SingleStore;
