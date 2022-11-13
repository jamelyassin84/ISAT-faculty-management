import {Component, OnInit} from '@angular/core'
import {MatDialog} from '@angular/material/dialog'
import {FacultyAddComponent} from './faculty-add/faculty-add.component'

@Component({
    selector: 'faculties',
    templateUrl: './faculties.component.html',
    styleUrls: ['./faculties.component.scss'],
})
export class FacultiesComponent implements OnInit {
    constructor(private _matDialog: MatDialog) {}

    ngOnInit(): void {}

    addFaculty() {
        this._matDialog.open(FacultyAddComponent, {
            panelClass: ['w-1/2', 'drop-shadow-sm'],
        })
    }
}
