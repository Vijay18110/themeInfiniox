import React from "react";
import styles from "./TimelineSection.module.css";
// You can replace these with your own train SVG components or Lucide icons
import { Train } from "lucide-react";

const steps = [
  {
    left: "20%",
    type: "bottom", // Label below the path
    title: "Initial Consultation",
    subtitle: "Discuss Your Vision & Objective",
    color: "#3b82f6",
  },
  {
    left: "38%",
    type: "top", // Label above the path
    title: "Design & Proposal",
    subtitle: "Collaborative Concept Development",
    color: "#10b981",
  },
  {
    left: "55%",
    type: "bottom",
    title: "Prep & Manufacturing",
    subtitle: "Precision production with quality assurance",
    color: "#f59e0b",
  },
  {
    left: "70%",
    type: "top",
    title: "Installation & Support",
    subtitle: "Expert delivery and ongoing partnership",
    color: "#7c3aed",
  },
];

export default function TimelineSection() {
  return (
    <section className={styles.timelineSection}>
      <div className={styles.headerWrap}>
        <div className={styles.smallHeading}>
          Let's Create Something Remarkable
        </div>
        <h2 className={styles.title}>Ready To Transform Your Space</h2>
      </div>

      <div className={styles.canvas}>
        <svg
          className={styles.curve}
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
        >
          <path
            d="M50,200 C200,400 400,0 600,200 C800,400 1000,0 1150,200"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="3"
            strokeDasharray="8 8"
          />
          {/* Start and End Circles */}
          <circle
            cx="65"
            cy="188"
            r="12"
            stroke="#3b82f6"
            strokeWidth="4"
            fill="white"
          />
          <circle
            cx="1135"
            cy="212"
            r="12"
            stroke="#10b981"
            strokeWidth="4"
            fill="white"
          />
        </svg>

        {steps.map((s, idx) => (
          <div
            key={idx}
            className={`${styles.stepContainer} ${styles[s.type]}`}
            style={{ left: s.left }}
          >
            <div className={styles.label}>
              <div className={styles.stepTitle}>{s.title}</div>
              <div className={styles.stepSubtitle}>{s.subtitle}</div>
            </div>

            <div
              className={styles.pointerLine}
              style={{ borderColor: s.color }}
            />

            <div className={styles.iconBox} style={{ color: s.color }}>
              <Train size={28} strokeWidth={2.5} />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.tagline}>
        Partner with us to build thoughtfully designed, sustainably
        manufactured, intelligently connected solutions that matter.
      </div>
    </section>
  );
}
