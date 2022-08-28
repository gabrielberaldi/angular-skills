import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { SkillService } from 'src/app/services/skills.service';
import { Card } from 'src/app/shared/models/card.model';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

    @Input() card: Card;
    likesColor: string;

    constructor(
        private _httpClient: HttpClient,
        private _skillService: SkillService
    ) { }

    ngOnInit() {
        this.setLikesColor();
    }

    setLikesColor(): void {
        const likes: number = this.card.likes;
        
        if (likes >= 5 && likes <= 10) {
            this.likesColor = "#336EFF";
        } else if (likes > 10) {
            this.likesColor = "#2ECC71";
        };
    }

    onLike(card: Card): void {
        card.likes++;
        this.setLikesColor();
        this._skillService.updateSkills(card).subscribe((response: any) => {
        });
    }

    onShare(): void {
        const link: string = "https://br.linkedin.com/in/gabriel-borba-beraldi";
        window.open(link, "_blank");
    }

}
