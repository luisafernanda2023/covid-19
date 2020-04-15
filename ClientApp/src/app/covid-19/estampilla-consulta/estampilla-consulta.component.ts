import { Component, OnInit } from '@angular/core';
import { estampilla } from '../models/estampilla';
import { EstampillaService } from '../../services/estampilla.service';




@Component({

    selector: 'app-estampilla-consulta',

    templateUrl: './estampilla-consulta.component.html',

    styleUrls: ['./estampilla-consulta.component.css']

})

export class estampillaConsultaComponent implements OnInit {

    estampillas: estampilla[];

    constructor(private estampillaService: EstampillaService) { }

    ngOnInit() {

        this.estampillaService.get().subscribe(result => {

            this.estampillas = result;

        });

    }

}