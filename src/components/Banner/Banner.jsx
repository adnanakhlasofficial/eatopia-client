const Banner = ({ title, img }) => {
    return (
        <div className="grid place-items-center h-60 !bg-center !bg-cover" style={{
            background: `linear-gradient(180deg, rgba(0,0,0,0.3) 100%, rgba(0,0,0,0.3) 100%), url(${img}) no-repeat center`,
        }}>
            <h2 className="text-3xl font-bold lg:text-4xl !leading-[3rem] text-slate-100">{title}</h2>
        </div>
    );
};

export default Banner;
