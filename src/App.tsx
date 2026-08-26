import { useEffect, useState } from "react";
import logoSeal from "./assets/logo-seal.png";
import heroUniforms from "./assets/hero-uniforms.png";
import fleetVehicle from "./assets/fleet-vehicle.png";
import trainingGroup from "./assets/training-group.png";
import trainingClassroom from "./assets/training-classroom.png";
import trainingTeam from "./assets/training-team.png";
import trainingWaterRescue from "./assets/training-water-rescue.png";

// Group of companies logos
import matrixCorporateLogo from "./assets/logos/matrix-corporate.png";
import starmatrixLogo from "./assets/logos/starmatrix.png";
import summitProtectionLogo from "./assets/logos/summit-protection.png";

// Credential logos
import operatingLicenseLogo from "./assets/logos/operating-license.png";
import qmsLogo from "./assets/logos/qms.png";
import membershipLogo from "./assets/logos/membership.png";
import agencyLogo from "./assets/logos/agency.png";
import laborLogo from "./assets/logos/labor.png";
import taxLogo from "./assets/logos/tax.png";
import lguLogo from "./assets/logos/lgu.png";
import firearmsLogo from "./assets/logos/firearms.png";
import trainingCredLogo from "./assets/logos/training.png";

// Client logos
// import smartLogo from "./assets/logos/smart.png";
// import pldtLogo from "./assets/logos/pldt.png";
// import digitelSunLogo from "./assets/logos/digitel-sun.png";

// import unityDigitalLogo from "./assets/logos/unity-digital.png";
// import edotcoLogo from "./assets/logos/edotco.png";
// import edgepointLogo from "./assets/logos/edgepoint.png";
// import frontierTowerLogo from "./assets/logos/frontier-tower.png";

// import unionbankLogo from "./assets/logos/unionbank.png";
// import citysavingsLogo from "./assets/logos/citysavings.png";

// import sanMiguelFoodsLogo from "./assets/logos/san-miguel-foods.png";
// import purefoodsLogo from "./assets/logos/purefoods.png";

// import ortigasResidenceLogo from "./assets/logos/ortigas-residence.png";
// import cargoSafewayLogo from "./assets/logos/cargo-safeway.png";

// import essilorLogo from "./assets/logos/essilor.png";

// import philexLogo from "./assets/logos/philex.png";
// import nissanLogo from "./assets/logos/nissan.png";

// import lifelineLogo from "./assets/logos/lifeline.png";
// import tv5Logo from "./assets/logos/tv5.png";
// import cignalLogo from "./assets/logos/cignal.png";

import "./App.css";

function App() {
  const trainingImages = [
    {
      src: trainingClassroom,
      alt: "Mega-Matrix Security personnel attending classroom training",
    },
    {
      src: trainingGroup,
      alt: "Mega-Matrix Security personnel during field training",
    },
    {
      src: trainingTeam,
      alt: "Mega-Matrix Security personnel during team training",
    },
    {
      src: trainingWaterRescue,
      alt: "Mega-Matrix Security personnel during water rescue training",
    },
  ];

  const [trainingIndex, setTrainingIndex] = useState(0);

  const nextTrainingImage = () => {
    setTrainingIndex((current) => (current + 1) % trainingImages.length);
  };

  const previousTrainingImage = () => {
    setTrainingIndex(
      (current) =>
        (current - 1 + trainingImages.length) % trainingImages.length,
    );
  };
  useEffect(() => {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    const toggle = document.getElementById("menuToggle");
    const navList = document.getElementById("navList");

    const onToggle = () => navList?.classList.toggle("open");
    toggle?.addEventListener("click", onToggle);

    const links = navList ? Array.from(navList.querySelectorAll("a")) : [];
    const onLinkClick = () => navList?.classList.remove("open");
    links.forEach((a) => a.addEventListener("click", onLinkClick));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    // Active nav link on scroll
    const sections = Array.from(
      document.querySelectorAll("main section[id], section[id]"),
    );
    const navAnchors = navList
      ? Array.from(navList.querySelectorAll('a[href^="#"]'))
      : [];
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          const link = navAnchors.find(
            (a) => a.getAttribute("href") === `#${id}`,
          );
          if (!link) return;
          if (entry.isIntersecting) {
            navAnchors.forEach((a) => a.classList.remove("active"));
            link.classList.add("active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => spy.observe(s));

    return () => {
      toggle?.removeEventListener("click", onToggle);
      links.forEach((a) => a.removeEventListener("click", onLinkClick));
      io.disconnect();
      spy.disconnect();
    };
  }, []);

  return (
    <>
      {/* HEADER */}
      <header>
        <div className="navbar">
          <a href="#home" className="brand">
            <img src={logoSeal} alt="Mega-Matrix Security seal logo" />
            <span className="brand-text">
              <b>MEGA-MATRIX SECURITY</b>
              <span>EST. 1995 · ISO 9001-2015 CERTIFIED</span>
            </span>
          </a>

          <button
            className="menu-toggle"
            id="menuToggle"
            aria-label="Toggle navigation"
            aria-controls="navList"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav>
            <ul id="navList">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#presence">Nationwide</a>
              </li>
              {/* <li>
                <a href="#clients">Clients</a>
              </li> */}
              <li>
                <a href="#credentials">Credentials</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">Company Profile · Philippines</div>

              <div className="hero-headline">
                <img
                  src={logoSeal}
                  alt="Mega-Matrix Security seal logo"
                  className="hero-headline-logo reveal"
                />

                <h1>
                  Thirty-one years of
                  <br />
                  <em>disciplined</em> security,
                  <br />
                  deployed nationwide.
                </h1>
              </div>

              <p className="lead">
                Mega-Matrix Security, Inc. supplies trained, screened, and
                licensed security personnel — posted guards, security drivers,
                and armored car security — to telecoms, banks, manufacturers,
                and property owners across the Philippines.
              </p>

              <div className="hero-actions">
                {/* <a href="#contact" className="btn btn-primary">
                  Request a Security Assessment
                </a> */}
                <a href="#services" className="btn btn-primary">
                  View Services
                </a>
              </div>

              <div className="credential-strip">
                <span className="chip">ISO 9001-2015</span>
                <span className="chip">TAPA APAC Member</span>
                <span className="chip">PADPAO Certified</span>
                <span className="chip">SOSIA / TESDA Accredited Training</span>
              </div>
            </div>

            <div className="hero-photo reveal">
              <div className="frame">
                <img
                  src={heroUniforms}
                  alt="Mega-Matrix Security personnel in uniform"
                />
                <div className="frame-veil" aria-hidden="true"></div>
              </div>

              <div className="hero-tag">
                Field-ready personnel · NCR to Mindanao
              </div>
            </div>
          </div>
        </div>

        <div className="ledger">
          <div className="wrap">
            <div className="ledger-row">
              <div className="ledger-cell">
                <div className="ledger-num">
                  31<span>+</span>
                </div>
                <div className="ledger-label">Years in operation</div>
              </div>
              <div className="ledger-cell">
                <div className="ledger-num">5</div>
                <div className="ledger-label">
                  Head office + satellite offices
                </div>
              </div>
              <div className="ledger-cell">
                <div className="ledger-num">
                  12<span>+</span>
                </div>
                <div className="ledger-label">Industries served</div>
              </div>
              <div className="ledger-cell">
                <div className="ledger-num">14</div>
                <div className="ledger-label">Affiliated group companies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-pad" id="about">
        <div className="wrap">
          <div className="eyebrow reveal">Our Company</div>

          <div className="head-row reveal">
            <h2>
              Built as a security agency —
              <br />
              grown into a security group.
            </h2>
          </div>

          <div className="about-grid">
            <div className="reveal">
              <p>
                Mega-Matrix Security, Inc. is one of the leading security
                service providers in the country. We have been in the business
                for thirty-one (31) years, providing quality and excellent
                security services nationwide.
              </p>

              <p>
                We offer a complete portfolio of security services, including
                security guards, security drivers, and armored car security. We
                also conduct security assessment, investigation, and
                intelligence gathering as requested by our valued clients.
              </p>

              <p>
                Every guard we deploy is trained through our own in-house
                facility, screened through our own accredited testing center,
                and supervised through a nationwide chain of area supervisors
                and regional operations managers.
              </p>

              <div className="divider"></div>

              <div className="values-row">
                <div className="value-box">
                  <div className="fil">Makadiyos</div>
                  <div className="en">God-fearing</div>
                </div>
                <div className="value-box">
                  <div className="fil">Maasahan</div>
                  <div className="en">Dependable</div>
                </div>
                <div className="value-box">
                  <div className="fil">Malasakit</div>
                  <div className="en">Compassionate care</div>
                </div>
              </div>
            </div>

            <div className="reveal">
              <div className="vm-card">
                <h4>Corporate Vision</h4>
                <p>
                  It is our vision to be among the top in the security industry
                  and recognized nationwide as a reliable provider of quality
                  security services to our valued clients.
                </p>
              </div>

              <div className="vm-card">
                <h4>Corporate Mission</h4>
                <p>
                  We commit to provide quality and reliable security services to
                  our clients, to become the best and most distinct in the
                  industry.
                </p>
              </div>

              <div className="vm-card">
                <h4>How We Train</h4>
                <p>
                  Personnel are trained by our own Matrix Training Center,
                  accredited by SOSIA and TESDA, and must pass
                  neuro-psychological, drug, and medical screening at our own
                  DOH-accredited testing center before deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad services-dark" id="services">
        <div className="wrap">
          <div className="eyebrow reveal">What We Deploy</div>

          <div className="head-row reveal">
            <h2>Three core services, one command structure.</h2>
            <p>
              Every engagement is backed by the same recruitment, training, and
              supervision standard — regardless of site or industry.
            </p>
          </div>
        </div>

        <div className="wrap" style={{ padding: 0 }}>
          <div className="svc-grid reveal">
            <div className="svc-card">
              <div className="svc-num">01 / GUARDING</div>
              <h3>Posted Guard</h3>
              <p>
                Stationary and roving security officers for offices, plants,
                residences, and retail sites — screened, licensed, and
                supervised by area inspectors.
              </p>
            </div>

            <div className="svc-card">
              <div className="svc-num">02 / MOBILITY</div>
              <h3>Security Driver &amp; Escort</h3>
              <p>
                Licensed drivers holding restriction-code 123 licenses, trained
                for executive transport and quick-response deployment.
              </p>
            </div>

            <div className="svc-card">
              <div className="svc-num">03 / CASH-IN-TRANSIT</div>
              <h3>Bank &amp; Armored Car Security</h3>
              <p>
                Armed personnel and armored vehicles for cash-in-transit, branch
                security, and asset protection, aligned with TAPA APAC
                standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NATIONWIDE PRESENCE */}
      <section className="section-pad" id="presence">
        <div className="wrap">
          <div className="eyebrow reveal">Nationwide Presence</div>

          <div className="head-row reveal">
            <h2>One head office, four regional satellites.</h2>
            <p>
              Positioned for direct field supervision from Northern Luzon to the
              Visayas.
            </p>
          </div>

          <div className="presence-grid">
            <div className="reveal">
              <div className="office-list">
                <div className="office-row">
                  <div className="office-tag">Head Office</div>
                  <div>
                    <h4>Novaliches, Quezon City</h4>
                    <p>
                      Lot 18, Blk 1, Jordan Plains III, Brgy. Pasong Putik
                      Proper, Novaliches, Quezon City
                    </p>
                  </div>
                </div>

                <div className="office-row">
                  <div className="office-tag">Satellite</div>
                  <div>
                    <h4>Batangas City</h4>
                    <p>Brgy. Lapu-Lapu, Ibaan, Batangas</p>
                  </div>
                </div>

                <div className="office-row">
                  <div className="office-tag">Satellite</div>
                  <div>
                    <h4>Naga City</h4>
                    <p>
                      2nd Floor, 2nd Door, Lansangan Building, Concepcion
                      Grande, Naga City
                    </p>
                  </div>
                </div>

                <div className="office-row">
                  <div className="office-tag">Satellite</div>
                  <div>
                    <h4>Cebu City</h4>
                    <p>
                      5th Floor, Unit 505, IMEZ Bldg. MEZ 2 Estate, Basak,
                      Lapu-Lapu City, Cebu
                    </p>
                  </div>
                </div>

                <div className="office-row">
                  <div className="office-tag">Satellite</div>
                  <div>
                    <h4>Davao City</h4>
                    <p>
                      D4, 3rd Floor, Piquero Complex, Hope Ave. KM7, Brgy.
                      Talomo, Bangkal, Davao City
                    </p>
                  </div>
                </div>
              </div>

              <div className="group-list">
                <div className="eyebrow" style={{ marginTop: 8 }}>
                  Group of Companies
                </div>

                <div className="group-item">
                  <img
                    src={matrixCorporateLogo}
                    alt="Matrix Corporate Security and General Services, Inc. logo"
                    className="group-logo"
                  />
                  <div>
                    <b>Matrix Corporate Security and General Services, Inc.</b>
                    <span>Sister security company</span>
                  </div>
                </div>

                <div className="group-item">
                  <img
                    src={starmatrixLogo}
                    alt="Starmatrix Security Agency, Inc. logo"
                    className="group-logo"
                  />
                  <div>
                    <b>Starmatrix Security Agency, Inc.</b>
                    <span>Sister security company</span>
                  </div>
                </div>

                <div className="group-item">
                  <img
                    src={summitProtectionLogo}
                    alt="Summit Protection Security Training Center, Inc. logo"
                    className="group-logo"
                  />
                  <div>
                    <b>Summit Protection Security Training Center, Inc.</b>
                    <span>
                      Formerly Matrix Security Training Center — SOSIA / TESDA
                      accredited
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal">
              <div className="fleet-photo">
                <img
                  src={fleetVehicle}
                  alt="Mega-Matrix Security quick response vehicle stationed at a client site"
                />
              </div>

              <div className="fleet-cap">
                Quick Response Unit — deployed on client premises
              </div>

              <div className="divider"></div>

              <div className="eyebrow">On Standby</div>

              <ul className="check-list">
                <li>
                  <b>Marked patrol vehicles</b> — sedans, vans, and pickups for
                  site rotation and quick response
                </li>
                <li>
                  <b>Emergency Response Unit</b> — dedicated rapid-deployment
                  vehicle
                </li>
                <li>
                  <b>Handheld metal detectors &amp; two-way radios</b> for
                  access control and coordination
                </li>
                <li>
                  <b>Firearms issued under company license</b>, matched to post
                  risk assessment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section
        className="section-pad"
        style={{ background: "var(--paper-2)" }}
        id="training"
      >
        <div className="wrap">
          <div className="training-grid">
            <div className="training-gallery reveal">
              <div className="training-slider">
                <img
                  src={trainingImages[trainingIndex].src}
                  alt={trainingImages[trainingIndex].alt}
                />

                <button
                  type="button"
                  className="training-arrow training-prev"
                  onClick={previousTrainingImage}
                  aria-label="Previous training photo"
                >
                  ‹
                </button>

                <button
                  type="button"
                  className="training-arrow training-next"
                  onClick={nextTrainingImage}
                  aria-label="Next training photo"
                >
                  ›
                </button>

                <div className="training-counter">
                  {trainingIndex + 1} / {trainingImages.length}
                </div>
              </div>

              <div className="training-dots">
                {trainingImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`training-dot ${
                      trainingIndex === index ? "active" : ""
                    }`}
                    onClick={() => setTrainingIndex(index)}
                    aria-label={`View training photo ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="reveal">
              <div className="eyebrow">Readiness</div>
              <h2>Training doesn't stop at deployment.</h2>
              <p style={{ color: "var(--slate)", fontSize: 16 }}>
                Beyond initial certification, personnel rotate through ongoing
                seminars — first aid and CPR, water rescue, rope and knot work,
                and coordinated emergency response — run through our accredited
                training center and refreshed throughout the year.
              </p>

              <ul className="check-list">
                <li>
                  <b>Pre-deployment screening</b> — neuro-psychological, drug,
                  and medical examination
                </li>
                <li>
                  <b>SOSIA-licensed instructors</b> at our own Matrix / Summit
                  Protection training facility
                </li>
                <li>
                  <b>Recurring seminars</b> — first aid, water rescue, and
                  coordinated response drills
                </li>
                <li>
                  <b>Field supervision</b> by area inspectors and regional
                  operations managers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section
        // className="section-pad"
        style={{ visibility: "hidden" }}
        id="clients"
      >
        {/* <div style={{ visibility: "hidden" }} className="wrap">
          <div className="eyebrow reveal">Who We Protect</div>

          <div className="head-row reveal">
            <h2>Trusted across telecom, banking, and industry.</h2>
            <p>
              A cross-section of the sectors currently under Mega-Matrix
              coverage nationwide.
            </p>
          </div>

          <div className="client-groups reveal">
            <div className="client-cell">
              <h4>Telephone Company</h4>
              <div className="client-logos">
                <div className="client-logo">
                  <img src={smartLogo} alt="Smart" />
                </div>
                <div className="client-logo">
                  <img src={pldtLogo} alt="PLDT" />
                </div>
                <div className="client-logo">
                  <img src={digitelSunLogo} alt="Digitel / Sun" />
                </div>
              </div>
            </div>

            <div className="client-cell">
              <h4>Tower Management Company</h4>
              <div className="client-logos">
                <div className="client-logo">
                  <img src={unityDigitalLogo} alt="Unity Digital" />
                </div>
                <div className="client-logo">
                  <img src={edotcoLogo} alt="edotco" />
                </div>
                <div className="client-logo">
                  <img src={edgepointLogo} alt="EdgePoint" />
                </div>
                <div className="client-logo">
                  <img src={frontierTowerLogo} alt="Frontier Tower" />
                </div>
              </div>
            </div>

            <div className="client-cell">
              <h4>Financial Services / Banks</h4>
              <div className="client-logos">
                <div className="client-logo">
                  <img src={unionbankLogo} alt="UnionBank" />
                </div>
                <div className="client-logo">
                  <img src={citysavingsLogo} alt="CitySavings" />
                </div>
              </div>
            </div>

            <div className="client-cell">
              <h4>Food Industry</h4>
              <div className="client-logos">
                <div className="client-logo">
                  <img src={sanMiguelFoodsLogo} alt="San Miguel Foods" />
                </div>
                <div className="client-logo">
                  <img src={purefoodsLogo} alt="Purefoods" />
                </div>
              </div>
            </div>

            <div className="client-cell">
              <h4>Property &amp; Logistics</h4>
              <div className="client-logos">
                <div className="client-logo">
                  <img src={ortigasResidenceLogo} alt="Ortigas Residence" />
                </div>
                <div className="client-logo">
                  <img src={cargoSafewayLogo} alt="Cargo Safeway" />
                </div>
              </div>
            </div>

            <div className="client-cell">
              <h4>Manufacturing</h4>
              <div className="client-logos">
                <div className="client-logo manufacturing-logo">
                  <img src={essilorLogo} alt="Essilor" />
                  <span>Essilor / Optodev</span>
                </div>
              </div>
            </div>

            <div className="client-cell">
              <h4>Mining &amp; Automotive</h4>
              <div className="client-logos">
                <div className="client-logo">
                  <img src={philexLogo} alt="Philex" />
                </div>
                <div className="client-logo">
                  <img src={nissanLogo} alt="Nissan" />
                </div>
              </div>
            </div>

            <div className="client-cell">
              <h4>Medical &amp; Media</h4>
              <div className="client-logos">
                <div className="client-logo">
                  <img src={lifelineLogo} alt="Lifeline" />
                </div>
                <div className="client-logo">
                  <img src={tv5Logo} alt="TV5" />
                </div>
                <div className="client-logo">
                  <img src={cignalLogo} alt="Cignal" />
                </div>
              </div>
            </div>

            <div className="client-cell client-cta">
              <a href="#contact">
                Become a
                <br />
                client site →
              </a>
            </div>
          </div>
        </div> */}
      </section>

      {/* CREDENTIALS */}
      <section className="section-pad creds-dark" id="credentials">
        <div className="wrap">
          <div className="eyebrow reveal">On Record</div>

          <div className="head-row reveal">
            <h2>Licensed, certified, and audited to operate.</h2>
            <p>Current registrations held by Mega-Matrix Security, Inc.</p>
          </div>

          <div className="cred-grid reveal">
            <div className="cred-card">
              <img src={operatingLicenseLogo} alt="" className="cred-logo" />
              <div className="cn">OPERATING LICENSE</div>
              <h4>PNP-SOSIA License to Operate</h4>
              <p>PSA-WGS-000288-2023 · Valid until Oct 25</p>
            </div>
            <div className="cred-card">
              <img src={qmsLogo} alt="" className="cred-logo" />
              <div className="cn">QMS</div>
              <h4>ISO 9001-2015 Certified</h4>
              <p>Quality management system certification</p>
            </div>
            <div className="cred-card">
              <img src={membershipLogo} alt="" className="cred-logo" />
              <div className="cn">MEMBERSHIP</div>
              <h4>TAPA APAC</h4>
              <p>Transported Asset Protection Association — Asia Pacific</p>
            </div>
            <div className="cred-card">
              <img src={agencyLogo} alt="" className="cred-logo" />
              <div className="cn">AGENCY</div>
              <h4>PADPAO Certificate</h4>
              <p>
                Philippine Association of Detective &amp; Protective Agency
                Operators
              </p>
            </div>
            <div className="cred-card">
              <img src={laborLogo} alt="" className="cred-logo" />
              <div className="cn">LABOR</div>
              <h4>DOLE 174</h4>
              <p>Department of Labor and Employment registration</p>
            </div>
            <div className="cred-card">
              <img src={taxLogo} alt="" className="cred-logo" />
              <div className="cn">TAX</div>
              <h4>BIR 2303</h4>
              <p>Bureau of Internal Revenue Certificate of Registration</p>
            </div>
            <div className="cred-card">
              <img src={lguLogo} alt="" className="cred-logo" />
              <div className="cn">LGU</div>
              <h4>Business Permit 2025–2026</h4>
              <p>Current local government operating permit</p>
            </div>
            <div className="cred-card">
              <img src={firearmsLogo} alt="" className="cred-logo" />
              <div className="cn">FIREARMS</div>
              <h4>License to Own &amp; Possess Firearms</h4>
              <p>Company-held firearms license</p>
            </div>
            <div className="cred-card">
              <img src={trainingCredLogo} alt="" className="cred-logo" />
              <div className="cn">TRAINING</div>
              <h4>CDC Accreditation</h4>
              <p>Accredited civil / drug testing &amp; screening center</p>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section-pad" id="leadership">
        <div className="wrap">
          <div className="eyebrow reveal">Corporate Officers</div>
          <div className="head-row reveal">
            <h2>Leadership on record.</h2>
          </div>

          <div className="lead-grid reveal">
            <div className="lead-card">
              <div className="role">Chairman / President</div>
              <h3>Engr. Aniceto Apollo L. Cajigal, Jr.</h3>
              <ul>
                <li>
                  BS Electronics and Communications Engineering — University of
                  Sto. Tomas
                </li>
                <li>
                  Executive Masters in Business Administration — Asian Institute
                  of Management, Makati
                </li>
              </ul>
              <div className="lead-contact">
                <div>EMAIL ADDRESS: apo_dsmart@yahoo.com</div>
                <div>
                  ADDRESS · Blk 1 Lot 18, Jordan Plains III, Brgy. Pasong Putik,
                  Novaliches, Quezon City
                </div>
                <div>TEL · 0920-907-4133</div>
              </div>
            </div>

            <div className="lead-card">
              <div className="role">Chief Operating Officer</div>
              <h3>Jonathan D. Pasetes</h3>
              <ul>
                <li>Licensed Security Practitioner</li>
                <li>Safety Officer 2</li>
              </ul>
              <div className="lead-contact">
                <div>EMAIL ADDRESS: jpasetes.megamatrix@gmail.com</div>
                <div>
                  ADDRESS · Blk 1 Lot 18, Jordan Plains III, Brgy. Pasong Putik,
                  Novaliches, Quezon City
                </div>
                <div>TEL · 0969-559-2376</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section-pad contact-section" id="contact">
        <div className="wrap">
          <div className="contact-grid">
            <div className="reveal">
              <div className="eyebrow">Get In Touch</div>
              {/* <h2>Request a site assessment.</h2>
              <p className="lead">
                Tell us about your site — location, headcount, and current
                coverage gaps — and an operations manager will follow up to
                scope a deployment plan.
              </p> */}

              {/* <div className="hero-actions" style={{ marginTop: 28 }}>
                <a
                  href="mailto:jpasetes.megamatrix@gmail.com"
                  className="btn btn-primary"
                >
                  Email Operations
                </a>
                <a href="tel:+639695592376" className="btn btn-ghost">
                  Call COO Direct
                </a>
              </div> */}
            </div>

            <div className="reveal contact-full-width">
              <div className="contact-card">
                <h4>Head Office</h4>
                <div className="contact-line">
                  <span>Address</span>
                  <span>
                    Lot 18, Blk 1, Jordan Plains III,
                    <br />
                    Brgy. Pasong Putik, Novaliches,
                    <br />
                    Quezon City
                  </span>
                </div>
                <div className="contact-line">
                  <span>President</span>
                  <span>Engr. A. A. Cajigal Jr.</span>
                </div>
                <div className="contact-line">
                  <span>Tel — President</span>
                  <span>0920-907-4133</span>
                </div>
                <div className="contact-line">
                  <span>COO</span>
                  <span>Jonathan D. Pasetes</span>
                </div>
                <div className="contact-line" style={{ borderBottom: "none" }}>
                  <span>Tel — COO</span>
                  <span>0969-559-2376</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap footer-row">
          <div>
            © <span id="year"></span> Mega-Matrix Security, Inc. · ISO 9001-2015
            Certified
          </div>
          <div>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#credentials">Credentials</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
