import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {routerTransition} from '../../router.animations';


@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss'],
    animations: [routerTransition()]
})
export class ServicesComponent implements OnInit {
    barcodeResponse: BarcodeModel;
    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    }

    ngOnInit() {
        this.http.get<BarcodeModel>( this.baseUrl + 'api/dashboard').subscribe(data => {
            // data is now an instance of type ItemsResponse, so you can do this:
            this.barcodeResponse = data;
        });
    }

}
interface BarcodeModel {
    txtDecoderType: string;
    txtDecoderContent: string;
}
