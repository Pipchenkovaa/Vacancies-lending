export function LeftMenuButtons() {
	return (
		<nav className="flex items-center justify-center gap-1 min-w-380 p-2 max-h-48 text-base rounded-2xl bg-[#f5f5f5] text-textDark font-['Commissioner'] font-light shadow-md">
			<div className="menu-button-section py-2 px-3 hover:text-[#9B7C5F] transition-all duration-400">
				<p className="">Главная</p>
			</div>
			<div className="menu-button-section py-2 px-3 rounded-xl hover:text-[#9B7C5F] transition-all duration-400">
				<p>F.A.Q.</p>
			</div>
			<div className="menu-button-section py-2 px-3 rounded-xl bg-white shadow-myInner shadow-[#bdbdbd]">
				<p>Вакансии</p>
			</div>
			<div className="menu-button-section py-2 px-3 hover:text-[#9B7C5F] transition-all duration-400">
				<p>Контакты</p>
			</div>
		</nav>
	)
}
