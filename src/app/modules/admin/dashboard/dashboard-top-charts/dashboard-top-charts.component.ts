import {Component, OnInit} from '@angular/core'
import {dbwAnimations} from '@digital_brand_work/animations/animation.api'
import {TransformEntity} from '@digital_brand_work/helpers/transform-entity'
import {select, Store} from '@ngrx/store'
import {LINE_CHART_CONFIG} from 'app/app-core/configs/line-chat-config'
import {StoreAction} from 'app/app-core/store/core/action.enum'
import {AppState} from 'app/app-core/store/core/app.state'
import {StateEnum} from 'app/app-core/store/core/state.enum'
import {map, tap} from 'rxjs'
import * as days from 'dayjs'
import {shortened} from '@digital_brand_work/pipes/shorten.day.pipe'
import {MonthEnum} from '@digital_brand_work/helpers/helpers'
@Component({
    selector: 'dashboard-top-charts',
    templateUrl: './dashboard-top-charts.component.html',
    styleUrls: ['./dashboard-top-charts.component.scss'],
    animations: [...dbwAnimations],
})
export class DashboardTopChartsComponent implements OnInit {
    constructor(private _store: Store<AppState>) {}

    facultiesChart = {...LINE_CHART_CONFIG, colors: ['#013366']}
    publicationsChart = {...LINE_CHART_CONFIG, colors: ['#FFCA04']}
    researchesChart = {...LINE_CHART_CONFIG, colors: ['#13B8A6']}
    trainingAndSeminarsChart = {...LINE_CHART_CONFIG, colors: ['#15B881']}

    ready: boolean = false

    faculties$ = this._store.pipe(
        select(StateEnum.FACULTY),
        map((x) => new TransformEntity(x).toArray()),
        tap(
            (x) =>
                (this.facultiesChart.series[0] = {
                    name: 'Faculties',
                    data: this.toChart(x as any),
                }),
        ),
    )

    publications$ = this._store.pipe(
        select(StateEnum.PUBLICATION),
        map((x) => new TransformEntity(x).toArray()),
        tap((x) => {
            this.publicationsChart.series[0] = {
                name: 'Publications',
                data: this.toChart(x as any),
            }
        }),
    )

    researches$ = this._store.pipe(
        select(StateEnum.RESEARCH),
        map((x) => new TransformEntity(x).toArray()),
        tap(
            (x) =>
                (this.researchesChart.series[0] = {
                    name: 'Researches',
                    data: this.toChart(x as any),
                }),
        ),
    )

    trainingAndSeminars$ = this._store.pipe(
        select(StateEnum.TRAINING_AND_SEMINARS),
        map((x) => new TransformEntity(x).toArray()),
        tap(
            (x) =>
                (this.trainingAndSeminarsChart.series[0] = {
                    name: 'Training & Seminars',
                    data: this.toChart(x as any),
                }),
        ),
    )

    ngOnInit(): void {
        this._store.dispatch(StoreAction.FACULTY.LOAD())
        this._store.dispatch(StoreAction.PUBLICATION.LOAD())
        this._store.dispatch(StoreAction.RESEARCH.LOAD())
        this._store.dispatch(StoreAction.TRAINING_AND_SEMINARS.LOAD())

        setTimeout(() => {
            this, (this.ready = true)
        }, 2000)
    }

    toChart(data: ChartData[]): Series[] {
        let chartData = Object.values(MonthEnum).map((month) => {
            return {
                x: shortened(month),
                y: [0],
            }
        })

        data.forEach((series) => {
            const month = days(series.createdAt).format('MMM')
            const index = chartData.findIndex((data) => data.x === month)

            const value = chartData[index].y[0] + 1
            chartData[index].y[0] = value
        })
        return chartData
    }
}

interface Series {
    x: string
    y: number[]
}

interface ChartData {
    createdAt: Date
    updatedAt: Date
}
