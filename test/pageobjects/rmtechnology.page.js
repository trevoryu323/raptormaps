import Page from './page';

class TechnologyPage extends Page {

    techTitle = 'Technology - Raptor Maps';
    techUrl = 'https://raptormaps.com/rmtechnology/';
    apiDescription = "Raptor Maps easily integrates software solutions through our API. Clients can use the API to push or pull data between tools, maximizing the value of both tools while increasing data output and analysis."
    apiSpan = "Our API can integrate with leading analytics tools used in asset monitoring dashboards and SCADA systems, including Power BI, SAP, and Power Factors."
    apiButtonText = "KNOWLEDGE HUB"
    apiButtonHRef = "https://docs.raptormaps.com/reference#reference-getting-started"


    get apiSectionLocator() {
        return $('#tech-api')
    }

    get apiHeaderLocator() {
        return $("//div[@id='tech-api']//h1")
    }

    get apiDescriptionLocator() {
        return $("(//div[@id='tech-api']//p)[2]")
    }

    get apiDescriptionSpanLocator() {
        return $("(//div[@id='tech-api']//span)[1]")
    }

    get apiImage() {
        return $("//img[@class=\"wp-image-5285\"]")
    }


    get knowledgeHubLinkLocator() {
        return $('a[href="https://docs.raptormaps.com/reference#reference-getting-started"]')
    }

    open() {
        return super.open('rmtechnology')
    }

}

export default new TechnologyPage();