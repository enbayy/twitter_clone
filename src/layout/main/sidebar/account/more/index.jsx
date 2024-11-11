import classNames from "classnames"
import { setCurrentAccount } from "~/store/auth/actions"
import { useAccount, useAccounts } from "~/store/auth/hooks"

export default function More({ close }) {
    const currentAccount = useAccount()
    const accounts = useAccounts()

    return (
        <div>
            {accounts.map(account => (
                <button
                    type="button"
                    disabled={currentAccount.id === account.id}
                    onClick={() => {
                        setCurrentAccount(account)
                        close()
                    }} className={classNames("py-3 px-4 flex items-center text-left w-full transition-colors", { "hover:bg-[#eff3f41a]": currentAccount.id !== account.id })}
                >
                    <img src={account.avatar} className="w-10 h-10 rounded-full" alt="" />
                    <div className="mx-3 flex-1 text-[15px]">
                        <h6 className="font-bold leading-[20px]">{account.fullName}</h6>
                        <div className="text-[color:var(--color-base-secondary)]">
                            @{account.username}
                        </div>
                    </div>
                    {currentAccount.id === account.id && (
                        <svg viewBox="0 0 24 24" width="18.75" height="18.75" className="block mr-2 ml-3">
                            <circle cx="12" cy="12" r="11" fill="#28a745" />
                            <path fill="none" d="M4.5 12l5 5L19.5 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )}
                </button>
            ))}
            <div className="h-px bg-[#2f3336] my-3"></div>
            <button className="py-3 px-4 text-left transition-colors hover:bg-[#eff3f41a] w-full text-[color:var(--color-base)] text-[15px] font-bold leading-[20px]">Var olan bir hesap ekle</button>
            <button className="py-3 px-4 text-left transition-colors hover:bg-[#eff3f41a] w-full text-[color:var(--color-base)] text-[15px] font-bold leading-[20px]">Hesapları yönet</button>
            <button className="py-3 px-4 text-left transition-colors hover:bg-[#eff3f41a] w-full text-[color:var(--color-base)] text-[15px] font-bold leading-[20px]">
                <div className="max-w-[228px]">
                    @{currentAccount.username} hesabından çıkış yap
                </div>
            </button>
        </div>
    )
}