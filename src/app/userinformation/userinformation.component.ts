import { Component } from '@angular/core';
import {DatosUsuario} from "../_model/usuario";
import {EChartsOption} from "echarts";

@Component({
  selector: 'app-userinformation',
  templateUrl: './userinformation.component.html',
  styleUrl: './userinformation.component.css'
})
export class UserinformationComponent {
  strusuario=localStorage.getItem("datosUsuario");
  usuario:DatosUsuario;
  constructor() {
    this.usuario=JSON.parse(this.strusuario as string);
    this.chartOption={
      series: [
        {
          type: 'gauge',
          progress: {
            show: true,
            width: 18
          },
          axisLine: {
            lineStyle: {
              width: 18
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            length: 15,
            lineStyle: {
              width: 2,
              color: '#999'
            }
          },
          axisLabel: {
            distance: 25,
            color: '#999',
            fontSize: 20
          },
          anchor: {
            show: true,
            showAbove: true,
            size: 25,
            itemStyle: {
              borderWidth: 10
            }
          },
          title: {
            show: false
          },
          detail: {
            valueAnimation: true,
            formatter: function (value) {
              return  value.toFixed(0) + ' %';
            },
            fontSize: 45,
            offsetCenter: [0, '70%']
          },
          data: [
            {
              value: this.obtenerPorcentajePornivel()as any
            }
          ]
        }
      ]

    };
  }

  private obtenerPorcentajePornivel() {
    console.log(this.usuario)
    if( parseInt(this.usuario?.level) ==1){
      return "20";
    }else    if( parseInt(this.usuario?.level) ==2){
      return "40";

    } else  if( parseInt(this.usuario?.level) ==3){
      return "60";
    }else if( parseInt(this.usuario?.level) ==4){
      return "80";
    }else {
      return "0"
    }
  }

  chartOption: EChartsOption ;


}
