import Requestor from './Requestor'
import { parseUrl } from './urlParsingNode'

import threddsCatalogCrawler from './main'

export default async function entry (url) {
    const requestor = new Requestor(parseUrl)
    const c = await threddsCatalogCrawler(url, requestor)
    return c
}