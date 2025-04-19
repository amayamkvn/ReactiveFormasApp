import { Routes } from "@angular/router";
import { BasicsPageComponent } from "./pages/basics-page/basics-page.component";
import { SwitchesPageComponent } from "./pages/switches-page/switches-page.component";
import { DynamicPageComponent } from "./pages/dynamic-page/dynamic-page.component";

export const authRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'basics',
                title: 'Básicos',
                component: BasicsPageComponent
            },
            {
                path: 'dynamic',
                title: 'Dinámicos',
                component: DynamicPageComponent
            },
            {
                path: 'switches',
                title: 'Switches',
                component: SwitchesPageComponent
            },
            {
                path: '**',
                redirectTo: 'basic'
            }
        ]
    }
]