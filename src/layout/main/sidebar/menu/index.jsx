import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "~/utils/consts";
import More from "./more";
import New from "./new";
import { useAccount } from "~/store/auth/hooks";

export default function Menu() {
    const account = useAccount()
    return (
        <nav className="mt-0.5 mb-1" key={account.id}>
            {mainMenu.map((menu, i) => (
                <NavLink key={i} to={typeof menu.path === 'function' ? menu.path() : menu.path} className="py-1 block group">
                    {({ isActive }) => (
                        <div className={classNames("p-3 rounded-full text-[color:var(--color-base)] transition-colors inline-flex items-center gap-5 group-hover:bg-[color:var(--background-third)]", { "font-bold": isActive })}>
                            <div className="w-[26.25px] h-[26.25px] relative">
                                {menu?.notifications ? <span className="w-[18px] h-[18px] rounded-full bg-[color:var(--color-primary)] text-[color:var(--background-primary)] border border-[color:var(--background-primary)] absolute -top-1.5 -right-1 flex items-center justify-center text-[11px]">{menu?.notifications}</span> : ""}
                                {!isActive && menu.icon.passive}
                                {isActive && menu.icon.active}
                            </div>
                            <div className="pr-4  text-xl">
                                {menu.title}
                            </div>
                        </div>
                    )}
                </NavLink>
            ))}
            <More />
            <New />
        </nav >
    )
}