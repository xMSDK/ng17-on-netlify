import { Routes } from '@angular/router';
import { ContactezNousComponent } from './contactez-nous/contactez-nous.component';
import { NosPartenairesComponent } from './nos-partenaires/nos-partenaires.component';
import { NosTalentsComponent } from './nos-talents/nos-talents.component';
import { NotreVisionComponent } from './notre-vision/notre-vision.component';

export const routes: Routes = [
    { path: 'notre-vision', component: NotreVisionComponent },
    { path: 'nos-talents', component: NosTalentsComponent },
    { path: 'nos-partenaires', component: NosPartenairesComponent },
    { path: 'contactez-nous', component: ContactezNousComponent },
    { path: '', redirectTo: '', pathMatch: 'full' },
];