import { VacancyCard } from "../../../model"
import { Link } from 'react-router-dom';

interface BodyWrapperProps {
	cardWrapper: VacancyCard
}

export function CreateButton(props: BodyWrapperProps) {
	return (
		<Link to='/vacancy-description'>
			<div className="button-wrapper flex justify-center items-end text-[15px] text-white font-['Commissioner'] font-bold pb-4">
				<p className="bg-[#523829] shadow-md hover:bg-[#A2866E] hover:shadow-myInner hover:shadow-[#714932] px-12 lg:px-9 xl:px-12 py-3 rounded-2xl uppercase transition-all duration-400">{props.cardWrapper.status}</p>
			</div>
		</Link>
	)
}