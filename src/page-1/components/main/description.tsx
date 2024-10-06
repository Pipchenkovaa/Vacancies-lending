import { VacancyCard } from "../../../model"

interface BodyWrapperProps {
	cardWrapper: VacancyCard
}

export function Description(props: BodyWrapperProps) {
	return (
		<div className="description-wrapper py-[14px] px-7 sm:py-4 xl:py-5 xl:px-5 text-[14px] lg:text-[12px] font-['Commissioner'] font-light text-[#1f1513]">
			<h1>{props.cardWrapper.description[0]}</h1>
			<p>{props.cardWrapper.description[1]}</p>
			<ul>
				<li>{props.cardWrapper.description[2]}</li>
			</ul>
		</div>
	)
}