import Link from 'next/link'
import Image from 'next/image';
import styles from '@component/styles/Show.module.css'

export default function Show({props}) {
    
    return (
        <div className={styles.container}>
            <div className={styles.imgcontainer}>
                <Image src={props.image} layout='fill'/>
            </div>
            <div className={styles.txtcontainer}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <Link href={props.link}>Know More</Link>
            </div>
        </div>
    )
  }
  