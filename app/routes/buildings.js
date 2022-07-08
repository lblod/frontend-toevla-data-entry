import Route from '@ember/routing/route';

export default class BuildingsRoute extends Route {
  model() {
    return [
      {
        title: "De wereld van Kina: het Huis",
        url: "https://dewereldvankina.stad.gent/toegankelijkheid"
      }, {
        title: "Huis van Alijn",
        url: "https://huisvanalijn.be/nl/toegankelijkheid"
      }, {
        title: "S.M.A.K. Gent",
        url: "https://smak.be/toegankelijkheid"
      }, {
        title: "De wereld van Kina: de Tuin",
        url: "https://dewereldvankina.stad.gent/toegankelijkheid"
      }, {
        title: "MSK Gent - Museum voor Schone Kunsten Gent",
        url: "https://www.mskgent.be/nl/toegankelijkheid"
      }, {
        title: "Museum Dr. Guislain",
        url: "https://www.museumdrguislain.be/nl/toegankelijkheid"
      }, {
        title: "GUM - Gents Universiteitsmuseum",
        url: "https://www.gum.gent/nl/toegankelijkheid"
      }, {
        title: "Design Museum Gent",
        url: "https://www.designmuseumgent.be/toegankelijkheid"
      }, {
        title: "Industriemuseum",
        url: "https://www.industriemuseum.be/nl/toegankelijkheid"
      }, {
        title: "Sint-Pietersabdij",
        url: "https://historischehuizen.stad.gent/nl/sint-pietersabdij/toegankelijkheid"
      }, {
        title: "Gravensteen",
        url: "https://historischehuizen.stad.gent/nl/gravensteen/toegankelijkheid"
      }, {
        title: "STAM - Stadsmuseum Gent",
        url: "https://www.stamgent.be/nl_be/bezoek-het-stam/toegankelijkheid"
      }, {
        title: "Damiaanmuseum",
        url: "http://damiaanmuseum.be/toegankelijkheid/"
      }, {
        title: "Museum Voor Religieuze Kunst Diest",
        url: "https://diest.be/museum-voor-religieuze-kunst"
      }, {
        title: "Bezoekerscentrum Dru!f, huis van de tafeldruif",
        url: "https://www.overijse.be/druif-toegankelijkheid"
      }, {
        title: "Hidrodoe",
        url: "https://www.hidrodoe.be/plan-je-dag/toegankelijkheid"
      }, {
        title: "Abdijmuseum Ten Duinen",
        url: "https://www.tenduinen.be/nl/toegankelijkheid"
      }, {
        title: "Museum Hof van Busleyden",
        url: "https://www.hofvanbusleyden.be/toegankelijkheid"
      }, {
        title: "Museum aan de IJzer",
        url: "https://www.museumaandeijzer.be/nl/plan-je-bezoek/#toegankelijkheid"
      }, {
        title: "Het James Ensorhuis",
        url: "https://www.ensorstad.be/nl/toegankelijkheid"
      }, {
        title: "Gallo-Romeins Museum",
        url: "https://www.galloromeinsmuseum.be/nl/praktisch/toegankelijkheid"
      }, {
        title: "DIVA - Museum voor diamant, juwelen en zilver",
        url: "https://www.divaantwerp.be/nl/visit/toegankelijkheid"
      }, {
        title: "Museum44 Meensel-Kiezegem",
        url: "https://museum44.be/toegankelijkheid/"
      }
    ];
  }
}
