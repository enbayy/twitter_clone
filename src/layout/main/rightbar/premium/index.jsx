import Button from "~/components/button";


export default function Premium() {
    return (
        <section
            className="bg-[color:var(--background-secondary)] mb-4 rounded-2xl border border-[color:var(--background-secondary)] py-3 px-4 flex flex-col gap-2.5 text-[color:var(--color-base)]"
        >
            <h6 className="text-xl leading-6 font-extrabold">Premium'a Abone Ol</h6>
            <p className="leading-5 text-[15px]">Yeni özelliklerin kilidini açmak için abone olun ve uygun olmanız durumunda gelirin bir kısmını alın.</p>
            <div className="self-start">
                <Button>Abone Ol</Button>
            </div>
        </section>
    )
}