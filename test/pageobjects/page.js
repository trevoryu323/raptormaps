/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */

    get navMenuTechnologyLocator() {
        return $('#menu-item-6777')
    }

    get navMenuTechnologyListItemLocator() {
        return $('#menu-item-6778')
    }

    open (path) {
        return browser.url(`https://raptormaps.com/${path}`)
    }

}
