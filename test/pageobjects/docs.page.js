import Page from './page';

class DocsPage extends Page {

    docsUrl = "https://docs.raptormaps.com/reference/reference-getting-started#reference-getting-started"
    docsTitle = "Getting Started"
    supportingText = "Warning: Use https://docs.raptormaps.com/v3.0/reference#search_solar_farms_by_name"
    supportingTextV2 = "Endpoint to retrieve all solar farms that you have access to view in a particular organization"

    sfeV2SolarFarmsTitle = "/api/v2/solar_farms"

    get solarFarmEndpointDropdownLocator() {
        return $('(//a[@href="/reference/solar-farm-endpoints"])[1]')
    }

    get solarFarmEndpointButtonLocator() {
        return $('(//a[@href=\'/reference/solar-farm-endpoints\']//button)[1]')
    }

    get sfeV2SolarFarmsLocator() {
        return $('(//a[@href="/reference/apiv2solar_farms"])[1]')
    }

    get sfeV2SolarFarmsTitleLocator() {
        return $('#content h1')
    }

    get sfeV2SolarFarmsTextLocator() {
        return $("(//div[@data-testid=\"RDMD\"])[1]")
    }

    get sfeV2SolarFarmsQueryFormLocator() {
        return $("//form")
    }

    get sfeV2SolarFarmsRequestLocator() {
        return $("//div[@class=\"Reference-section\"]")
    }

    get sfeV2SolarFarmsResponsesLocator() {
        return $("//div[@class=\"APIResponseSchemaPicker2ehjUsNOSwdc rm-APIResponseSchemaPicker\"]")
    }

    get sfeV2AuthenticationInputLocator() {
        return $("#APIAuth-Authentication-Token")
    }

    get sfeV2QueryInputLocator() {
        return $("#query-apiv2solarFarms_org_id")
    }

    get sfeV2TryItButtonLocator() {
        return $("//button[@class=\"Button Button_md TryItpmla7eyfx5CX rm-TryIt Button_primary\"]")
    }


    get sfeV2ResponseNameLocator() {
        return $("//span[contains(text(),'Test Postman Routes - QA Team')]")
    }

    get sfeV2CodeLocator() {
        return $("//div[@class=\"CodeMirror-code\"]")
    }

    get sfeV2uuidLocator() {
        return $("//div[@class=\"CodeMirror-code\"]//span[contains(text(), \"uuid\")]")
    }


}

export default new DocsPage();