import Link from 'next/link'
import Image from 'next/image';
import styles from '@component/styles/Track.module.css'

export default function Venue({props}) {
    
    return (
        <div className={styles.container}>
            <h3>{props.show}</h3>
            <p>{props.date}</p>
            <p>{props.time}</p>
            <Link href={props.link}><button>Get Tickets</button></Link>
        </div>
    )
  }
  