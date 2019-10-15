import axios from 'axios';

export default class CvuService {

    private baseApiUrl: string;

    constructor(baseApiUrl?: string) {
        this.baseApiUrl = baseApiUrl || 'services/cvu/api/';
    }

    public retrieveByCvu(cvu: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            axios
                .get(this.baseApiUrl + 'cvu/' + cvu)
                .then(function (res: any) {
                    resolve(res);
                })
                .catch((err: any) => {
                    reject(err);
                });
        });
    }

    public retrieveByRcea(rcea: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            axios
                .get(this.baseApiUrl + 'rcea/' + rcea)
                .then(function (res) {
                    resolve(res);
                }).catch(err => reject(err));
        });
    }

    public retrieveByReniecyt(numeroReniecyt: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            axios
                .get(this.baseApiUrl + 'reniecyt/' + numeroReniecyt)
                .then(function (res) {
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    public retrieveByLogin(correoUsuario: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            axios
                .get(this.baseApiUrl + 'personas/' + correoUsuario)
                .then(function (res) {
                    resolve(res);
                }).catch(err => reject(err))
        });
    }
}