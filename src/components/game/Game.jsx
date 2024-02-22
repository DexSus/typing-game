import React, { useEffect, useState } from 'react'
import s from "./style.module.css"
import fetchRandomText from '../../service/RandomTextService'
import axios from 'axios'


export const Game = ({ onChangeScore }) => {
    const [defaultData, setDefaultData] = useState('Bacon ipsum dolor amet buffalo frankfurter t-bone filet mignon leberkas kevin pork kielbasa hamburger alcatra sirloin chuck meatloaf biltong ball tip.  Andouille biltong cow tenderloin pork loin brisket shoulder.  Bacon andouille ham hock, corned beef jowl short ribs shankle turducken picanha jerky alcatra pork loin capicola burgdoggen porchetta.  Kevin chicken frankfurter kielbasa salami beef ribs tail tenderloin capicola.","Frankfurter short loin biltong ham, ham hock cupim andouille pig drumstick venison jerky ground round.  Tri-tip turducken ribeye pig, flank brisket prosciutto chuck beef ribs jerky filet mignon buffalo.  Bacon kielbasa cow leberkas.  Turducken meatloaf short loin chicken shank ground round boudin brisket capicola tenderloin jowl kielbasa.')
    const [dataTyping, setDataTyping] = useState([])
    const [textTyping, setTextTyping] = useState({
        value: '',
        position: 0
    });

    const [isLoad, setIsLoad] = useState(false); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = fetchRandomText()
                setIsLoad(true);
                setDefaultData(response);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
    
        fetchData();
    
    }, []);
    

    useEffect(() => {
        const addWord = (quantity = 20) => {
            const arrayDefaultDB = defaultData.split(' ');
            const dataTypingTest = [];
            for (let index = 0; index < quantity; index++) {
                const possition = Math.floor(Math.random() * arrayDefaultDB.length)
                dataTypingTest.push({
                    value: arrayDefaultDB[possition].trim(),
                    status: null
                })
            }
            setDataTyping(dataTypingTest)
        }
        if(dataTyping.length === 0 || textTyping.position >= dataTyping.length) {
            addWord();
            setTextTyping({...textTyping, position: 0});
        }
    }, [textTyping.position]);

    const handleChangeTyping = e => {
        const valueInput = e.target.value;
        if(!valueInput.includes(' ')) {
            setTextTyping({
                ...textTyping,
                value: valueInput,

            });
        } else if(textTyping.value !== '') {
            checkResult();
        }
    }

    const checkResult = () => {
        const dataCheck = dataTyping;
        const wordCheck = dataCheck[textTyping.position].value
        if(textTyping.value === wordCheck){
            dataCheck[textTyping.position].status = true;
            onChangeScore('right')
        } else {
            dataCheck[textTyping.position].status = false;
            onChangeScore('wrong')
        }
        setDataTyping(dataCheck)
        setTextTyping({
            value: '',
            position: textTyping.position + 1
        })
    }
    console.log(dataTyping);

    return (
        <div className={s.playing}>
        {isLoad ? (
            <React.Fragment>
                <ul className={s.list}>
                    {dataTyping.map((word, index) => (
                        <li
                            key={index}
                            className={
                                word.status === true
                                    ? s.true
                                    : word.status === false
                                    ? s.false
                                    : ''
                            }
                        >
                            {word.value}
                        </li>
                    ))}
                </ul>
                <div className={s.inputForm}>
                    <input type="text" value={textTyping.value} onChange={handleChangeTyping} />
                </div>
            </React.Fragment>
        ) : (
            <p>Loading...</p>
        )}
    </div>
    
    )
}
