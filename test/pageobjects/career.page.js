import Page from './page';

class CareerPage extends Page {

    careerTitle = 'Careers - Raptor Maps';


    open() {
        return super.open('careers')
    }
}

export default new CareerPage();