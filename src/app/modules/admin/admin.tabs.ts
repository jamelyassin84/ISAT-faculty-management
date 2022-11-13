import {FuseNavigationItem} from '@fuse/components/navigation'

export const adminTabs: FuseNavigationItem[] = [
    {
        id: 'Faculties',
        title: 'Faculties',
        type: 'basic',
        icon: 'supervised_user_circle',
        link: '/dashboard',
    },
    {
        id: 'Profile',
        title: 'Profile',
        type: 'basic',
        icon: 'account_circle',
        link: '/students',
    },
    {
        id: 'Publication',
        title: 'Publications',
        type: 'basic',
        icon: 'mat_outline:drive_file_rename_outline',
        link: '/survey',
    },
    {
        id: 'Research',
        title: 'Research',
        type: 'basic',
        icon: 'heroicons_solid:newspaper',
        link: '/guidance-request',
    },
    {
        id: '5',
        title: 'Training & Seminars',
        type: 'basic',
        icon: 'airplanemode_active',
        link: '/implicit-ratings',
    },
]
