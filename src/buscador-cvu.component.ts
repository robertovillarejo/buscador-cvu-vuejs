import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import bAlert from 'bootstrap-vue/es/components/alert/alert';
import { Component, Vue } from 'vue-property-decorator';
import CvuService from './cvu.service';

library.add(faSearch); // agrega el icono de lupa

@Component({
    components: {
        'font-awesome-icon': FontAwesomeIcon,
        'b-alert': bAlert
    }
})
export default class BuscadorCvu extends Vue {

    private cvuService = new CvuService();

    public dismissCountDown = 0;
    public alertType = '';
    public alertMessage = '';

    public searchKey: string = '';
    public isSearching: boolean = false;

    public buscar() {
        if (this.searchKey) {
            this.isSearching = true;
            this.cvuService
                .retrieveByCvu(this.searchKey)
                .then(res => {
                    res.data.correoLogin = res.data.login;
                    res.data.login = null;
                    this.$emit('found', res.data);
                    this.searchKey = '';
                    this.isSearching = false;
                })
                .catch(() => {
                    this.alertType = 'warning';
                    this.alertMessage = `No se encontró a la persona con cvu ${this.searchKey}`;
                    this.dismissCountDown = 5;
                    this.isSearching = false;
                });
        }
    }

    public countDownChanged(dismissCountDown: number) {
        this.dismissCountDown = dismissCountDown;
    }
}