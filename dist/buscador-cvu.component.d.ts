import { Vue } from 'vue-property-decorator';
import { IPersonaFisica } from './model/persona-fisica.model';
export declare class Options {
    host?: string | undefined;
    constructor(host?: string | undefined);
}
declare let defaultConfig: Options;
export { defaultConfig };
export default class BuscadorCvu extends Vue {
    readonly value: IPersonaFisica;
    dismissCountDown: number;
    alertType: string;
    alertMessage: string;
    searchKey: string;
    isSearching: boolean;
    readonly options: Options;
    buscar(): void;
}
