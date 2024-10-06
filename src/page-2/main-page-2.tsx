import { HeaderWrapper } from '../page-1/components/header/header'
import { vacancyCards } from '../page-1/data/vacancies'
import { CreateBreadCrumbs } from './components/main/bread-crumbs'
import { CreateVacancyTitle } from './components/main/vacancy-title'
import { CreateDescriptionBlock } from './components/main/description-field'
import { vacancyDescriptionField } from './data/vacancies-description'
import { CreateButtons } from './components/main/buttons'

export const Page2 = () => {
	return (
		<div className="container mx-auto pb-6">
			<HeaderWrapper />
			<CreateBreadCrumbs />
			<CreateVacancyTitle cardWrapper={vacancyCards[0]}/>
			<CreateDescriptionBlock cardDescription={vacancyDescriptionField[0]}/>
			<CreateButtons />
		</div>
	)
}