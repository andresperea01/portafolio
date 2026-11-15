import { Component, input } from '@angular/core'; import { CommonModule } from '@angular/common';
@Component({selector:'app-skill-list', standalone:true, imports:[CommonModule], template:`<div class="chips"><span class="chip" *ngFor="let item of items()">{{ item }}</span></div>`})
export class SkillListComponent { items = input.required<string[]>(); }
