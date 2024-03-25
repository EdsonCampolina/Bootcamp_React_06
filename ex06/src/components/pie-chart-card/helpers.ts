import { ApexOptions } from 'apexcharts';
import { Gender } from '../../types';

export const buildPieChartConfig = (labels: string[] = []) => {
  const formatGender = (gender: Gender) => {
    const genders = {
      MALE: 'Masculino',
      FEMALE: 'Feminino',
      OTHER: 'Outro'
    };

    return genders[gender];
  };

  return {
    labels: labels.map((gender) => formatGender(gender as Gender)),
    noData: {
      text: 'Sem resultados',
      align: 'center',
      verticalAlign: 'middle',
      offsetX: 0,
      offsetY: 0,
      style: {
        color: '#3e82f7',
        fontSize: '18px',
        fontFamily: 'Ubuntu, sans-serif'
      }
    },
    colors: ['#FF7A00', '#7234F5', '#FF0000'],
    legend: {
      show: true,
      floating: false,
      position: 'bottom',
      offsetY: 0,
      labels: {
        colors: ['#8D8D8D', '#8D8D8D', '#8D8D8D']
      },
      fontFamily: 'Roboto, sans-serif',
      fontSize: '18px',
      itemMargin: {
        vertical: 5
      }
    },
    dataLabels: {
      enabled: true
    },
    plotOptions: {
      pie: {
        size: 400,
        donut: {
          size: '65%',
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 10,
              formatter: function () {
                return '';
              }
            },
            total: {
              show: true,
              showAlways: true,
              fontSize: '30px',
              color: '#ABB1C0',
              fontFamily: 'Ubuntu, sans-serif',
              formatter: function () {
                return '';
              }
            }
          }
        }
      }
    },
    chart: {
      height: '400px'
    }
  } as unknown as ApexOptions;
};
