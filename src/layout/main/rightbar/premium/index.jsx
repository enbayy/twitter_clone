import Button from "~/components/button";


export default function Premium() {
    return (
        <section className="bg-[#16181c] mb-4 rounded-2xl border border-[#16181c] py-3 px-4 flex flex-col gap-2.5 text-[#e7e9ea]"
        >
            <h6 className="text-xl leading-6 font-extrabold">Premium'a Abone Ol</h6>
            <p className="leading-5 text-[15px]">Yeni özelliklerin kilidini açmak için abone olun ve uygun olmanız durumunda gelirin bir kısmını alın.</p>
            <div className="self-start">
                <Button>Abone Ol</Button>
            </div>
        </section>
    )
}