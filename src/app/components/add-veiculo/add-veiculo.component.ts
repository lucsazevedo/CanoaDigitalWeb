import { VeiculoService } from 'src/app/services/veiculo.service';
import { Veiculo } from './../../models/veiculo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-veiculo',
  templateUrl: './add-veiculo.component.html',
  styleUrls: ['./add-veiculo.component.css']
})
export class AddVeiculoComponent implements OnInit {

  veiculo: Veiculo ={
    veiculo: '',
    marca: '',
    ano: 0,
    descricao: '',
    vendido: false
  }
  submitted = false;
  constructor(private veiculoService: VeiculoService) { }

  ngOnInit(): void {
  }

  saveVeiculo(): void {
    const data = {
      veiculo: this.veiculo.veiculo,
      marca: this.veiculo.marca,
      ano: this.veiculo.ano,
      descricao: this.veiculo.descricao,
      vendido: this.veiculo.vendido
    };

    this.veiculoService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newVeiculo(): void {
    this.submitted = false;
    this.veiculo = {
      veiculo: '',
      marca: '',
      ano: 0,
      descricao: '',
      vendido: false
    };
  }
}
