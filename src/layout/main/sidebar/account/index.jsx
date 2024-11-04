import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useAccount } from "~/store/auth/hooks";
import More from "./more";

export default function () {
    const account = useAccount()

    return (
        <div className="mt-auto">
            <Popover className="relative">
                <PopoverButton
                    className="my-3 p-3 rounded-full hover:bg-[#eff3f41a] w-full flex text-left items-center transition-colors outline-none">
                    <img src={account.avatar} className="w-10 h-10 rounded-full" alt="" />
                    <div className="mx-3 text-[15px]">
                        <h6 className="font-bold leading-[20px]">{account.fullName}</h6>
                        <div className="text-[#71767b]">
                            @{account.username}
                        </div>
                    </div>
                    <svg viewBox="0 0 24 24" className="text-[#e7e9ea] ml-auto" width={18.75} height={18.75}><path fill="currentColor" d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></svg>
                </PopoverButton>
                <PopoverPanel className="absolute bottom-full py-3 w-[300px] left-1/2 -translate-x-1/2 bg-black shadow-box rounded-2xl overflow-hidden flex origin-top flex-col transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
                    transition>
                    {({ close }) => (
                        <More close={close} />
                    )}
                </PopoverPanel>
            </Popover>
        </div>
    )
}