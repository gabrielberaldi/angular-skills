import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/models/card.model';
import { SkillService } from '../services/skills.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    cards: Card[] = [];
    loading: boolean = true;

    constructor(
        private _skillsService: SkillService
    ) { }

    ngOnInit() {
        this._skillsService.getSkills().subscribe((response: Card[]) => {
            this.cards = response;
            this.loading = false;
        });
    }

}
