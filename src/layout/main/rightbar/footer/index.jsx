import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="mb-4 px-4 flex flex-wrap gap-2">
            <Link to="/" className="text-[color:var(--color-base-secondary)] leading-4 text-[13px] hover:underline">Hizmet Şartları</Link>
            <Link to="/" className="text-[color:var(--color-base-secondary)] leading-4 text-[13px] hover:underline">Gizlilik Politikası</Link>
            <Link to="/" className="text-[color:var(--color-base-secondary)] leading-4 text-[13px] hover:underline">Çerez Politikası</Link>
            <Link to="/" className="text-[color:var(--color-base-secondary)] leading-4 text-[13px] hover:underline">Imprint</Link>
            <Link to="/" className="text-[color:var(--color-base-secondary)] leading-4 text-[13px] hover:underline">Erişebilirlik</Link>
            <Link to="/" className="text-[color:var(--color-base-secondary)] leading-4 text-[13px] hover:underline">Reklam bilgisi</Link>
            <div className="w-full flex gap-2">
                <Popover className="relative inline-flex leading-4">
                    <PopoverButton
                        className="text-[color:var(--color-base-secondary)] outline-none leading-4 text-[13px] hover:underline inline-flex items-center">
                        Daha fazla
                        <svg viewBox="0 0 24 24" className="h-[1em] px-0.5">
                            <path
                                fill="currentColor"
                                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                        </svg>
                    </PopoverButton>
                    <PopoverPanel className="w-[150px] max-w-[384px] bg-[color:var(--background-primary)] shadow-box rounded-xl absolute bottom-0 right-0 grid overflow-hidden">
                        <Link
                            to="/"
                            className="py-3 px-4 text-white text-[15px] leading-5 font-bold hover:bg-[color:var(--background-secondary)] transition-colors "
                        >
                            Hakkında
                        </Link>
                        <Link
                            to="/"
                            className="py-3 px-4 text-white text-[15px] leading-5 font-bold hover:bg-[color:var(--background-secondary)] transition-colors "
                        >
                            Durum
                        </Link>
                        <Link
                            to="/"
                            className="py-3 px-4 text-white text-[15px] leading-5 font-bold hover:bg-[color:var(--background-secondary)] transition-colors "
                        >
                            İşletmeler için X
                        </Link>
                        <Link
                            to="/"
                            className="py-3 px-4 text-white text-[15px] leading-5 font-bold hover:bg-[color:var(--background-secondary)] transition-colors "
                        >
                            Geliştiriciler
                        </Link>
                    </PopoverPanel>
                </Popover>
            </div>
            <p className="text-[color:var(--color-base-secondary)] leading-4 text-[13px]">© 2024 ENBAY</p>
        </footer >
    )
}