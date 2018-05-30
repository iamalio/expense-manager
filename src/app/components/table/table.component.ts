import { Component } from '@angular/core';
import { TableDataService } from '../../table-data.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-table',
    templateUrl: 'table.component.html',
    styleUrls: ['table.component.scss']
})

export class TableComponent {
    characters: Observable<any[]>;
    columns: string[];

    constructor(private atService: TableDataService) {}

    ngOnInit() {
        this.columns = this.atService.getColumns();

        this.characters = this.atService.getCharacters();
    }
}