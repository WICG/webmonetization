import publisherIcon from '@assets/publishers-icon.png?inline'
import supporterIcon from '@assets/supporters-icon.png?inline'
import devIcon from '@assets/developer-icon.png?inline'

export const TOOL_LABEL_KEYS = ['nav.pub-tools', 'nav.supp-tools', 'nav.dev-tools'] as const;
export type ToolLabelKey = typeof TOOL_LABEL_KEYS[number];

interface ToolsSubmenuItem {
    image: {
        src: string,
        width: number,
        height: number
    },
    translationKey: ToolLabelKey,
    path: string,
    event: string
}

export type ToolsSubmenu = Array<ToolsSubmenuItem>

export const toolsSubmenu: ToolsSubmenu = [
    {
        image: {
            src: publisherIcon,
            width: 460,
            height: 461
        },
        translationKey: 'nav.pub-tools',
        path: '/publishers',
        event: 'Nav link - Publishers'
    },
    {
        image: {
            src: supporterIcon,
            width: 460,
            height: 461
        },
        translationKey: 'nav.supp-tools',
        path: '/supporters',
        event: 'Nav link - Supporters'
    },
    {
        image: {
            src: devIcon,
            width: 460,
            height: 464
        },
        translationKey: 'nav.dev-tools',
        path: '/developers',
        event: 'Nav link - Developers'
    }
]
