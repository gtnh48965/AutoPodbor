import React from 'react';
import styles from './AboutCard.module.scss'
export const AboutCardBig = ({src,title,text}) => {
    return (
        <div className={styles.big}>
            <img src={src} alt={"Why we"} className={styles.img}/>
            <h3 className={styles.titleBig} dangerouslySetInnerHTML={{__html: title}}>
            </h3>
            <p className={styles.text} dangerouslySetInnerHTML={{__html: text}}>
            </p>
        </div>
    );
};

