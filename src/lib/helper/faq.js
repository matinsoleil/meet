
const item = (question,answer) => {
    return({
        question: question,
        answer:answer
    });
}
//Translator.t('FAQ_QUESTION_GENERAL_1')
const getFaq = (Translator,type,)  => {
    const general = [];
    for(let i = 1; i<=type.max;i++){
        general.push(item(Translator.t(`FAQ_${type.name}_QUESTION_${i}`),Translator.t(`FAQ_${type.name}_ANSWER_${i}`)));
    }
    return general;
}


export default class faq {
    static getQuestions = (Translator,type) => {
        return getFaq(Translator,type);
    }
}