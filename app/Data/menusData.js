import { CircleUser, ShoppingBag, BadgePercent, MessageCircleQuestion, Settings, LogIn} from 'lucide-react';
const menus = [
    {
        id:1,
        name:'Profile',
        icon:<CircleUser className='w-4 h-[17px]' />,
    },
    {
        id:2,
        name:'ListOrdered',
        icon:<ShoppingBag className='w-4 h-[17px]' />,
    },
    {
        id:3,
        name:'stampcard',
        icon:<BadgePercent className='w-4 h-[17px]' />,
    },
    {
        id:4,
        name:'help',
        icon:<MessageCircleQuestion className='w-4 h-[17px]' />,
    },
    {
        id:5,
        name:'setting',
        icon:<Settings className='w-4 h-[17px]' />,
    },
    {
        id:6,
        name:'log out',
        icon:<LogIn className='w-4 h-[17px]' />,
    },
]
export default menus