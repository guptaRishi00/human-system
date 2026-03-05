import { Link } from "react-router";

const HeroBanner2 = () => {
  const bgImage = "/assets/img/hero-bg-3.svg";

  return (
    <section className="cs_hero cs_style_3 position-relative">
      <div
        className="cs_hero_content cs_bg_filed cs_radius_50 position-relative z-1"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container">
          <div className="row cs_gap_y_40">
            <div className="col-lg-5 order-lg-2">
              <div className="cs_hero_thumbnail">
                <img src="/assets/img/dashboard-1.png" alt="Hero image" />
              </div>
            </div>
            <div className="col-lg-7 order-lg-1">
              <div className="cs_hero_text position-relative z-1">
                <p className="cs_hero_subtitle cs_heading_color cs_heading_font cs_mb_28">
                  <span>Streamline Your HR Operations</span>
                </p>
                <h1 className="cs_hero_title cs_fs_64 cs_mb_18 wow fadeInDown">
                  The All-in-One{" "}
                  <span className="cs_has_shape position-relative">
                    HR SaaS{" "}
                    <img
                      src="/assets/img/rectangle-shape.svg"
                      alt="Rectangle shape"
                    />
                  </span>{" "}
                  Platform
                </h1>
                <p className="cs_hero_desc cs_mb_30">
                  Socle RH empowers businesses with a scalable, secure, and
                  modular HR platform — from employee management and leave
                  tracking to payroll, performance reviews, and beyond.
                </p>
                <div className="cs_btns_group">
                  <Link
                    to="/contact"
                    aria-label="Get started button"
                    className="cs_btn cs_style_1 cs_bg_1 cs_fs_14 cs_bold cs_white_color text-uppercase"
                  >
                    <span>Request a Demo</span>
                    <span className="cs_btn_icon">
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </Link>
                  <Link
                    to="/about"
                    aria-label="About page link"
                    className="cs_btn cs_style_1 cs_outline cs_ cs_fs_14 cs_bold cs_heading_color text-uppercase"
                  >
                    <span>Learn More</span>
                    <span className="cs_btn_icon">
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="cs_hero_shape_1 position-absolute">
            {/* <img src="/assets/img/dna-shape.png" alt="Shape" /> */}
          </div>
          <div className="cs_hero_shape_2 position-absolute">
            {/* <img src="/assets/img/spring-shape-3.svg" alt="Shape" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner2;
