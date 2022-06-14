import React, { 
    useEffect, 
    useMemo, 
    useState 
} from 'react';

import { 
    Base,
    Main,
    Pyramid,
    Start,
    Timer,
    Trivia
} from '../components';

import questionData from '../fixtures/question_bank.json';
import prizes from '../fixtures/prizes.json';

export function QuizContainer() {

    const [username, setUsername] = useState(null);
    const [timeout, setTimeOut] = useState(false);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [earned, setEarned] = useState(0);

    const questions = questionData;
    const moneyPyramid = useMemo(
        () => prizes.reverse(),
        []
    );

    useEffect(() => {
        console.log(questions);
        questionNumber > 1 && setEarned(moneyPyramid.find((m) => m.id === questionNumber -1).amount);
    }, [questionNumber, moneyPyramid]);

    return (
        <Base>

            {!username ? (
                <Start setUsername={setUsername} />
            ) : (
                <>
                    <Main>
                        {timeout ? (
                            <Main.EndText>
                                { earned && earned !== 0 ? `
                                    You earned: ${earned}
                                ` : `Better luck next time :)`}
                            </Main.EndText>
                        ) : (
                            <>
                                <Main.Top>
                                    <Main.Timer>
                                        <Timer 
                                            setTimeOut={setTimeOut}
                                            questionNumber={questionNumber}
                                        />
                                    </Main.Timer>
                                </Main.Top>
                                <Main.Bottom>
                                    <Trivia 
                                        data={questions}
                                        questionNumber={questionNumber}
                                        setQuestionNumber={setQuestionNumber}
                                        setTimeOut={setTimeOut}
                                    />
                                </Main.Bottom>
                            </>
                        )}
                    </Main>
                    <Pyramid>
                        <Pyramid.MoneyList>
                            { moneyPyramid.map((m) => (
                                <Pyramid.MoneyListItem 
                                    key={m.id}
                                    isActive={questionNumber === m.id ? true : false}
                                >
                                    <Pyramid.MoneyListItemNumber>{m.id}</Pyramid.MoneyListItemNumber>
                                    <Pyramid.MoneyListItemAmount>{m.amount}</Pyramid.MoneyListItemAmount>
                                </Pyramid.MoneyListItem>
                            ))}
                        </Pyramid.MoneyList>
                    </Pyramid>
                </>
            )}
        </Base>
    );
}