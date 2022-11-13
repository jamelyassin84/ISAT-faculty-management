import {Component, OnInit} from '@angular/core'
import {dbwAnimations} from '@digital_brand_work/animations/animation.api'

@Component({
    selector: 'faculty-list',
    templateUrl: './faculty-list.component.html',
    styleUrls: ['./faculty-list.component.scss'],
    animations: [...dbwAnimations],
})
export class FacultyListComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    trackByFn(index: number, item: any): any {
        return item.id || index
    }
}
