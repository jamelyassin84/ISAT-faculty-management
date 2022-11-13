import {FuseNavigationItem} from '@fuse/components/navigation'

export const adminTabs: FuseNavigationItem[] = [
    {
        id: 'Faculties',
        title: 'Faculties',
        type: 'basic',
        icon: 'supervised_user_circle',
        link: '/faculties',
    },
    {
        id: 'Profile',
        title: 'Profile',
        type: 'basic',
        icon: 'account_circle',
        link: '/profile',
    },
    {
        id: 'Publication',
        title: 'Publications',
        type: 'basic',
        icon: 'mat_outline:drive_file_rename_outline',
        link: '/publications',
    },
    {
        id: 'Research',
        title: 'Research',
        type: 'basic',
        icon: 'heroicons_solid:newspaper',
        link: '/research',
    },
    {
        id: '5',
        title: 'Training & Seminars',
        type: 'basic',
        icon: 'airplanemode_active',
        link: '/training-and-seminar',
    },
]
