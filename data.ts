export type PFiles = {
  id: number
  name: string
  status: string
}

export const PFiles: PFiles[] = [
  {
    id: 1,
    name: 'Ali El Abbassi',
    status: 'nigga alive',
  },
  {
    id: 2,
    name: 'Napolean Bonaparte',
    status: 'nigga dead',
  },
  {
    id: 3,
    name: 'Leonardo Davinci',
    status: 'nigga dead',
  },
  {
    id: 4,
    name: 'Messi',
    status: 'nigga alive',
  },
]

export type MainDashboardCardData = {
  imageURL: string
  title: string
  appName: string
}

export const NotificationData = [
  {
    id: 0,
    title: 'Madison Beer',
    content: 'Madison Beer has followed you on twitter',
  },
  {
    id: 1,
    title: 'Madison Beer',
    content: 'Madison Beer has followed you on instagram',
  },
  {
    id: 2,
    title: 'Madison',
    content: 'Madison Beer has subscribed to your Youtube channel',
  },
  {
    id: 3,
    title: 'Madison Beer',
    content: `Madison Beer has sucked your dick and now you're in heaven`,
  },
]

export const MainDashboardCardData: MainDashboardCardData[] = [
  {
    imageURL: '/folder-solid.svg',
    title: 'PFiles',
    appName: 'pfiles',
  },
  {
    imageURL: '/baby-solid.svg',
    title: 'HR',
    appName: 'hr',
  },
  {
    imageURL: '/brain-solid.svg',
    title: 'Knowledge',
    appName: 'knowledge',
  },
]
