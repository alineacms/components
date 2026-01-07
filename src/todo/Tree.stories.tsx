import {Tree, TreeItem} from './Tree.tsx'

const FolderIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path
      d="M2.5 4.5h4l1.2 1.4H13a1 1 0 0 1 1 1v5.6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1.2"
    />
  </svg>
)

const FileIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path
      d="M4 2.5h5.2L12 5.3V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1z"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1.2"
    />
    <path d="M9 2.5V5.5H12" fill="none" stroke="currentColor" />
  </svg>
)

const LockIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <rect
      x="3.5"
      y="7"
      width="9"
      height="6"
      rx="1.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path d="M5.5 7V5.3a2.5 2.5 0 0 1 5 0V7" fill="none" stroke="currentColor" />
  </svg>
)

const BoltIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path
      d="M9.6 2.5 4.8 8.4H8L6.5 13.5 11.5 7.4H8.4z"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1.2"
    />
  </svg>
)

const PencilIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path
      d="M3.5 12.5 4 10l6.7-6.7 2.5 2.5L6.5 12z"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1.2"
    />
    <path d="M9.8 4.8 11.2 3.4 12.6 4.8 11.2 6.2z" fill="none" />
  </svg>
)

const TreeItemRow = ({
  icon,
  label,
  labelClassName,
  meta
}: {
  icon: React.ReactNode
  label: string
  labelClassName?: string
  meta?: React.ReactNode
}) => (
  <span className="alinea-rac-TreeItemRow">
    <span className="alinea-rac-TreeItemIcon">{icon}</span>
    <span
      className={
        labelClassName
          ? `alinea-rac-TreeItemLabel ${labelClassName}`
          : 'alinea-rac-TreeItemLabel'
      }
    >
      {label}
    </span>
    {meta ? <span className="alinea-rac-TreeItemMeta">{meta}</span> : null}
  </span>
)

const Badge = ({
  variant,
  children
}: {
  variant?: 'warning' | 'accent'
  children: React.ReactNode
}) => (
  <span
    className={
      variant
        ? `alinea-rac-TreeItemBadge alinea-rac-TreeItemBadge--${variant}`
        : 'alinea-rac-TreeItemBadge'
    }
  >
    {children}
  </span>
)

const Status = ({children}: {children: React.ReactNode}) => (
  <span className="alinea-rac-TreeItemStatus">{children}</span>
)

export const Example = () => (
  <Tree
    aria-label="Examples"
    selectionMode="single"
    selectionBehavior="replace"
    defaultSelectedKeys={['list-fields']}
    defaultExpandedKeys={['examples', 'status', 'sub-folder']}
  >
    <TreeItem
      key="examples"
      title="Examples"
      content={<TreeItemRow icon={<FolderIcon />} label="Examples" />}
    >
      <TreeItem
        key="extra-root-tab"
        title="Extra root tab"
        content={<TreeItemRow icon={<FileIcon />} label="Extra root tab" />}
      />
      <TreeItem
        key="rich-text-fields"
        title="Rich text fields"
        content={<TreeItemRow icon={<FileIcon />} label="Rich text fields" />}
      />
      <TreeItem
        key="custom-view"
        title="Custom view"
        content={
          <TreeItemRow
            icon={<FileIcon />}
            label="Custom view"
            meta={<Status>Published</Status>}
          />
        }
      />
      <TreeItem
        key="conditional-fields"
        title="Conditional fields"
        content={<TreeItemRow icon={<FileIcon />} label="Conditional fields" />}
      />
      <TreeItem
        key="custom-fields"
        title="Custom fields"
        content={<TreeItemRow icon={<FileIcon />} label="Custom fields" />}
      />
      <TreeItem
        key="custom-page"
        title="Custom page"
        content={
          <TreeItemRow
            icon={<FileIcon />}
            label="Custom page"
            meta={<Status>Draft</Status>}
          />
        }
      />
      <TreeItem
        key="i18n-fields"
        title="I18n fields"
        content={<TreeItemRow icon={<FileIcon />} label="I18n fields" />}
      />
      <TreeItem
        key="inline-fields"
        title="Inline fields"
        content={<TreeItemRow icon={<FileIcon />} label="Inline fields" />}
      />
      <TreeItem
        key="layout-fields"
        title="Layout fields"
        content={<TreeItemRow icon={<FileIcon />} label="Layout fields" />}
      />
      <TreeItem
        key="link-fields"
        title="Link fields"
        content={<TreeItemRow icon={<FileIcon />} label="Link fields" />}
      />
      <TreeItem
        key="basic-fields"
        title="Basic fields"
        content={<TreeItemRow icon={<FileIcon />} label="Basic fields" />}
      />
      <TreeItem
        key="list-fields"
        title="List fields"
        content={
          <TreeItemRow
            icon={<FileIcon />}
            label="List fields"
            meta={<Status>Published</Status>}
          />
        }
      />
      <TreeItem
        key="quiz-example"
        title="Quiz example"
        content={<TreeItemRow icon={<FileIcon />} label="Quiz example" />}
      />
      <TreeItem
        key="tabs-example"
        title="Tabs example"
        content={<TreeItemRow icon={<FileIcon />} label="Tabs example" />}
      />
    </TreeItem>
    <TreeItem
      key="folder"
      title="Folder"
      content={<TreeItemRow icon={<FolderIcon />} label="Folder" />}
    />
    <TreeItem
      key="status"
      title="Status"
      content={<TreeItemRow icon={<FolderIcon />} label="Status" />}
    >
      <TreeItem
        key="published"
        title="Published"
        content={
          <TreeItemRow
            icon={<FileIcon />}
            label="Published"
            meta={<Status>Live</Status>}
          />
        }
      />
      <TreeItem
        key="sub-folder"
        title="Sub folder"
        content={
          <TreeItemRow
            icon={<FolderIcon />}
            label="Sub folder"
            meta={
              <Badge variant="accent">
                <LockIcon />
              </Badge>
            }
          />
        }
      >
        <TreeItem
          key="inner-page"
          title="Inner page"
          content={<TreeItemRow icon={<FileIcon />} label="Inner page" />}
        />
      </TreeItem>
      <TreeItem
        key="unpublished"
        title="Unpublished"
        content={
          <TreeItemRow
            icon={<FileIcon />}
            label="Unpublished"
            labelClassName="alinea-rac-TreeItemLabel--warning"
            meta={
              <>
                <Status>Unpublished</Status>
                <Badge variant="warning">
                  <BoltIcon />
                </Badge>
              </>
            }
          />
        }
      />
      <TreeItem
        key="draft"
        title="Draft"
        content={
          <TreeItemRow
            icon={<FileIcon />}
            label="Draft"
            meta={
              <>
                <Status>Draft</Status>
                <Badge>
                  <PencilIcon />
                </Badge>
              </>
            }
          />
        }
      />
    </TreeItem>
  </Tree>
)
