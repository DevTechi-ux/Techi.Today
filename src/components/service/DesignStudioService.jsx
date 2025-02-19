import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Service21 from "../../../public/assets/imgs/service/2/1.png";
import Service22 from "../../../public/assets/imgs/service/2/2.png";
import Service23 from "../../../public/assets/imgs/service/2/3.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const DesignStudioService = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        let animation__services2 = gsap.utils.toArray(
          ".animation__service-2 .service__item-2"
        );
        gsap.set(animation__services2, {
          opacity: 0,
          x: -30,
        });

        if (animation__services2) {
          if (device_width < 1023) {
            animation__services2.forEach((item, i) => {
              gsap.to(item, {
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                  markers: false,
                },
                opacity: 1,
                x: 0,
                ease: "power2.out",
                duration: 2,
                stagger: {
                  each: 0.4,
                },
              });
            });
          } else {
            gsap.to(".animation__service-2 .service__item-2", {
              scrollTrigger: {
                trigger: ".animation__service-2",
                start: "top center+=200",
                markers: false,
              },
              opacity: 1,
              x: 0,
              ease: "power2.out",
              duration: 2,
              stagger: {
                each: 0.4,
              },
            });
          }
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="service__area-2 pt-130 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-text text-anim">
                <p>
                  We are passionate to create connected brands and services, and
                  campaigns to enable stable and successful relationships
                  between businesses and customers.
                </p>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">
                Turning Ideas into Impactful Solutions — With a streamlined process from start to finish.
                </h2>
              </div>
            </div>
          </div>

          <div className="row pt-140">
            <div className="col-xxl-12">
              <div className="service__list-2 animation__service-2">
                <div className="service__item-2">
                  <div>
                    <Image
                      priority
                      width={102}
                      height={114}
                      src={Service21}
                      alt="Service Icon"
                    />
                    <h3 className="service__title-2">
                    Step 1: Ideation  <br />
                    & Strategy
                    </h3>
                    <p>
                    We kick off by understanding your goals, gathering insights, and creating a roadmap for success. Through careful analysis and strategic planning, we lay the foundation for a custom solution that fits your needs.
                    </p>
                    <ul>
                      <li>+ Defining goals and objectives</li>
                      <li>+ Creating a strategic project plan</li>
                      <li>+ Selecting the right tools and technologies</li>
                    </ul>
                  </div>
                </div>
                <div className="service__item-2">
                  <div>
                    <Image
                      priority
                      width={107}
                      height={114}
                      src={Service22}
                      alt="Service Icon"
                    />
                    <h3 className="service__title-2 ">
                    Step 2: Design <br />
                    & Development
                    </h3>
                    <p>
                    Once the plan is in place, we move into design and development. Our team brings your vision to life with user-centric designs and efficient, scalable code. Every feature is crafted to enhance functionality and performance.
                    </p>
                    <ul>
                      <li>+ Developing user-friendly designs</li>
                      <li>+ Building with agile development</li>
                      <li>+ Iterative progress with your feedback</li>
                    </ul>
                  </div>
                </div>
                <div className="service__item-2">
                  <div>
                    <Image
                      priority
                      width={112}
                      height={114}
                      src={Service23}
                      alt="Service Icon"
                    />
                    <h3 className="service__title-2">
                    Step 3: Testing,  <br />
                    Launch & Support
                    </h3>
                    <p>
                    Before launch, we rigorously test the solution to ensure it's flawless. We handle the deployment and provide ongoing support, making sure your product performs at its best post-launch.
                    </p>
                    <ul>
                      <li>+ Quality assurance and testing</li>
                      <li>+ Seamless deployment</li>
                      <li>+ Continuous support and maintenance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-xxl-12">
              <div className="service__btn-2 btn_wrapper">
                <Link
                  href="/service"
                  className="wc-btn-pink btn-hover btn-item"
                >
                  <span></span> View <br />
                  all services
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default DesignStudioService;
