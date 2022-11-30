import React from 'react';
import Chart from 'react-apexcharts'

function Donut5(){
    return(
        <div>
            <Chart
            type='donut'
            width={300}
            height={250}
            series={[50,85]}
            offsetX={50}
            

            options={{
                labels:['kk','ll'],
                colors: ['#8B1DA2', '#CFD8DC'],
                

                plotOptions:{
                    pie:{
                        expandOnClick:false,
                        startAngle: 10,
                        donut:{
                            size: '85%',
                            labels:{
                                show:true,
                                name: {
                                    show: true,
                                    offsetY: 38,
                                    formatter: () => 'CONTRACTED'
                                  },
                                  value: {
                                    show: true,
                                    label: '90%',
                                    fontSize: '48px',
                                    fontFamily: 'Poppin',
                                    fontWeight: 500,
                                    color: '#000',
                                    offsetY: -10
                                  },
                                total:{
                                    show:true,
                                    showAlways:true,
                                    label: '90%',
                                    // fontSize:50,
                                    fontWeight: 500,
                                }
                            }
                        }
                    }
                },
                dataLabels:{
                    enabled: false,
                    style: {
                        // colors: ['#5BD366', '#CFD8DC']
                      }
                      
                },
                legend: {
                    show: false,
                    position: 'right',
                    offsetX: -30,
                    offsetY: 70,
                    // formatter: (value, opts) => {
                    //   return value + ' - ' + opts.w.globals.series[opts.seriesIndex];
                    // },
                    markers: {
                      onClick: undefined,
                      offsetX: 0,
                      offsetY: 25
                    }
                  },
            }}
            />
        </div>
    )
}

export default Donut5;