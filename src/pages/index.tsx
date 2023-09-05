import Head from 'next/head'
import { Inter } from 'next/font/google'
import ContactUsModal from '@/components/ContactUsModal'

import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.center}>
          <ContactUsModal />
        </div>
      </main>
    </>
  )
}
