import { Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { TeachingComponent } from './teaching/teaching.component';
import { ResearchComponent } from './research/research.component';
import { WorkComponent } from './work/work.component';
import { FeedbackComponent } from './feedback/feedback.component';

// Routes, AKA pages on my website
const homeRoute = {
    path: '', component: HomeComponent
}
const aboutMeRoute = {
    path: 'about', component: AboutMeComponent
}
const educationRoute = {
    path: 'education', component: EducationComponent
}
const teachingRoute = {
    path: 'teaching', component: TeachingComponent
}
const researchRoute = {
    path: 'research', component: ResearchComponent
}
const workRoute = {
    path: 'work', component: WorkComponent
}
const feedbackRoute = {
    path: 'feedback', component: FeedbackComponent
}

export const routes: Routes = [
    homeRoute, 
    aboutMeRoute,
    educationRoute,
    teachingRoute,
    researchRoute,
    workRoute,
    feedbackRoute
];