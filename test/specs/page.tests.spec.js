
import CareerPage from '../pageobjects/career.page';
import TechnologyPage from '../pageobjects/rmtechnology.page';
import Page from '../pageobjects/page';
import DocsPage from '../pageobjects/docs.page';

describe('Test suite', () => {
    it('1:  Navigate to RMTechnology from Careers page', async () => {

        await CareerPage.open()

        // const technologyDropdown = $('#menu-item-6777');  # moved to page object @Page.js
        await expect(CareerPage.navMenuTechnologyLocator).toBeDisplayed()

        await CareerPage.navMenuTechnologyLocator.moveTo()

        // const technologyListItem = $('#menu-item-6778');   # moved to page object @Page.js

        await expect(CareerPage.navMenuTechnologyListItemLocator).toBeDisplayed()
        await CareerPage.navMenuTechnologyListItemLocator.click()

        // title = browser.getTitle()
        await expect(browser).toHaveUrl(TechnologyPage.techUrl)
        await expect(browser).toHaveTitle(TechnologyPage.techTitle)

        })

    it('2: Validate API artifacts on Technology page', async ()=> {
        // start at Technology page
        await TechnologyPage.open();
        await expect(browser).toHaveUrl(TechnologyPage.techUrl)
        await expect(browser).toHaveTitle(TechnologyPage.techTitle)

        // scroll section into viewport
        await TechnologyPage.apiSectionLocator.scrollIntoView()
        await browser.pause(3000)

        // Validate Section container
        await expect(TechnologyPage.apiSectionLocator).toBeDisplayedInViewport()

        // Validate Header
        await expect(TechnologyPage.apiHeaderLocator).toBeDisplayedInViewport()
        await expect(TechnologyPage.apiHeaderLocator).toHaveText("API Integration")

        // Validate Description Text
        await expect(TechnologyPage.apiDescriptionLocator).toBeDisplayedInViewport()
        await expect(TechnologyPage.apiDescriptionLocator).toHaveTextContaining(TechnologyPage.apiDescription)
        await expect(TechnologyPage.apiDescriptionSpanLocator).toBeDisplayedInViewport()
        await expect(TechnologyPage.apiDescriptionSpanLocator).toHaveTextContaining(TechnologyPage.apiSpan)

        // Validate image
        await expect(TechnologyPage.apiImage).toBeDisplayedInViewport()
        // TODO ---- VALIDATE IMAGE using pixel-by-pixel comparison
        //  - using Service: https://webdriver.io/docs/wdio-image-comparison-service/

        // Validate Button
        await expect(TechnologyPage.knowledgeHubLinkLocator).toBeDisplayedInViewport()
        await expect(TechnologyPage.knowledgeHubLinkLocator).toHaveText(TechnologyPage.apiButtonText)
        await expect(TechnologyPage.knowledgeHubLinkLocator).toHaveHref(TechnologyPage.apiButtonHRef)
    })

    it('3: Validate API page opens in new tab', async ()=> {
        await TechnologyPage.open();
        await expect(browser).toHaveUrl(TechnologyPage.techUrl)
        await expect(browser).toHaveTitle(TechnologyPage.techTitle)
        await TechnologyPage.apiHeaderLocator.scrollIntoView()
        await TechnologyPage.knowledgeHubLinkLocator.click()
        await browser.pause(3000)
        await browser.switchWindow("https://docs.raptormaps.com/reference/reference-getting-started#reference-getting-started")
        await expect(browser).toHaveUrl(DocsPage.docsUrl)
        await expect(browser).toHaveTitle(DocsPage.docsTitle)
    })

    it("4: Validate dropdown elements on Docs page", async () => {
        await browser.url(DocsPage.docsUrl)
        await expect(browser).toHaveUrl(DocsPage.docsUrl)
        await expect(browser).toHaveTitle(DocsPage.docsTitle)

        await expect(DocsPage.solarFarmEndpointDropdownLocator).toBeDisplayedInViewport()
        await expect(DocsPage.solarFarmEndpointButtonLocator).toBeDisplayedInViewport()
        await DocsPage.solarFarmEndpointButtonLocator.click()
        await expect(DocsPage.sfeV2SolarFarmsLocator).toBeDisplayedInViewport()
        await DocsPage.sfeV2SolarFarmsLocator.click()

        // Validate Title
        await expect(DocsPage.sfeV2SolarFarmsTitleLocator).toBeDisplayedInViewport()
        await expect(DocsPage.sfeV2SolarFarmsTitleLocator).toHaveText(DocsPage.sfeV2SolarFarmsTitle)

        // Validate Supporting Text
        await expect(DocsPage.sfeV2SolarFarmsTextLocator).toHaveTextContaining(DocsPage.supportingText)
        await expect(DocsPage.sfeV2SolarFarmsTextLocator).toHaveTextContaining(DocsPage.supportingTextV2)

        // Validate REQUEST HISTORY container
        await expect(DocsPage.sfeV2SolarFarmsRequestLocator).toBePresent()

        // Validate Query Params Form
        await expect(DocsPage.sfeV2SolarFarmsQueryFormLocator).toBePresent()

        // Validate RESPONSES container
        await expect(DocsPage.sfeV2SolarFarmsResponsesLocator).toBePresent()
    })

    it("5: Validate requests", async () => {
        await browser.url(DocsPage.docsUrl)
        await expect(browser).toHaveUrl(DocsPage.docsUrl)
        await expect(browser).toHaveTitle(DocsPage.docsTitle)

        await expect(DocsPage.solarFarmEndpointDropdownLocator).toBeDisplayedInViewport()
        await expect(DocsPage.solarFarmEndpointButtonLocator).toBeDisplayedInViewport()
        await DocsPage.solarFarmEndpointButtonLocator.click()
        await expect(DocsPage.sfeV2SolarFarmsLocator).toBeDisplayedInViewport()
        await DocsPage.sfeV2SolarFarmsLocator.click()

        let auth = 'WyIyMDA3IiwiJDUkcm91bmRzPTUzNTAwMCQ4czdkZ0lyZkxRalN1TXlkJHZJbXJPMzFVdERYZDFlTDRZTmdDaHJwUjBhRmIydW0vampvQWYzTE1iUzYiXQ.Yk-w_w.dGRb3xdsG6TgzOTHYdhh0eSmHWk'
        let orgID = '228'


        await expect(DocsPage.sfeV2AuthenticationInputLocator).toBeDisplayedInViewport()
        await DocsPage.sfeV2AuthenticationInputLocator.setValue(auth)

        // Validate auth string is set
        await expect(DocsPage.sfeV2AuthenticationInputLocator).toHaveValue(auth)

        await DocsPage.sfeV2QueryInputLocator.scrollIntoView()
        await DocsPage.sfeV2QueryInputLocator.setValue(orgID)

        // Validate orgID is set
        await expect(DocsPage.sfeV2QueryInputLocator).toHaveValue(orgID)

        await DocsPage.sfeV2TryItButtonLocator.scrollIntoView()
        await expect(DocsPage.sfeV2TryItButtonLocator).toBeDisplayedInViewport()
        await DocsPage.sfeV2TryItButtonLocator.click()

        await browser.pause(3000)

        // Validate response includes "Test Postman Routes"
        await expect(DocsPage.sfeV2ResponseNameLocator).toHaveTextContaining("Test Postman Routes")

        // Validate response includes ""8bb07ba1-2661-4f89-8dca-4292c378e665"" text
        await expect(DocsPage.sfeV2CodeLocator).toHaveTextContaining("\"8bb07ba1-2661-4f89-8dca-4292c378e665\"")

        // TODO : Return the UUID of "Test Postman Routes" farm
    })

})