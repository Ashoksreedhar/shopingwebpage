import profile from "../assets/profile.png"
function Banner() {
    return (

        <div className="flex items-center justify-between ">

            <div className="heading">
                <h1 className="text-content">Get up to 30% off <br /> New Arrivals</h1>
                <button className="shop-btn">SHOP NOW</button>
            </div>

            <div className="w-1/2 flex justify-end banner">
                <img src={profile} className="w-100" alt="banner" />
            </div>
        </div>

    )
}

export default Banner;