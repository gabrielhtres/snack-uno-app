import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss'],
})
export class PesquisaComponent implements OnInit {

  public tipoPesquisa: string = ''

  constructor(private rota: ActivatedRoute) { }

  ngOnInit() {
    this.tipoPesquisa = this.rota.snapshot.paramMap.get('tipoPesquisa')
  }

}
