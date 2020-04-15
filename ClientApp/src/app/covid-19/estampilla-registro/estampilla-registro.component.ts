import { Component, OnInit } from '@angular/core';

import { estampilla } from '../models/estampilla';

import { EstampillaService } from '../../services/estampilla.service';

@Component({

selector: 'app-Estampilla-registro',

templateUrl: './Estampilla-registro.component.html',

styleUrls: ['./Estampilla-registro.component.css']

})

export class EstampillaRegistroComponent implements OnInit {

  estampilla: estampilla;

constructor(private estampillaService: estampillaService) { }

ngOnInit() {

this.estampilla= new ();

}

add() {

this.estampillaService.post(this.estampilla).subscribe(p => {

if (p != null) {

alert('estampilla creada!');

this.estampilla = p;

}

});

}

}