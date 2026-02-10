import React from 'react'
import Image from 'next/image'
import styles from './ProfilePage.module.css'
import yogeshImg from '../Assets/yogesh.jpg'

const ProfilePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profileCard}>
        <Image
          src={yogeshImg}
          alt="Yogesh Bangar"
          className={styles.avatar}
          width={120}
          height={120}
        />
        <h1 className={styles.name}>Yogesh Bangar</h1>
        <p className={styles.title}>Frontend Engineer @ Dataloop.ai</p>
        <p className={styles.location}>Abu Dhabi, United Arab Emirates</p>

        <section className={styles.section}>
          <h2>About</h2>
          <p>
            Experienced Frontend Engineer focused on building performant and scalable web applications using React, Vue, and TypeScript. Passionate about UI/UX, animation, and tooling.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Experience</h2>
          <ul>
            <li>
              <strong>Dataloop.ai</strong> – Frontend Engineer (2023–Present)
            </li>
            <li>
              <strong>Company X</strong> – UI Developer (2020–2023)
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Skills</h2>
          <div className={styles.skills}>
            <span>React</span>
            <span>Vue</span>
            <span>TypeScript</span>
            <span>Vite</span>
            <span>Jest</span>
            <span>Cypress</span>
            <span>SCSS</span>
            <span>Three.js</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Contact</h2>
          <p>Email: yogeshbangar@gmail.com</p>
          <p>Website: <a href="https://httwebgl.vercel.app/">https://httwebgl.vercel.app/</a></p>
        </section>
      </div>
    </div>
  )
}

export default ProfilePage