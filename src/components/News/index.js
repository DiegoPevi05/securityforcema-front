import React, {useState, useEffect} from 'react'
import {CardsContainer, CardsWrapper, Card, Face, CardContent, ImageCard, HeaderCard, Ptag, LinkReference, ArrowLeft, ArrowRight,HeaderSection,Datetag,HTag} from './NewsElements';

const NewsComponent = ({newsData}) => {

    const [WindowWidth, setWindowWidth] = useState(undefined);
    const [activeItems, setActiveItems] = useState(0);
    const [startID, setStartID] = useState(0);
    const [cardsActivaded, setcardsActivaded] = useState([]);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(document.getElementById("WrapperContent").offsetWidth);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const CardsActive = () => {
            var AllSlidesElements = document.querySelectorAll('.card');
            AllSlidesElements.forEach(function (element) {
                var id = element.id;
                if (cardsActivaded.includes(Number(id))) {
                    element.classList.remove('notActive');
                    element.classList.add('isActive');
                } else {
                    element.classList.remove('isActive');
                    element.classList.remove('notActive');
                    element.classList.add('notActive');
                }
            });
        }
        CardsActive();
    }, [cardsActivaded])

    useEffect(() => {
        const UpdateActivadedCards = () => {
            var AllSlidesElements = document.querySelectorAll('.card');
            var iterableActiveItems;

            var WindowWidthLocal = undefined;
            if (WindowWidth !== undefined) {
                WindowWidthLocal = WindowWidth;
            } else {
                var size = document.getElementById("Industries").offsetWidth;
                WindowWidthLocal = size;
            }
            if (WindowWidthLocal <= 616) {
                setActiveItems(1);
            } else if (WindowWidthLocal <= 850) {
                setActiveItems(2);
            } else {
                setActiveItems(3);
            }
            if (activeItems < AllSlidesElements.length) {
                iterableActiveItems = activeItems;
            } else {
                iterableActiveItems = AllSlidesElements.length;
            }
            var bufferList = [];
            for (var i = 0; i < iterableActiveItems; i++) {
                if (startID + i < AllSlidesElements.length) {
                    bufferList.push(startID + i)
                } else if (startID + i >= AllSlidesElements.length) {
                    bufferList.push((startID + i) - AllSlidesElements.length)
                }
            }
            setcardsActivaded(bufferList);
        }
        UpdateActivadedCards();
    }, [startID, WindowWidth])

    const TriggerNext = () => {
        var AllSlidesElements = document.querySelectorAll('.card');
        if (startID < AllSlidesElements.length - (activeItems)) {
            setStartID(prevState => prevState + 1);
        }
    }
    const TriggerBefore = () => {
        var AllSlidesElements = document.querySelectorAll('.card');
        if (startID > 0) {
            setStartID(prevState => prevState - 1);
        }
    }

    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL_PUBLIC;

    return (
        <CardsContainer id="News">
            <ArrowLeft onClick={(event) => {TriggerBefore(event)}} />
            <ArrowRight onClick={(event) => {TriggerNext(event)}} />
            <HeaderSection>Noticias y Novedades</HeaderSection>
            <CardsWrapper id="WrapperContent">
                {newsData.map((item,index) => (
                    <Card className="card" id={index}>
                        <Face className="face face1" imgsrc={BACKEND_URL+item.imageUrl}>
                            <CardContent className="content">
                                <HeaderCard>{item.textPreview}</HeaderCard>
                                <HTag>{item.title}</HTag>
                            </CardContent>
                        </Face>
                        <Face className="face face2">
                            <CardContent className="content">
                                <Datetag>{"Noticia del: "+item.updated_at.split('T')[0]}</Datetag>
                                <Ptag className="content">{item.body}</Ptag>
                            </CardContent>
                        </Face>
                    </Card>
                ))}
            </CardsWrapper>
        </CardsContainer>
    );
};



export default NewsComponent;

