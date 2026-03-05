import { Link } from "react-router";

const Feature1 = () => {
  return (
    <section className="position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_card cs_style_2 position-relative z-1">
          <div className="row cs_gap_y_40">
            <div className="col-lg-6 order-lg-2">
              <div className="cs_card_thumbnail">
                <img src="/assets/img/dashboard-2.png" alt="Dashboard image" />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="cs_card_content">
                <div className="cs_section_heading cs_style_1 cs_mb_34">
                  <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
                    {/* <img src="/assets/img/icons/star-1.svg" alt="Star icon" /> */}
                    <span>Employee Self-Service Portal</span>
                    {/* <img src="/assets/img/icons/star-1.svg" alt="Star icon" /> */}
                  </div>
                  <h2 className="cs_section_title cs_fs_48 cs_semibold wow fadeInUp">
                    Empower Your Employees With Direct Access
                  </h2>
                  <p className="mb-0">
                    Reduce administrative overhead by giving employees direct
                    access to their HR information, payslips, leave balances,
                    and company directory — all from a personalized dashboard.
                  </p>
                </div>
                <div className="cs_service_item cs_radius_15 cs_gray_bg_2 cs_mb_24 cs_active">
                  <h3 className="cs_service_title cs_fs_24 cs_semibold cs_mb_8">
                    Profile & Payslip Access
                  </h3>
                  <p className="mb-0">
                    Employees can view their profiles, submit update requests
                    for HR approval, and access their full payslip history
                    with download capabilities — all in one place.
                  </p>
                </div>
                <div className="cs_service_item cs_radius_15 cs_mb_48">
                  <h3 className="cs_service_title cs_fs_24 cs_semibold cs_mb_8">
                    Company Directory & Org Chart
                  </h3>
                  <p className="mb-0">
                    Browse a searchable company directory and visual
                    organization chart to find colleagues, understand team
                    structures, and stay connected across the organization.
                  </p>
                </div>
                <div className="cs_btns_group">
                  <Link
                    to="/contact"
                    aria-label="Get started button"
                    className="cs_btn cs_style_1 cs_bg_1 cs_fs_14 cs_bold cs_white_color text-uppercase"
                  >
                    <span>Get Started Free</span>
                    <span className="cs_btn_icon">
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </Link>
                  <div className="cs_client_info_wrapper">
                    <img
                      src="/assets/img/customers-group.png"
                      alt="Customers image"
                    />
                    <div>
                      <h3 className="cs_fs_30 cs_semibold mb-0">
                        3.5k <span>+</span>
                      </h3>
                      <p className="cs_heading_color mb-0">Active Users</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_vector_shape_6 position-absolute"></div>
        <div className="cs_vector_shape_7 position-absolute"></div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default Feature1;
