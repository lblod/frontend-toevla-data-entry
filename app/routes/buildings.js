import { A } from '@ember/array';
import Route from '@ember/routing/route';

export default class BuildingsRoute extends Route {
  model() {
    return A([
      {
        title: "Kina - Gent",
        url: "https://kina.stad.gent/toegankelijkheid",
        widget: "5F9950A6EF5FF20008000002" // Huis
        // widget: "5F9965C8EF5FF20008000006" // Tuin
      }, {
        title: "Huis van Alijn - Gent",
        url: "https://huisvanalijn.be/nl/toegankelijkheid",
        widget: "5F9A9CB3EF5FF20008000080"
      }, {
        title: "S.M.A.K. - Gent",
        url: "https://smak.be/nl/bezoek-smak/toegankelijkheid",
        widget: "5FA7BC0EEF5FF200080000E2"
      }, {
        title: "MSK Gent - Museum voor Schone Kunsten Gent - Gent",
        url: "https://www.mskgent.be/nl/toegankelijkheid",
        widget: "5FA2A9DBEF5FF20008000007"
      }, {
        title: "Museum Dr. Guislain - Gent",
        url: "https://www.museumdrguislain.be/nl/toegankelijkheid-1",
        widget: "5FABA33DEF5FF2000800011A"
      }, {
        title: "GUM - Gents Universiteitsmuseum - Gent",
        url: "https://www.gum.gent/nl/toegankelijkheid",
        widget: "5FB3626BEF5FF20008000015"
      }, {
        title: "Design Museum Gent - Gent",
        url: "https://www.designmuseumgent.be/toegankelijkheid",
        widget: "5F9A82DFEF5FF2000800007D"
      }, {
        title: "Industriemuseum - Gent",
        url: "https://www.industriemuseum.be/nl/toegankelijkheid",
        widget: "5FA3B298EF5FF2000800002D"
      }, {
        title: "Sint-Pietersabdij - Gent",
        url: "https://historischehuizen.stad.gent/nl/sint-pietersabdij/toegankelijkheid",
        widget: "5FA3DEA2EF5FF2000800007B"
      }, {
        title: "Gravensteen - Gent",
        url: "https://historischehuizen.stad.gent/nl/gravensteen/toegankelijkheid",
        widget: "5FA41C15EF5FF200080000B4"
      }, {
        title: "STAM - Stadsmuseum Gent - Gent",
        url: "https://www.stamgent.be/nl_be/bezoek-het-stam/toegankelijkheid",
        widget: "5FB23B0CEF5FF20008000002"
      }, {
        title: "Damiaanmuseum - Tremelo",
        url: "https://www.damiaan.be/museum/toegankelijkheid",
        widget: "610D05F55E73B50008000090"
      }, {
        title: "Museum Voor Religieuze Kunst Diest - Diest",
        url: "https://www.diest.be/vrije-tijd/cultuur-en-erfgoed/musea/museum-voor-religieuze-kunst",
        widget: "610D275C5E73B500080000DF"
      }, {
        title: "Bezoekerscentrum Dru!f, huis van de tafeldruif - Overijse",
        url: "https://www.overijse.be/druif-toegankelijkheid",
        widget: "610D18EA5E73B500080000D5"
      }, {
        title: "Hidrodoe - Herentals",
        url: "https://www.hidrodoe.be/plan-je-dag/toegankelijkheid",
        widget: "610D14945E73B500080000B0"
      }, {
        title: "Abdijmuseum Ten Duinen - Koksijde",
        url: "https://www.tenduinen.be/nl/toegankelijkheid",
        widget: "60B52839560CA50008000058"
      }, {
        title: "Museum Hof van Busleyden - Mechelen",
        url: "https://www.hofvanbusleyden.be/bezoek/toegankelijkheid",
        widget: "6148AB2E5E73B5000900012D"
      }, {
        title: "Museum aan de Ijzer - Diksmuide",
        url: "https://www.museumaandeijzer.be/nl/plan-je-bezoek/#toegankelijkheid",
        widget: "6148AACE5E73B5000900012B"
      }, {
        title: "Het James Ensorhuis - Oostende",
        url: "https://www.ensorhuis.be/nl/het-james-ensorhuis-vlaanderenstraat-29#ensor-block-02",
        widget: "60D47D535E73B5000800001E"
      }, {
        title: "Gallo-Romeins Museum - Tongeren",
        url: "https://www.galloromeinsmuseum.be/plan-je-bezoek/toegankelijkheid/",
        widget: "610D14555E73B500080000AE"
      }, {
        title: "DIVA - Museum voor diamant, juwelen en zilver - Antwerpen",
        url: "https://www.divaantwerp.be/nl/visit/toegankelijkheid",
        widget: "610D07EB5E73B5000800009A"
      }, {
        title: "Museum44 Meensel-Kiezegem - Meensel-Kiezegem",
        url: "https://museum44.be/toegankelijkheid/",
        widget: "610D13FC5E73B500080000AA"
      }, {
        title: "Het Stadsmus - Hasselt",
        url: "https://www.visithasselt.be/nl/het-stadsmus/plan-je-bezoek",
        widget: "6148A9B85E73B50009000125"
      }, {
        title: "M Leuven - Leuven",
        url: "https://www.mleuven.be/plan-je-bezoek/toegankelijkheid-faciliteiten/toegankelijkheid/toegankelijkheidswijzer",
        widget: "6135BED65E73B50009000004"
      }, {
        title: "Stadsmuseum Lier - Lier",
        url: "https://www.stadsmuseumlier.be/content/toegankelijkheid",
        widget: "610D26BA5E73B500080000D9"
      }, {
        title: "KOERS. Museum van de Wielersport - Roeselare",
        url: "https://koersmuseum.be/nl/general/toegankelijkheid",
        widget: "60D47D0D5E73B5000800001C"
      }, {
        title: "Mu.ZEE - Oostende",
        url: "https://www.muzee.be/nl/bezoek-1",
        widget: "610D272B5E73B500080000DD"
      }, {
        title: "Museum Torhouts Aardewerk - Torhout",
        url: "https://www.visittorhout.be/toegankelijk",
        widget: "610D07A75E73B50008000098"
      }, {
        title: "Technopolis - Mechelen",
        url: "https://www.technopolis.be/nl/toegankelijkheid-en-voorzieningen/",
        widget: "638864CF0C87E7C2C6A3B25C"
      }, {
        title: "MOU-Museum Oudenaarde - Oudenaarde",
        url: "https://www.oudenaarde.be/nl/mou/bezoek/praktisch",
        widget: "610D142A5E73B500080000AC"
      },
      {
        title: "Venetiaanse Gaanderijen - Oostende",
        url: "https://www.oostende.be/toegankelijkheid-venetiaanse",
        widget: "65FADF5B9D50FB0224B58F4B"
      },
      {
        title: "Belevingscentrum Hoge Mote - Ronse",
        url: "https://www.visitronse.be/nl/toegankelijkheidswijzer-hoge-mote",
        widget: "67F3848B8CAA2C755C115D43"
      },
      {
        title: "Jenevermuseum - Hasselt",
        url: "https://www.jenevermuseum.be/nl/bezoek-activiteiten/tickets-openingsuren-bereikbaarheid",
        widget: "6148A97A5E73B50009000123"
      }
    ]).sortBy("title");
  }
}
