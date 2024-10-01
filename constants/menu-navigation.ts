import UserSvg from '@/public/svg/user.svg?skipsvgo'
import SettingsSvg from '@/public/svg/settings.svg?skipsvgo'
import MessageSvg from '@/public/svg/message.svg?skipsvgo'

export const MENU_NAVIGATION = [
    {
        title: 'Profile',
        iconName: 'user',
        iconComponent: UserSvg,
        link: '/profile',
    },
    {
        title: 'Settings',
        iconName: 'settings',
        iconComponent: SettingsSvg,
        link: '/settings',
    },
    {
        title: 'Messages',
        iconName: 'message',
        iconComponent: MessageSvg,
        link: '/messages',
    }
]
