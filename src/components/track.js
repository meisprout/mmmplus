import Link from 'next/link'
import Image from 'next/image';
import styles from '@component/styles/Track.module.css'

export default function Track({props}) {
    
    return (
        <div className={styles.container}>
            <div className={styles.imgcontainer}>
                <Image src={props.image} alt={props.title} layout='fill'/>
            </div>
            <div className={styles.txtcontainer}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
  }
  