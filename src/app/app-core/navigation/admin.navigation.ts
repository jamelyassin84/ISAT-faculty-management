import {FuseNavigationItem} from '@fuse/components/navigation'

export const adminTabs: FuseNavigationItem[] = [
    {
        id: '1',
        title: 'Dashboard',
        type: 'basic',
        icon: 'dashboard',
        link: '/dashboard',
    },

    {
        id: '2',
        title: 'Faculties',
        type: 'basic',
        icon: 'supervised_user_circle',
        link: '/faculties',
    },
    {
        id: '3',
        title: 'Profile',
        type: 'basic',
        icon: 'account_circle',
        link: '/profile',
    },

    {
        id: '4',
        title: 'Publications',
        type: 'basic',
        icon: 'mat_outline:drive_file_rename_outline',
        link: '/publications',
    },

    {
        id: '5',
        title: 'Research',
        type: 'basic',
        icon: 'heroicons_solid:newspaper',
        link: '/research',
    },

    {
        id: '6',
        title: 'Training & Seminars',
        type: 'basic',
        icon: 'airplanemode_active',
        link: '/training-and-seminar',
    },

    {
        id: '7',
        title: 'Subjects',
        type: 'basic',
        icon: 'library_books',
        link: '/subjects',
    },
]
