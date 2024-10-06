import { LeftMenuButtons } from "./header-menu"
import { RightLoginButton } from "./header-login-button"

export function HeaderWrapper() {
	return (
		<div className="grid">
			<nav className="flex justify-between py-30 px-4">
				<LeftMenuButtons/>
				<RightLoginButton/>
			</nav>
		</div>
	)
}