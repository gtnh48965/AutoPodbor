import React from 'react';
import styles from './Call.module.scss'
import callerBackground from '../../../assets/images/call.svg'
import caller from '../../../assets/images/call.png'
import call from '../../../assets/images/phone.svg'
import cn from "classnames";
import {OPEN_MODAL, useModalContext} from "../../../contexts/ModalContext";
export const Call = ({isBlack}) => {
    const {dispatch} = useModalContext()
    return (
        <div className={styles.content}>
            <div className={styles.imgContainer}>
                <img src={call} alt={"Call"}/>
            </div>
            <div className={styles.textContent}>
                <a href="tel:+79992009330" className={cn(styles.numberFooter ,styles.title,isBlack?styles.black:styles.white
                )} onClick={() => window.yaCounter88846653.reachGoal('phone')}
                dangerouslySetInnerHTML={{__html: localStorage.getItem('promo_telephone')}}></a>
                <span className={styles.orderNumber} onClick={()=>dispatch({type:OPEN_MODAL})}>Заказать звонок</span>
            </div>
        </div>
    );
};

