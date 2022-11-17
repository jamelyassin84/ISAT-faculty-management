import {MonthEnum} from '@digital_brand_work/enums/month.enum'
import {months} from '@digital_brand_work/helpers/helpers'
import {shortened} from '@digital_brand_work/pipes/shorten.day.pipe'

export const LINE_CHART_CONFIG = {
    stroke: {
        width: [3, 0],
    },
    colors: ['#269D8E'],
    labels: [],
    series: [
        {
            name: 'Sales',
            data: Object.values(MonthEnum).map((month) => {
                return {
                    x: shortened(month),
                    y: [randomNumber()],
                }
            }),
        },
    ],
    chart: {
        height: 450,
        type: 'bar',
    },
    tooltip: {
        followCursor: true,
        theme: 'light',
    },
    xaxis: {
        axisBorder: {
            show: false,
        },
        axisTicks: {
            color: 'var(--fuse-border)',
        },
        labels: {
            style: {
                colors: 'var(--fuse-text-secondary)',
            },
        },
        tooltip: {
            enabled: false,
        },
    },
    yaxis: {
        labels: {
            offsetX: -16,
            style: {
                colors: 'var(--fuse-text-secondary)',
            },
        },
    },
    legend: {
        show: false,
    },
    plotOptions: {
        bar: {
            columnWidth: '20%',
        },
    },
    dataLabels: {
        enabled: false,
        enabledOnSeries: [0],
        background: {
            borderWidth: 0,
        },
    },
    grid: {
        borderColor: 'var(--fuse-border)',
    },
    states: {
        hover: {
            filter: {
                type: 'darken',
                value: 0.75,
            },
        },
    },
}

function randomNumber() {
    return Math.floor(Math.random() * 100) + 10
}
