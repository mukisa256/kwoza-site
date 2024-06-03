import "./AboutUsStyles.css"

function AboutUs() {
    return (
        <div className="about-container">
            <p id="t-p">About Us </p>
            <div className="sub-container">
                <div className="cards">
                    <h1>Our history</h1>
                    <p>Our soap company traces its roots back to
                        2024 when Mover started
                        experimenting with natural ingredients in their kitche
                        n to create handcrafted soap bars. Over the years,
                        our dedication to quality and innovation has led us to
                        expand our product line and adopt eco-friendly practices. From humble beginnings to becoming a trusted name in the industry, our journey is a testament
                        to our commitment to excellence and
                        sustainability.</p>
                </div>

                <div className="cards">
                    <h1>Our Mission</h1>
                    <p> To create biodegradable, sustainably
                        sourced soaps that cleanse, moisturize, and protect,
                        all while preserving the natural beauty of our Earth."</p>
                </div>

                <div className="cards">
                    <h1>Our Vission</h1>
                    <p>To be the leading provider of eco-conscious soap
                        products globally, renowned for our commitment
                        to innovation,
                        sustainability, and excellence in quality</p>
                </div>
            </div>


        </div>
    )
}
export default AboutUs;