import { HeaderWrapper } from './components/header/header.tsx'
import { CreateCard } from './components/main/card.tsx'

export const Page1 = () => {
	return (
		<div className="container mx-auto pb-6">
			<HeaderWrapper />
			<CreateCard />
		</div>
	)
}