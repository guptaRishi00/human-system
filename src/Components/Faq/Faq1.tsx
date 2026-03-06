import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

const Faq1 = () => {
  const faqContent = [
    {
      title: "Q. What is Human Systems, and how can it benefit my business?",
      content:
        "Human Systems is a comprehensive, cloud-based HR SaaS platform that centralizes employee management, leave tracking, payroll, performance reviews, document management, and more. It helps businesses streamline HR operations, reduce admin overhead, and ensure compliance with data protection regulations.",
    },
    {
      title: "Q. How do I get started with Human Systems?",
      content:
        "Getting started is easy — simply choose a plan that fits your team size, and our onboarding team will guide you through the setup. You can import existing employee data, configure leave policies, and customize workflows. Your team will be up and running within days.",
    },
    {
      title: "Q. Can I customize Human Systems to match my company's HR processes?",
      content:
        "Absolutely. Human Systems supports customizable employee profile fields, leave policies, approval workflows, onboarding/offboarding checklists, expense categories, and email templates. The Admin Module gives your HR team full control to tailor the platform to your needs.",
    },
    {
      title: "Q. How secure is our HR data on Human Systems?",
      content:
        "Security is a top priority. Human Systems uses data encryption at rest and in transit, role-based access controls (RBAC), multi-tenant isolation, and regular automated backups. The platform is fully GDPR-compliant and deployed on enterprise-grade infrastructure.",
    },
  ];

  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  const handleItemClick = (index: number) => {
    if (index === openItemIndex) {
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };

  useEffect(() => {
    if (firstItemOpen) {
      const timer = setTimeout(() => {
        setOpenItemIndex(0);
        setFirstItemOpen(false);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [firstItemOpen]);

  return (
    <section className="cs_faq cs_style_1 position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row cs_gap_y_30 position-relative z-1">
          <div className="col-lg-5">
            <div className="cs_section_heading cs_style_1 cs_faq_heading cs_mb_20">
              <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
                {/* <img src="/assets/img/icons/star-1.svg" alt="Star icon" /> */}
                <span>FAQ's</span>
                {/* <img src="/assets/img/icons/star-1.svg" alt="Star icon" /> */}
              </div>
              <h2 className="cs_section_title cs_fs_48 cs_semibold wow fadeInLeft">
                Frequently Asked Questions
              </h2>
              <p className="cs_card_desc cs_mb_32">
                Find answers to the most common questions about Human Systems'
                features, security, and getting started with the platform.
              </p>
              <Link
                to="/faq"
                aria-label="FAQ page link"
                className="cs_btn cs_style_1 cs_bg_1 cs_fs_14 cs_bold cs_white_color text-uppercase"
              >
                <span>Check More FAQ</span>
                <span className="cs_btn_icon">
                  <i className="bi bi-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="cs_faq_wrapper_1">
              {faqContent.map((item, index) => (
                <div
                  key={index}
                  className={`cs_accordian cs_style_2 cs_gray_bg_2 cs_radius_10 position-relative ${index === openItemIndex ? "active" : ""}`}
                >
                  <div
                    onClick={() => handleItemClick(index)}
                    className="cs_accordian_head"
                  >
                    <h3 className="cs_accordian_title cs_fs_20 cs_semibold mb-0">
                      {item.title}
                    </h3>
                    <span className="cs_accordian_toggler cs_center cs_radius_100 position-absolute">
                      <i className="bi bi-chevron-down"></i>
                    </span>
                  </div>
                  <div ref={accordionContentRef} className="cs_accordian_body">
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="cs_faq_shape_3 position-absolute">
          <img src="/assets/img/vector-12.svg" alt="Vector shape" />
        </div>
        <div className="cs_faq_shape_4 position-absolute">
          <img src="/assets/img/vector-13.svg" alt="Vector shape" />
        </div>
        <div className="cs_faq_shape_5 position-absolute">
          <img src="/assets/img/vector-14.svg" alt="Vector shape" />
        </div>
        <div className="cs_faq_shape_6 position-absolute">
          <img src="/assets/img/vector-15.svg" alt="Vector shape" />
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default Faq1;
