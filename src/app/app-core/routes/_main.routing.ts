import {Route} from '@angular/router'

export const MAIN_ROUTING: Route[] = [
    {
        path: 'faculties',
        loadChildren: () =>
            import('app/modules/admin/faculties/faculties.module').then(
                (module) => module.FacultiesModule,
            ),
    },

    {
        path: 'profile',
        loadChildren: () =>
            import('app/modules/admin/profile/profile.module').then(
                (module) => module.ProfileModule,
            ),
    },

    {
        path: 'publications',
        loadChildren: () =>
            import('app/modules/admin/publications/publications.module').then(
                (module) => module.PublicationsModule,
            ),
    },

    {
        path: 'research',
        loadChildren: () =>
            import('app/modules/admin/research/research.module').then(
                (module) => module.ResearchModule,
            ),
    },

    {
        path: 'training-and-seminar',
        loadChildren: () =>
            import(
                'app/modules/admin/training-and-seminars/training-and-seminars.module'
            ).then((module) => module.TrainingAndSeminarsModule),
    },
]
