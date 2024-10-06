export function RightLoginButton() {
	return (
		<div className="hidden sm:flex items-center justify-center min-w-200 max-h-56 rounded-2xl bg-[#f5f5f5] hover:bg-white shadow-md font-['Commissioner'] font-light hover:shadow-myInner hover:shadow-[#bdbdbd] transition-all duration-400">
			<button className="flex items-center justify-center gap-2">
				Выйти из профиля
				<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M6.15165 1.56914H2.87333C2.37649 1.56914 1.9 1.76486 1.54868 2.11325C1.19737 2.46164 1 2.93416 1 3.42685V14.5732C1 15.0658 1.19737 15.5384 1.54868 15.8868C1.9 16.2351 2.37649 16.4309 2.87333 16.4309H6.15165M6.38448 9H17M17 9L12.9439 4.75379M17 9L12.9439 13.2462" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</button>
		</div>
	)
}