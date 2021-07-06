import { Component, OnInit } from '@angular/core';
import { VeiculoService } from 'src/app/services/veiculo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from 'src/app/models/veiculo.model';

@Component({
  selector: 'app-veiculo-details',
  templateUrl: './veiculo-details.component.html',
  styleUrls: ['./veiculo-details.component.css']
})
export class VeiculoDetailsComponent implements OnInit {

  currentVeiculo: Veiculo = {
    veiculo: '',
    marca: '',
    ano: 0,
    descricao: '',
    vendido: false
  };
  message = '';

  constructor(
    private veiculoService: VeiculoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getVeiculo(this.route.snapshot.params.id);
  }

  getVeiculo(id: string): void {
    this.veiculoService.get(id)
      .subscribe(
        data => {
          this.currentVeiculo = data.data;
          console.log(data.data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: boolean): void {
    const data = {
      veiculo: this.currentVeiculo.veiculo,
      marca: this.currentVeiculo.marca,
      ano: this.currentVeiculo.ano,
      descricao: this.currentVeiculo.descricao,
      vendido: this.currentVeiculo.vendido
    };

    this.message = '';

    this.veiculoService.update(this.currentVeiculo.id, data)
      .subscribe(
        response => {
          this.currentVeiculo.vendido = status;
          console.log(response);
          this.message = response.message ? response.message : 'Atualizado Com Sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  updateVeiculo(): void {
    this.message = '';
    this.veiculoService.update(this.currentVeiculo.id, this.currentVeiculo)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'Esse veiculo foi atualizado com sucesso!!';
        },
        error => {
          console.log(error);
        });
  }

  deleteVeiculo(): void {
    this.veiculoService.delete(this.currentVeiculo.id)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });

        this.router.navigate(['/veiculo']);
  }
}