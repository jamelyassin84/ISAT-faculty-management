import {FuseNavigationItem} from '@fuse/components/navigation'

export const adminTabs: FuseNavigationItem[] = [
    {
        id: '1',
        title: 'Dashboard',
        type: 'basic',
        icon: 'mat_outline:dashboard',
        link: '/dashboard',
    },

    {
        id: '2',
        title: 'Faculties',
        type: 'basic',
        icon: 'mat_outline:person_pin',
        link: '/faculties',
    },

    // {
    //     id: '2',
    //     title: 'Staffs',
    //     type: 'basic',
    //     icon: 'mat_outline:person',
    //     link: '/staffs',
    // },

    {
        id: '4',
        title: 'Publications',
        type: 'basic',
        icon: 'mat_outline:edit_note',
        link: '/publications',
    },

    {
        id: '5',
        title: 'Research',
        type: 'basic',
        icon: 'mat_outline:folder',
        link: '/research',
    },

    {
        id: '6',
        title: 'Training & Seminars',
        type: 'basic',
        icon: 'mat_outline:airplane_ticket',
        link: '/training-and-seminar',
    },

    // {
    //     id: '7',
    //     title: 'Subjects',
    //     type: 'basic',
    //     icon: 'mat_outline:book',
    //     link: '/subjects',
    // },
]
