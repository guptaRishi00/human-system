import { Link } from "react-router";

const Services2 = () => {
  const teamContent = [
    {
      img: "/assets/img/services-icon1.svg",
      title: "Core HR & Employee Admin",
      content:
        "Centralized employee profiles, contract management with versioning, automated probation alerts, and customizable onboarding & offboarding checklists.",
    },
    {
      img: "/assets/img/services-icon2.svg",
      title: "Leave & Absence Management",
      content:
        "Customizable leave policies, automated accruals, multi-step approval workflows, shared team calendars, and real-time leave balance reporting.",
    },
    {
      img: "/assets/img/services-icon3.svg",
      title: "Document Management (HR Vault)",
      content:
        "Secure, permission-based document repository with categorization, role-based access control, and automated expiration alerts for work permits and certifications.",
    },
    {
      img: "/assets/img/services-icon4.svg",
      title: "Performance Management",
      content:
        "Goal setting & tracking with OKRs/KPIs, cascading goals from company to individual, performance review cycles, and self-assessment forms.",
    },
    {
      img: "/assets/img/services-icon5.svg",
      title: "Payroll Management",
      content:
        "Automated payroll runs with salary structure configuration, tax and deduction management, payslip generation, distribution, and compliance reporting.",
    },
    {
      img: "/assets/img/services-icon6.svg",
      title: "Expense Management",
      content:
        "Streamlined expense claim submission with digital receipt upload, customizable expense categories, and multi-level approval workflows with analytics.",
    },
  ];

  return (
    <section className="position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_center_column cs_mb_47 text-center position-relative z-1">
          <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
            {/* <img src="/assets/img/icons/star-1.svg" alt="Star icon" /> */}
            <span>Our Modules</span>
            {/* <img src="/assets/img/icons/star-1.svg" alt="Star icon" /> */}
          </div>
          <h2 className="cs_section_title cs_fs_48 cs_semibold wow fadeInUp">
            Comprehensive HR Modules
          </h2>
          <p className="mb-0">
            Socle RH provides a complete suite of HR modules built with
            multi-tenant architecture, <br /> robust security, and role-based
            access controls.
          </p>
        </div>
        <div className="row cs_row_gap_30 cs_gap_y_30 position-relative z-2">
          {teamContent.map((item, i) => (
            <div key={i} className="col-xl-4 col-md-6">
              <div className="cs_iconbox cs_style_4 cs_radius_15 position-relative overflow-hidden">
                <div className="cs_iconbox_content cs_radius_15 position-relative">
                  <div className="cs_iconbox_header cs_mb_17">
                    <span className="cs_iconbox_icon cs_heading_color">
                      <img src={item.img} alt="img" />
                    </span>
                    <h3 className="cs_iconbox_title cs_fs_24 cs_semibold mb-0">
                      <Link
                        to="/service/service-details"
                        aria-label="Service details page link"
                      >
                        {item.title}
                      </Link>
                    </h3>
                  </div>
                  <div className="cs_iconbox_info">
                    <p className="cs_mb_25">{item.content}</p>
                    <Link
                      to="/service/service-details"
                      aria-label="Service details page link"
                      className="cs_btn cs_style_1 cs_fs_14 cs_bold cs_heading_color text-uppercase"
                    >
                      <span>READ MORE</span>
                      <span className="cs_btn_icon">
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="cs_service_shape position-absolute">
                  <img
                    src="/assets/img/service-shape-2.svg"
                    alt="Vector shape"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cs_service_shape_1 position-absolute start-0 bottom-0">
          <img src="/assets/img/service-shape-1.svg" alt="Service shape" />
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default Services2;
