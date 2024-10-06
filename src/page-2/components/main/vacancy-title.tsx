import { VacancyCard } from "../../../model"

interface BodyWrapperProps {
	cardWrapper: VacancyCard
}

export function CreateVacancyTitle(props: BodyWrapperProps) {
	return (
		<div className="main-title-container w-full flex items-center justify-center gap-4 lg:gap-6 py-6 px-4">
			<div className="vacancy-name w-[900px] h-[100px] bg-[#f5f5f5] rounded-2xl shadow-md">
				<p className="uppercase block pt-4 xl:pt-5 px-6 font-['Commissioner'] font-light text-[14px] text-[#616161]">вакансия</p>
				<h1 className="px-6 font-['Commissioner'] font-bold pt-2 lg:pt-2 text-[20px] md:text-[24px] lg:text-[30px] leading-5 text-textDark">{props.cardWrapper.title}</h1>
			</div>
			<div className="w-[300px] h-[100px] bg-[#f5f5f5] rounded-2xl shadow-md">
				<p className="uppercase block pt-4 xl:pt-5 px-6 font-['Commissioner'] font-light text-[10px] lg:text-[14px] text-[#616161]">формат работы</p>
				<h1 className="uppercase pt-[6px] xl:pt-3 px-6 font-['Commissioner'] font-bold text-textDark text-[14px] lg:text-[15px] xl:text-[17px] leading-5">{props.cardWrapper.category}</h1>
			</div>
			<div className="flex justify-center gap-3 items-center w-[300px] h-[100px] bg-[#f5f5f5] rounded-2xl shadow-md transition-all duration-400">
				<a href={props.cardWrapper.url}>
					<p className="hidden lg:flex uppercase font-['Commissioner'] font-light lg:text-[12px] xl:text-[14px] text-[#616161] hover:text-[#9B7C5F]">посмотреть {<br></br>} вакансию</p>
				</a>
				<div className="hh-link-wrapper flex justify-center bg-[#f5f5f5] hover:bg-white hover:shadow-myInner hover:shadow-[#bdbdbd] min-w-[60px] h-[60px] xl:min-w-[90px] xl:h-[60px] rounded-full xl:rounded-2xl shadow-md transition-all duration-400">
					<a href={props.cardWrapper.url} className="flex items-center gap-3">
						<svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M14.7799 0.0439987C9.25589 0.487999 4.43189 3.66 1.83189 8.56C0.0918867 11.84 -0.436113 15.812 0.383887 19.5C1.55589 24.756 5.35589 29.112 10.4119 30.996C13.4039 32.108 16.7199 32.3 19.8399 31.536C24.9399 30.288 29.1559 26.528 30.9959 21.592C32.0559 18.744 32.2759 15.644 31.6359 12.624C30.5199 7.336 26.6839 2.904 21.5839 1.004C19.4679 0.216 16.9879 -0.136 14.7799 0.0439987ZM9.03989 10.96V13.68L9.34389 13.38C10.1639 12.568 11.0879 12.204 12.1999 12.252C12.7919 12.276 13.2039 12.376 13.6599 12.596C14.5719 13.036 15.0599 13.704 15.2679 14.812C15.3199 15.088 15.3319 15.704 15.3479 18.808L15.3639 22.48H14.0679H12.7679L12.7479 19.188C12.7279 15.684 12.7199 15.488 12.5319 15.068C12.1959 14.316 11.1279 14.056 10.1999 14.504C9.67189 14.756 9.32389 15.236 9.15189 15.956C9.06789 16.288 9.06389 16.408 9.05189 19.388L9.03589 22.48H7.71589H6.39989V15.36V8.24H7.71989H9.03989V10.96ZM19.2399 10.968V13.692L19.5319 13.416C20.0839 12.88 20.5959 12.564 21.2199 12.376C21.5519 12.272 21.6319 12.264 22.2599 12.264C23.0439 12.268 23.3399 12.328 23.9039 12.6C24.8439 13.052 25.3479 13.808 25.5239 15.02C25.5559 15.236 25.5759 16.5 25.5879 18.908L25.6079 22.48H24.2839H22.9599V19.3C22.9599 15.992 22.9399 15.528 22.7959 15.132C22.6439 14.736 22.2279 14.408 21.7519 14.32C20.8479 14.148 19.9439 14.584 19.5799 15.368C19.2799 16.02 19.2439 16.528 19.2399 19.888V22.48H17.9399H16.6399V15.36V8.24H17.9399H19.2399V10.968Z" fill="#870D0F"/>
						</svg>
						<p className="hidden xl:flex font-['Commissioner'] font-bold text-[16px] text-[#616161]">&gt;</p>
					</a>
				</div>
			</div>
		</div>
	)
}