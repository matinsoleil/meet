import {landings,faq} from './routes';

export default class StrategyHandler {
    static StrategyLanding = async (country) => {
        let component;
        try{
            component = landings[country];
            if(component === undefined) throw Error(true);
        }catch(ex){
            component = landings.default;
        }
        component = await import('@pages/'+component);
        return component.Landing;
    }

    static StrategyFaq = async (country) => {
        let component;
        try{
            component = faq[country];
            if(component === undefined) throw Error(true);
        }catch(ex){
            component = faq.default;
        }
        component = await import('@pages/'+component);
        return component.Faq;
    }
}