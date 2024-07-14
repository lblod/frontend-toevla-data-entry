import { A } from '@ember/array';
import Route from '@ember/routing/route';

export default class BuildingsRoute extends Route {
  model() {
    return A([
      {
        title: "De wereld van Kina: het Huis",
        url: "https://dewereldvankina.stad.gent/toegankelijkheid",
        widget: "5F9950A6EF5FF20008000002"
      }, {
        title: "Huis van Alijn",
        url: "https://huisvanalijn.be/nl/toegankelijkheid",
        widget: "5F9A9CB3EF5FF20008000080"
      }, {
        title: "S.M.A.K. Gent",
        url: "https://smak.be/toegankelijkheid",
        widget: "5FA7BC0EEF5FF200080000E2"
      }, {
        title: "De wereld van Kina: de Tuin",
        url: "https://dewereldvankina.stad.gent/toegankelijkheid",
        widget: "5F9965C8EF5FF20008000006"
      }, {
        title: "MSK Gent - Museum voor Schone Kunsten Gent",
        url: "https://www.mskgent.be/nl/toegankelijkheid",
        widget: "5FA2A9DBEF5FF20008000007"
      }, {
        title: "Museum Dr. Guislain",
        url: "https://www.museumdrguislain.be/nl/toegankelijkheid",
        widget: "5FABA33DEF5FF2000800011A"
      }, {
        title: "GUM - Gents Universiteitsmuseum",
        url: "https://www.gum.gent/nl/toegankelijkheid",
        widget: "5FB3626BEF5FF20008000015"
      }, {
        title: "Design Museum Gent",
        url: "https://www.designmuseumgent.be/toegankelijkheid",
        widget: "5F9A82DFEF5FF2000800007D"
      }, {
        title: "Industriemuseum",
        url: "https://www.industriemuseum.be/nl/toegankelijkheid",
        widget: "5FA3B298EF5FF2000800002D"
      }, {
        title: "Sint-Pietersabdij",
        url: "https://historischehuizen.stad.gent/nl/sint-pietersabdij/toegankelijkheid",
        widget: "5FA3DEA2EF5FF2000800007B"
      }, {
        title: "Gravensteen",
        url: "https://historischehuizen.stad.gent/nl/gravensteen/toegankelijkheid",
        widget: "5FA41C15EF5FF200080000B4"
      }, {
        title: "STAM - Stadsmuseum Gent",
        url: "https://www.stamgent.be/nl_be/bezoek-het-stam/toegankelijkheid",
        widget: "5FB23B0CEF5FF20008000002"
      }, {
        title: "Damiaanmuseum",
        url: "http://damiaanmuseum.be/toegankelijkheid/",
        widget: "610D05F55E73B50008000090"
      }, {
        title: "Museum Voor Religieuze Kunst Diest",
        url: "https://diest.be/museum-voor-religieuze-kunst",
        widget: "610D275C5E73B500080000DF"
      }, {
        title: "Bezoekerscentrum Dru!f, huis van de tafeldruif",
        url: "https://www.overijse.be/druif-toegankelijkheid",
        widget: "610D18EA5E73B500080000D5"
      }, {
        title: "Hidrodoe",
        url: "https://www.hidrodoe.be/plan-je-dag/toegankelijkheid",
        widget: "610D14945E73B500080000B0"
      }, {
        title: "Abdijmuseum Ten Duinen",
        url: "https://www.tenduinen.be/nl/toegankelijkheid",
        widget: "60B52839560CA50008000058"
      }, {
        title: "Museum Hof van Busleyden",
        url: "https://www.hofvanbusleyden.be/toegankelijkheid",
        widget: "6148AB2E5E73B5000900012D"
      }, {
        title: "Museum aan de IJzer",
        url: "https://www.museumaandeijzer.be/nl/plan-je-bezoek/#toegankelijkheid",
        widget: "6148AACE5E73B5000900012B"
      }, {
        title: "Het James Ensorhuis",
        url: "https://www.ensorhuis.be/nl/het-james-ensorhuis-vlaanderenstraat-29#ensor-block-02",
        widget: "60D47D535E73B5000800001E"
      }, {
        title: "Gallo-Romeins Museum",
        url: "https://www.galloromeinsmuseum.be/plan-je-bezoek/toegankelijkheid/",
        widget: "610D14555E73B500080000AE"
      }, {
        title: "DIVA - Museum voor diamant, juwelen en zilver",
        url: "https://www.divaantwerp.be/nl/visit/toegankelijkheid",
        widget: "610D07EB5E73B5000800009A"
      }, {
        title: "Museum44 Meensel-Kiezegem",
        url: "https://museum44.be/toegankelijkheid/",
        widget: "610D13FC5E73B500080000AA"
      }, {
        title: "Het Stadsmus - Hasselt",
        url: "https://www.visithasselt.be/nl/het-stadsmus/plan-je-bezoek",
        widget: "6148A9B85E73B50009000125"
      }, {
        title: "M Leuven",
        url: "https://www.mleuven.be/plan-je-bezoek/toegankelijkheid-faciliteiten/toegankelijkheid/toegankelijkheidswijzer",
        widget: "6135BED65E73B50009000004"
      }, {
        title: "Stadsmuseum Lier",
        url: "https://www.stadsmuseumlier.be/content/toegankelijkheid",
        widget: "610D26BA5E73B500080000D9"
      }, {
        title: "KOERS, Museum van de Wielersport",
        url: "https://koersmuseum.be/nl/general/toegankelijkheid",
        widget: "60D47D0D5E73B5000800001C"
      }, {
        title: "Mu.ZEE - Oostende",
        url: "https://www.muzee.be/nl/bezoek-1",
        widget: "http://data.toegankelijk.vlaanderen.be/id/widgets/610D272B5E73B500080000DD"
      }, {
        title: "Museum Torhouts Aardewerk",
        url: "https://www.visittorhout.be/museum-torhouts-aardewerk",
        widget: "http://data.toegankelijk.vlaanderen.be/id/widgets/610D07A75E73B50008000098"
      }, {
        title: "Technopolis",
        url: "https://www.technopolis.be/nl/toegankelijkheid-en-voorzieningen/",
        widget: "http://data.toegankelijk.vlaanderen.be/id/widgets/638864CF0C87E7C2C6A3B25C"
      }
    ]).sortBy("title");
  }
}
