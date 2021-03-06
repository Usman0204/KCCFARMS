import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  // {
  //   label: 'Home',
  //   icon: 'HomeIcon',
  //   href: '/',
  // },
  {
    label: 'SWAP',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'http://54.201.71.1:36913/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'http://54.201.71.1:36913/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: '/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: '/profile',
  //     },
  //   ],
//  },
    {
      label: 'More',
      icon: 'MoreIcon',
      items: [
        
        {
          label: 'Github',
          href: '',
        },
        {
          label: 'Docs',
          href: '',
        },
        {
          label: 'Blog',
          href: '',
        },
      ],
    
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Voting',
  //       href: 'https://voting.pancakeswap.finance',
  //     },
  //     {
  //       label: 'Github',
  //       href: 'https://github.com/pancakeswap',
  //     },
  //     {
  //       label: 'Docs',
  //       href: 'https://docs.pancakeswap.finance',
  //     },
  //     {
  //       label: 'Blog',
  //       href: 'https://pancakeswap.medium.com',
  //     },
  //   ],
  // },
]

export default config
