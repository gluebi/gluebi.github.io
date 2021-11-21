import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

export interface State {
  homeHeadline: string;
  homeParagraphs: Array<string>;
  referencesHeadline: string;
  references: Array<string>;
  imprintHeadline: string;
  imprintParagraphs: Array<string>;
  notFoundHeadline: string;
  notFoundParagraphs: Array<string>;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    homeHeadline: "Frontend Developer & Mediengestalter",
    homeParagraphs: [
      "Hello, I am Oliver.",
      'I design and build SPAs with <a href="https://vuejs.org/" title="Vue.js" target="_blank" rel="noopener">Vue.js</a>',
      'Currently I am employed at <a href="https://www.customer-alliance.com/" title="Customer Alliance" target="_blank" rel="noopener">CA Customer Alliance GmbH</a>.',
      'You can contact me <a href="mailto:kontakt@oliver-pietsch.de">here</a> (<a href="https://oliver-pietsch.de/kontakt_at_oliver-pietsch.de_public_key.asc" download rel="noopener" >PGP Key</a>).',
    ],
    referencesHeadline: "References",
    references: [
      'Senior Frontend Developer at <a href="https://www.customer-alliance.com/" title="Customer Alliance" target="_blank" rel="noopener">CA Customer Alliance GmbH</a>',
      'Frontend Developer at <a href="https://mercedes-benz.io" title="Mercedes-Benz.io" target="_blank" rel="noopener">Mercedes-Benz.io</a>',
      'Frontend Developer at <a href="https://www.publicispixelpark.de/" title="Publicis Pixelpark" target="_blank" rel="noopener">Publicis Pixelpark</a>',
      'Freelance work at <a href="https://www.co2online.de" title="co2online" target="_blank" rel="noopener">co2online gGmbH</a> als Typo3 Assistenz',
      'Freelance work at <a href="https://www.mentronic.com" title="mentronic" target="_blank" rel="noopener">mentronic Digitale Kommunkation</a>',
      "Technology Assistant at Stanford University in Berlin (Bing Overseas Studies Program)",
      'Freelance work at <a href="https://www.blitzrechner.de" title="Blitzrechner" target="_blank" rel="noopener">www.blitzrechner.de</a> and <a href="https://www.blitzresults.com" title="Blitzresults" target="_blank" rel="noopener">www.blitzresults.com</a> as developer',
      'Ausbildung zum Mediengestalter bei <a href="https://www.laborfuergestaltung.de" title="Labor für Gestaltung" target="_blank" rel="noopener">Labor für Gestaltung Schleßelmann GmbH</a>',
      'Technische Umsetzung der Website <a href="http://http://www.laborfuergestaltung.de" title="Labor für Gestaltung" target="_blank" rel="noopener">www.laborfuergestaltung.de</a>',
    ],
    imprintHeadline: "Imprint",
    imprintParagraphs: [
      "Oliver Pietsch<br> Müllerstr. 142<br> 13353&nbsp;Berlin<br> Mail: kontakt [{ @ }] oliver-pietsch.de",
    ],
    notFoundHeadline: "404 - This page does not exist",
    notFoundParagraphs: ["Sorry, the page you are looking for does not exit."],
  },
});
