import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.scss'],
  animations: [routerTransition()]
})
export class EquipmentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
