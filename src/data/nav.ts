import developerIcon from '@assets/dropdown-developer.png?inline'
import publisherIconInactive from '@assets/dropdown-publisher-inactive.png?inline'
import publisherIconActive from '@assets/dropdown-publisher-active.png?inline'
import supporterIconInactive from '@assets/dropdown-supporter-inactive.png?inline'
import supporterIconActive from '@assets/dropdown-supporter-active.png?inline'

export const TOOL_LABEL_KEYS = [
  'nav.pub-tools',
  'nav.supp-tools',
  'nav.dev-tools',
] as const
export type ToolLabelKey = (typeof TOOL_LABEL_KEYS)[number]

interface ToolsSubmenuItem {
  imageInactive: {
    src: string
    width: number
    height: number
  }
  imageActive: {
    src: string
  }
  translationKey: ToolLabelKey
  path: string
  event: string
}

export type ToolsSubmenu = Array<ToolsSubmenuItem>

export const toolsSubmenu: ToolsSubmenu = [
  {
    imageInactive: {
      src: publisherIconInactive,
      width: 460,
      height: 460,
    },
    imageActive: {
      src: publisherIconActive,
    },
    translationKey: 'nav.pub-tools',
    path: '/publishers',
    event: 'Nav link - Publishers',
  },
  {
    imageInactive: {
      src: supporterIconInactive,
      width: 460,
      height: 460,
    },
    imageActive: {
      src: supporterIconActive,
    },
    translationKey: 'nav.supp-tools',
    path: '/supporters',
    event: 'Nav link - Supporters',
  },
  {
    imageInactive: {
      src: developerIcon,
      width: 460,
      height: 460,
    },
    imageActive: {
      src: developerIcon,
    },
    translationKey: 'nav.dev-tools',
    path: '/developers',
    event: 'Nav link - Developers',
  },
]
