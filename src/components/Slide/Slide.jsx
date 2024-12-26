const Slide = ({ image, title, desc }) => {
    return (
        <div
            className="flex justify-center items-center min-h-[38rem] !bg-cover"
            style={{
                background: `linear-gradient(180deg, rgba(0,0,0,0.7) 100%, rgba(0,0,0,0.7) 100%), url(${image}) no-repeat center`,
            }}
        >
            <div className="max-w-5xl text-center space-y-6">
                <h2 className="text-3xl font-bold lg:text-4xl !leading-[3rem] text-slate-100">
                    {title}
                </h2>
                <p className="text-lg text-slate-200">{desc}</p>
            </div>
        </div>
    );
};

export default Slide;
