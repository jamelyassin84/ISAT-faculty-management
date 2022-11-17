import {Component, OnInit} from '@angular/core'

@Component({
    selector: 'staff',
    templateUrl: './staff.component.html',
    styleUrls: ['./staff.component.scss'],
})
export class StaffComponent implements OnInit {
    constructor() {}

    isAdmin: boolean = localStorage.getItem('accessToken') !== 'null'

    ngOnInit(): void {}
}
