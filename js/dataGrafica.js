$(() => {
    const chartInstance = $('#chart').dxChart({
      rotated: true,
      title: 'VIDEOS MÁS VISTOS EN LA SEMANA',
      dataSource: goldMedals,
      series: {
        color: '#00E6FF',
        argumentField: 'country',
        valueField: 'medals',
        type: 'bar',
        label: {
          visible: true,
        },
      },
      legend: {
        visible: false,
      },
    }).dxChart('instance');
  
    const pieChartInstance = $('#pieChart').dxPieChart({
      palette: 'Harmony Light',
      dataSource: allMedals,
      title: 'ACTIVO ENLA PÁGINA',
      series: [{
        argumentField: 'country',
        valueField: 'medals',
        label: {
          visible: true,
          connector: {
            visible: true,
          },
        },
      }],
    }).dxPieChart('instance');
  
    $('#export').dxButton({
      icon: 'export',
      text: 'Export',
      type: 'default',
      width: 145,
      onClick() {
        DevExpress.viz.exportWidgets([[chartInstance, pieChartInstance]], {
          fileName: 'chart',
          format: 'PNG',
        });
      },
    });
  });
  
  
  const allMedals = [{
    country: 'Lunes',
    medals: 50,
  }, {
    country: 'Martes',
    medals: 20,
  }, {
    country: 'Miercoles',
    medals: 40,
  }, {
    country: 'Jueves',
    medals: 80,
  }, {
    country: 'Viernes',
    medals: 100,
  }, {
    country: 'Sábado',
    medals: 37,
  }, {
    country: 'Domingo',
    medals: 70,
  }];
  
  const goldMedals = [{
    country: 'Recorrido Virtual',
    medals: 50,
  }, {
    country: 'Recorrido Destello de Luz',
    medals: 20,
  }, {
    country: 'Recorrido Destello de Luz 2',
    medals: 40,
  }, {
    country: 'Recorrido Burbuja de Agua',
    medals: 80,
  }, {
    country: 'Recorrido en Portal Colorido',
    medals: 100,
  }, {
    country: 'Recorrido en Sistema',
    medals: 37,
  }, {
    country: 'Recorrido Sistema Solar',
    medals: 70,
  }, {
    country: 'Recorrido en Montaña Rusa',
    medals: 68,
  }, {
    country: 'Recorrido en un campo',
    medals: 29,
  }, {
    country: 'Recorrido en cascada',
    medals: 15,
  }, {
    country: 'Recorrido en lluvia',
    medals: 8,
  }, {
    country: 'Recorrido en la playa',
    medals: 6,
  }, {
    country: 'Recorrido en puebla',
    medals: 3,
  }, {
    country: 'Recorrido en un pueblo',
    medals: 23,
  }];
  ner('change', leerArchivo, false);