import { Link } from "react-router";

const Blog2 = () => {
  const blogContent = [
    {
      img: "/assets/img/post-img-7.jpg",
      title: "How to Streamline Employee Onboarding with Digital Checklists",
      category: "HR Management",
    },
    {
      img: "/assets/img/post-img-8.jpg",
      title: "5 Ways Automated Payroll Saves Time and Reduces Errors",
      category: "Payroll",
    },
    {
      img: "/assets/img/post-img-9.jpg",
      title: "Building a Performance Review Culture with OKRs and KPIs",
      category: "Performance",
    },
  ];

  return (
    <section className="cs_gray_bg_2">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_mb_40 text-center">
          <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
            {/* <img src="/assets/img/icons/star-1.svg" alt="Star icon" /> */}
            <span>Blog & Resources</span>
            {/* <img src="/assets/img/icons/star-1.svg" alt="Star icon" /> */}
          </div>
          <h2 className="cs_section_title cs_fs_48 cs_semibold mb-0 wow fadeInUp">
            Latest HR Insights & Articles
          </h2>
        </div>
        <div className="row cs_row_gap_30 cs_gap_y_30">
          {blogContent.map((item, i) => (
            <div key={i} className="col-lg-4">
              <article className="cs_post cs_style_2 cs_radius_20">
                <Link
                  to="/blog/blog-details"
                  aria-label="Reading details post link"
                  className="cs_post_thumbnail cs_radius_20 cs_mb_15 position-relative overflow-hidden"
                >
                  <img src={item.img} alt="Post image" />
                </Link>
                <div className="cs_post_content">
                  <div className="cs_post_meta_wrapper cs_mb_18">
                    <div className="cs_post_meta cs_fs_14 cs_medium text-uppercase">
                      <span>{item.category}</span>
                    </div>
                    <div className="cs_post_meta cs_fs_14">
                      <span>June 20, 2025</span>
                    </div>
                  </div>
                  <h3 className="cs_post_title cs_fs_24 cs_semibold cs_mb_19">
                    <Link
                      to="/blog/blog-details"
                      aria-label="Reading details post link"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <div className="cs_post_btn_wrapper">
                    <Link
                      to="/blog/blog-details"
                      aria-label="Reading details post link"
                      className="cs_post_btn cs_fs_14 cs_black text-uppercase"
                    >
                      <span>Read More</span>
                      <span>
                        {" "}
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default Blog2;
