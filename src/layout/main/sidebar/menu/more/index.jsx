import { Popover, PopoverPanel, Disclosure, DisclosurePanel, DisclosureButton, PopoverButton } from "@headlessui/react";
import { Link } from "react-router-dom";
import { setModal } from "~/store/modal/actions";

export default function More() {
    return (
        <Popover className="relative  text-[color:var(--color-base)]">
            <PopoverButton className="py-[3px] block group outline-none">
                <div
                    className="p-3 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-[color:var(--background-third)]">
                    <div className="w-[26.25px] h-[26.25px] relative">
                        <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block"><path fill="currentColor" d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path></svg>
                    </div>
                    <div className="pr-4 text-xl">
                        Daha fazla
                    </div>
                </div>
            </PopoverButton>

            <PopoverPanel className="w-[318px] absolute bottom-0  left-0 bg-[color:var(--background-primary)] shadow-box rounded-xl overflow-hidden">
                <Link
                    className="px-4 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-[color:var(--background-secondary)]">
                    <div className="w-[26.25px] h-[26.25px] relative">
                        <svg viewBox="0 0 24 24" width={24} height={24} className="block">
                            <path
                                fill="currentColor"
                                d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"
                            />
                        </svg>
                    </div>
                    <div className="pr-4 text-xl font-bold">
                        Listeler
                    </div>
                </Link>
                <Link
                    className="px-4 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-[color:var(--background-secondary)]">
                    <div className="w-[26.25px] h-[26.25px] relative">
                        <svg viewBox="0 0 24 24" width={24} height={24} className="block">
                            <path
                                fill="currentColor"
                                d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"
                            />
                        </svg>
                    </div>
                    <div className="pr-4 text-xl font-bold">
                        Yer İmleri
                    </div>
                </Link>
                <Link
                    className="px-4 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-[color:var(--background-secondary)]">
                    <div className="w-[26.25px] h-[26.25px] relative">
                        <svg viewBox="0 0 24 24" width={24} height={24} className="block">
                            <path
                                fill="currentColor"
                                d="M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z"
                            />
                        </svg>
                    </div>
                    <div className="pr-4 text-xl font-bold">
                        Para kazanma
                    </div>
                </Link>
                <Link
                    className="px-4 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-[color:var(--background-secondary)]">
                    <div className="w-[26.25px] h-[26.25px] relative">
                        <svg viewBox="0 0 24 24" width={24} height={24} className="block">
                            <path
                                fill="currentColor"
                                d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"
                            />
                        </svg>
                    </div>
                    <div className="pr-4 text-xl font-bold">
                        Analitik
                    </div>
                </Link>
                <Link
                    className="px-4 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-[color:var(--background-secondary)]">
                    <div className="w-[26.25px] h-[26.25px] relative">
                        <svg viewBox="0 0 24 24" width={24} height={24} className="block">
                            <path
                                fill="currentColor"
                                d="M19.5 6H17V4.5C17 3.12 15.88 2 14.5 2h-5C8.12 2 7 3.12 7 4.5V6H4.5C3.12 6 2 7.12 2 8.5v10C2 19.88 3.12 21 4.5 21h15c1.38 0 2.5-1.12 2.5-2.5v-10C22 7.12 20.88 6 19.5 6zM9 4.5c0-.28.23-.5.5-.5h5c.28 0 .5.22.5.5V6H9V4.5zm11 14c0 .28-.22.5-.5.5h-15c-.27 0-.5-.22-.5-.5v-3.04c.59.35 1.27.54 2 .54h5v1h2v-1h5c.73 0 1.41-.19 2-.54v3.04zm0-6.49c0 1.1-.9 1.99-2 1.99h-5v-1h-2v1H6c-1.1 0-2-.9-2-2V8.5c0-.28.23-.5.5-.5h15c.28 0 .5.22.5.5v3.51z"
                            />
                        </svg>
                    </div>
                    <div className="pr-4 text-xl font-bold">
                        İşler
                    </div>
                </Link>
                <Link
                    className="px-4 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-[color:var(--background-secondary)]">
                    <div className="w-[26.25px] h-[26.25px] relative">
                        <svg viewBox="0 0 24 24" width={24} height={24} className="block">
                            <path
                                fill="currentColor"
                                d="M12 22.25c-4.99 0-9.18-3.393-10.39-7.994l1.93-.512c.99 3.746 4.4 6.506 8.46 6.506s7.47-2.76 8.46-6.506l1.93.512c-1.21 4.601-5.4 7.994-10.39 7.994zM5 11.5c0 3.866 3.13 7 7 7s7-3.134 7-7V8.75c0-3.866-3.13-7-7-7s-7 3.134-7 7v2.75zm12-2.75v2.75c0 2.761-2.24 5-5 5s-5-2.239-5-5V8.75c0-2.761 2.24-5 5-5s5 2.239 5 5zM11.25 8v4.25c0 .414.34.75.75.75s.75-.336.75-.75V8c0-.414-.34-.75-.75-.75s-.75.336-.75.75zm-3 1v2.25c0 .414.34.75.75.75s.75-.336.75-.75V9c0-.414-.34-.75-.75-.75s-.75.336-.75.75zm7.5 0c0-.414-.34-.75-.75-.75s-.75.336-.75.75v2.25c0 .414.34.75.75.75s.75-.336.75-.75V9z"
                            />
                        </svg>
                    </div>
                    <div className="pr-4 text-xl font-bold">
                        Alanınızı Yaratın
                    </div>
                </Link>
                <Link
                    className="px-4 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-[color:var(--background-secondary)]">
                    <div className="w-[26.25px] h-[26.25px] relative">
                        <svg viewBox="0 0 24 24" width={24} height={24} className="block">
                            <path
                                fill="currentColor"
                                d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"
                            />
                        </svg>
                    </div>
                    <div className="pr-4 text-xl font-bold">
                        Ayarlar ve Gizlilik
                    </div>
                </Link>

                <div className="h-px bg-[color:var(--background-third)] my-0.5 w-[89%] mx-auto">

                </div>

                <Disclosure>
                    {({ open }) => (
                        <>
                            <DisclosureButton className="h-[52px] flex items-center px-4 font-bold justify-between w-full transition-colors hover:bg-[color:var(--background-secondary)]">
                                İçerik Üreticisi Stüdyosu
                                <svg viewBox="0 0 24 24" width={18.75} height={18.75} className={`-rotate-90 ${open ? '-rotate-90' : 'rotate-90'}`}>
                                    <path
                                        fill={`${open ? 'currentColor' : "currentColor"}`}
                                        d="M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z"
                                    />
                                </svg>

                            </DisclosureButton>
                            <DisclosurePanel>
                                <Link to="/" className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[color:var(--background-secondary)]">
                                    <svg
                                        viewBox="0 0 24 24" width={18.75} height={18.75} >
                                        <path
                                            fill="currentColor"
                                            d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"
                                        />
                                    </svg>
                                    İstatistikler
                                </Link>
                            </DisclosurePanel>
                        </>
                    )}
                </Disclosure>

                <Disclosure>
                    {({ open }) => (
                        <>
                            <DisclosureButton className="h-[52px] flex items-center px-4 font-bold justify-between w-full transition-colors hover:bg-[color:var(--background-secondary)]">
                                Profesyonel Araçlar
                                <svg viewBox="0 0 24 24" width={18.75} height={18.75} className={`block -rotate-90 ${open ? '-rotate-90' : 'rotate-90'}`} >
                                    <path
                                        fill={`${open ? 'currentColor' : "currentColor"}`}
                                        d="M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z"
                                    />
                                </svg>
                            </DisclosureButton>
                            <DisclosurePanel>
                                <Link to="/" className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[color:var(--background-secondary)]">
                                    <svg viewBox="0 0 24 24" width={18.75} height={18.75} >
                                        <path
                                            fill="currentColor"
                                            d="M1.996 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.38 0 2.5 1.12 2.5 2.5v13c0 1.38-1.12 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.277 0-.5.22-.5.5v13c0 .28.223.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zm8.085 5H8.996V8h7v7h-2v-3.59l-5.293 5.3-1.415-1.42L12.581 10z"
                                        />
                                    </svg>
                                    Reklamlar
                                </Link>
                                <button
                                    onClick={() => setModal('appearance')}
                                    className="flex items-center px-3 h-11 w-full gap-3 text-[15px] font-medium hover:bg-[color:var(--background-secondary)]">
                                    <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                                        <path
                                            fill="currentColor"
                                            d="M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z"
                                        />
                                    </svg>
                                    Görünüm
                                </button>
                            </DisclosurePanel>
                        </>
                    )}
                </Disclosure>
            </PopoverPanel>

        </Popover >
    )
}