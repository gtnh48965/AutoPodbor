import React, {useEffect} from 'react';
import {Questions} from "../../components/Main/Questions";
import {Choice} from "../../components/Main/choice";
import {ServicesAndPrices} from "../../components/Main/servicesAndPrices";
import {Problems} from "../../components/Main/problems";
import {Check} from "../../components/Main/Check";
import {Form} from "../../components/Form";
import {Examples} from "../../components/Main/Examples";
import {Maps} from "../../components/Main/Map";
import {Promo} from "../../components/Main/promo";
import {Selection} from "../../components/Main/selection";
import {getBlogPosts} from "../../api/blogApi";
import {Feedback} from "../../components/Main/feedback";
import styles from "../../components/Main/Check/Check.module.scss";
import blackBcg from "../../assets/images/blackBcg.jpg";
import orangeSquare from "../../assets/images/questions/orangeSquare.png";
import bcg from "../../assets/images/questions/bcg.png";
import style from './Main.module.scss'
import {RoadToCenter} from "../../components/Main/RoadToCenter";
import garantier from '../../assets/images/garant/garan.png'
import {Garantier} from "../../components/Main/garantier";



export const Main = () => {



    return (
        <main>
            <Promo/>
            {/*<Feedback/>*/}
            <Choice/>
            <ServicesAndPrices/>
            <Problems/>


            <section className={styles.black}>
                <img src={blackBcg} alt={"Black background"} className={styles.img}/>
                <Check/>
                <Form/>
                <Examples/>

                <Selection/>
                <div className={style.back}>
                    <img src={garantier} alt={"Гарант"} className={style.garantier}/>
                    <Garantier/>
                </div>
                <div className={style.back}>
                    <img src={orangeSquare} className={style.orangeSquare} alt={"orangeSquare"}/>
                    <img src={bcg} className={style.bcg} alt={"bcg"} height={805}/>
                    <Questions/>
                    <RoadToCenter/>
                </div>
            </section>
            <Maps/>
        </main>
    );
};

