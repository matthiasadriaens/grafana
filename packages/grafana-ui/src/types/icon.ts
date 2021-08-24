import { ComponentSize } from './size';
export type IconType = 'mono' | 'default';
export type IconSize = ComponentSize | 'xl' | 'xxl' | 'xxxl';

export const getAvailableIcons = () =>
  [
    'angle-double-down',
    'angle-double-right',
    'angle-down',
    'angle-left',
    'angle-right',
    'angle-up',
    'apps',
    'arrow',
    'arrow-down',
    'arrow-from-right',
    'arrow-left',
    'arrow-random',
    'arrow-right',
    'arrow-up',
    'arrows-h',
    'backward',
    'bars',
    'bell',
    'bell-slash',
    'bolt',
    'book',
    'book-open',
    'brackets-curly',
    'building',
    'bug',
    'calculator-alt',
    'calendar-alt',
    'camera',
    'channel-add',
    'chart-line',
    'check',
    'check-circle',
    'circle',
    'clipboard-alt',
    'clock-nine',
    'cloud',
    'cloud-download',
    'cloud-upload',
    'code-branch',
    'cog',
    'columns',
    'comment-alt',
    'comment-alt-share',
    'comments-alt',
    'compass',
    'copy',
    'credit-card',
    'cube',
    'dashboard',
    'database',
    'document-info',
    'download-alt',
    'draggabledots',
    'edit',
    'ellipsis-v',
    'envelope',
    'exchange-alt',
    'exclamation-triangle',
    'external-link-alt',
    'eye',
    'eye-slash',
    'fa fa-spinner',
    'favorite',
    'file-alt',
    'file-blank',
    'file-copy-alt',
    'filter',
    'folder',
    'fire',
    'folder-open',
    'folder-plus',
    'folder-upload',
    'forward',
    'gf-bar-alignment-after',
    'gf-bar-alignment-before',
    'gf-bar-alignment-center',
    'gf-grid',
    'gf-interpolation-linear',
    'gf-interpolation-smooth',
    'gf-interpolation-step-after',
    'gf-interpolation-step-before',
    'gf-landscape',
    'gf-layout-simple',
    'gf-logs',
    'gf-portrait',
    'grafana',
    'graph-bar',
    'heart',
    'heart-break',
    'history',
    'home-alt',
    'hourglass',
    'import',
    'info',
    'info-circle',
    'key-skeleton-alt',
    'keyboard',
    'layer-group',
    'library-panel',
    'line-alt',
    'link',
    'list-ui-alt',
    'list-ul',
    'lock',
    'message',
    'minus',
    'minus-circle',
    'mobile-android',
    'monitor',
    'palette',
    'panel-add',
    'pause',
    'pen',
    'percentage',
    'play',
    'plug',
    'plus',
    'plus-circle',
    'plus-square',
    'power',
    'presentation-play',
    'process',
    'question-circle',
    'repeat',
    'rocket',
    'save',
    'search',
    'search-minus',
    'search-plus',
    'share-alt',
    'shield',
    'shield-exclamation',
    'signal',
    'signin',
    'signout',
    'sitemap',
    'slack',
    'sliders-v-alt',
    'sort-amount-down',
    'sort-amount-up',
    'square-shape',
    'star',
    'step-backward',
    'sync',
    'table',
    'tag-alt',
    'times',
    'trash-alt',
    'unlock',
    'upload',
    'user',
    'users-alt',
    'wrap-text',
    'x',
  ] as const;

type BrandIconNames = 'google' | 'microsoft' | 'github' | 'gitlab' | 'okta';

export type IconName = ReturnType<typeof getAvailableIcons>[number] | BrandIconNames;
