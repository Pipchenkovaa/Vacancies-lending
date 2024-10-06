import { CreateCardTitle } from "./card-title"
import { vacancyCards } from "../../data/vacancies"
import { Description } from "./description"
import { CreateButton } from "./button"

export function CreateCard() {
	return (
		<div className="main-cards-container w-full grid items-center justify-items-center gap-6 py-4 px-4">
			<div className="row-cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				<div className="card-container bg-white w-full h-[320px] lg:h-[330px] xl:h-[320px] rounded-3xl shadow-lg items-center">
					<CreateCardTitle cardWrapper={vacancyCards[0]}/>
					<Description cardWrapper={vacancyCards[0]}/>
					<CreateButton cardWrapper={vacancyCards[0]}/>
				</div>
				<div className="card-container bg-white w-full h-[320px] lg:h-[330px] xl:h-[320px] rounded-3xl shadow-lg items-center">
					<CreateCardTitle cardWrapper={vacancyCards[1]}/>
					<Description cardWrapper={vacancyCards[1]}/>
					<CreateButton cardWrapper={vacancyCards[1]}/>
				</div>
				<div className="card-container bg-white w-full h-[320px] lg:h-[330px] xl:h-[320px] rounded-3xl shadow-lg items-center">
					<CreateCardTitle cardWrapper={vacancyCards[2]}/>
					<Description cardWrapper={vacancyCards[2]}/>
					<CreateButton cardWrapper={vacancyCards[2]}/>
				</div>
				<div className="card-container bg-white w-full h-[320px] lg:h-[330px] xl:h-[320px] rounded-3xl shadow-lg items-center">
					<CreateCardTitle cardWrapper={vacancyCards[3]}/>
					<Description cardWrapper={vacancyCards[3]}/>
					<CreateButton cardWrapper={vacancyCards[3]}/>
				</div>
			</div>

			<div className="row-cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				<div className="card-container bg-white w-full h-[320px] lg:h-[330px] xl:h-[320px] rounded-3xl shadow-lg items-center">
					<CreateCardTitle cardWrapper={vacancyCards[4]}/>
					<Description cardWrapper={vacancyCards[4]}/>
					<CreateButton cardWrapper={vacancyCards[4]}/>
				</div>
				<div className="card-container bg-white w-full h-[320px] lg:h-[330px] xl:h-[320px] rounded-3xl shadow-lg items-center">
					<CreateCardTitle cardWrapper={vacancyCards[5]}/>
					<Description cardWrapper={vacancyCards[5]}/>
					<CreateButton cardWrapper={vacancyCards[5]}/>
				</div>
				<div className="card-container bg-white w-full h-[320px] lg:h-[330px] xl:h-[320px] rounded-3xl shadow-lg items-center">
					<CreateCardTitle cardWrapper={vacancyCards[6]}/>
					<Description cardWrapper={vacancyCards[6]}/>
					<CreateButton cardWrapper={vacancyCards[6]}/>
				</div>
				<div className="card-container bg-white w-full h-[320px] lg:h-[330px] xl:h-[320px] rounded-3xl shadow-lg items-center">
					<CreateCardTitle cardWrapper={vacancyCards[7]}/>
					<Description cardWrapper={vacancyCards[7]}/>
					<CreateButton cardWrapper={vacancyCards[7]}/>
				</div>
			</div>

			<div className="row-cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				<div className="card-container bg-white w-full h-[320px] lg:h-[330px] xl:h-[320px] rounded-3xl shadow-lg items-center">
					<CreateCardTitle cardWrapper={vacancyCards[8]}/>
					<Description cardWrapper={vacancyCards[8]}/>
					<CreateButton cardWrapper={vacancyCards[8]}/>
				</div>
				<div className="card-container bg-white w-full h-[320px] lg:h-[330px] xl:h-[320px] rounded-3xl shadow-lg items-center">
					<CreateCardTitle cardWrapper={vacancyCards[9]}/>
					<Description cardWrapper={vacancyCards[9]}/>
					<CreateButton cardWrapper={vacancyCards[9]}/>
				</div>
			</div>
		</div>
	)
}
