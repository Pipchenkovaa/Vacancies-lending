import { vacancyDescription } from "../../../model";

interface BodyWrapperProps {
  cardDescription: vacancyDescription;
}

export function CreateDescriptionBlock(props: BodyWrapperProps) {
	return (
		<div className="relative">
			<div className= "flex items-center gap-4 lg:gap-6 py-1 px-4">
				<div className="bg-white rounded-2xl w-full h-[360px] py-4 px-6 justify-between text-textDark font-['Commissioner'] font-light shadow-md overflow-y-auto">
					{props.cardDescription.description.map((line, index) => {
						if (line.startsWith(' • ')) {
							return <li key={index}> {line.substring(3)} </li>;
						} else if (line.endsWith(':')) {
							return <h2 key={index} className="font-bold text-[18px]"> {line} </h2>;
						} else {
							return <p key={index}> {line} </p>;
						}
					})}
				</div>
			</div>
			<div className="absolute bottom-1 left-4 right-4 rounded-2xl h-12 bg-gradient-to-t from-white to-transparent"></div>
		</div>
);
}
