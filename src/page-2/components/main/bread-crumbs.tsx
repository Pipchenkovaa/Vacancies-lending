import { Link } from 'react-router-dom';

export function CreateBreadCrumbs() {
	return (
		<div className="wrapper grid items-center justify-items-start px-4">
			<Link to='/'>
				<button className="flex gap-3 items-center justify-center text-textDark font-['Commissioner'] font-light">
					<div className='grid items-center bg-[#f5f5f5] w-10 h-8 rounded-xl shadow-md font-bold hover:bg-white hover:shadow-myInner hover:shadow-[#bdbdbd] transition-all duration-400'>
						&lt;
					</div>
					<div className='hover:text-[#9B7C5F] transition-all duration-400'>Назад к вакансиям</div>
				</button>
			</Link>
		</div>
	)
}