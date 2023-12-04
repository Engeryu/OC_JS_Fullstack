import {
  PropertyAdvertisement,
  PropertyAdvertisementsList,
} from "./propertyAdvertisement"

export class DataFetcher {
  /**
   * @constructs
   * @param {string} dataSource
   */
  constructor(dataSource) {
    this._dataSource = dataSource
  }

  /**
   * Fetch the data source and return its content as a PropertyAdvertisementsList if the fetching is ok.
   * @returns {PropertyAdvertisementsList}
   */
  async fetchSource() {
    let response = await fetch(this._dataSource)

    if (response.ok) {
      let data = await response.json()

      const advertisementInstances = []

      for (let advertisement of data) {
        const advertisementInstance = new PropertyAdvertisement(
          advertisement.id,
          advertisement.title,
          advertisement.cover,
          advertisement.pictures,
          advertisement.description,
          advertisement.host,
          advertisement.rating,
          advertisement.location,
          advertisement.equipments,
          advertisement.tags
        )

        advertisementInstances.push(advertisementInstance)
      }

      return new PropertyAdvertisementsList(advertisementInstances)
    } else {
      const message = `Oups ! Une erreur s'est produite.\n\nHTTP-Error-${response.status} while fetching ${this._dataSource}`

      window.alert(message)
    }
  }
}
