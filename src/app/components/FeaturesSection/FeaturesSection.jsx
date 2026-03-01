
`use client`;
import React from "react";
import styles from "./FeaturesSection.module.css";
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import f4 from "../../assets/f4.png";
const features = [
  {
    title: "CUSTOMIZATION STRENGTH",
    description:
      "Tailor-made solutions with custom sizes, colors, textures, and brand logo embedding—designs that reflect your identity.",
    image: f1, // Replace with your actual image paths
  },
  {
    title: "CRAFTSMANSHIP + TECHNOLOGY",
    description:
      "Traditional woodworking meets advanced epoxy techniques for precision detailing and international-quality finish.",
    image:f2,
  },
  {
    title: "SUPERIOR MATERIALS",
    description:
      "Seasoned wood, high-grade epoxy, eco-friendly coatings, and child-safe materials ensure longevity and safety.",
    image: f3,
  },
  {
    title: "END-TO-END CONTROL",
    description:
      "In-house management from design to delivery ensures better quality control, faster turnaround, and competitive pricing.",
    image: f4,
  },
];

export default function FeaturesSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.mainHeading}>What Sets Us Apart</h2>

      <div className={styles.grid}>
        {features.map((item, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={item.image.src} alt={item.title} className={styles.image} />
              <h3 className={styles.cardTitle}>{item.title}</h3>
            </div>
            <div className={styles.descriptionBox}>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      
    </section>
  );
}
