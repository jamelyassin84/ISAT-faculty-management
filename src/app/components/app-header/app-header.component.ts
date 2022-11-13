import {Component, Input, OnInit} from '@angular/core'
import {dbwAnimations} from '@digital_brand_work/animations/animation.api'

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.scss'],
    animations: [...dbwAnimations],
})
export class AppHeaderComponent implements OnInit {
    constructor() {}

    @Input()
    title!: string

    @Input()
    subtitle!: string

    @Input()
    icon!: string

    ngOnInit(): void {}
}
