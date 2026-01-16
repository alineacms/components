type JsxType = {
  __pw_type: 'jsx'
  type: unknown
  props: Record<string, unknown>
  key?: string | number | null
}

export const Fragment = {__pw_jsx_fragment: true} as const

const createJsx = (
  type: unknown,
  props: Record<string, unknown> | null,
  key?: string | number
): JsxType => ({
  __pw_type: 'jsx',
  type,
  props: props ?? {},
  key
})

export const jsx = (
  type: unknown,
  props: Record<string, unknown> | null,
  key?: string
) => createJsx(type, props, key)

export const jsxs = (
  type: unknown,
  props: Record<string, unknown> | null,
  key?: string
) => createJsx(type, props, key)

export const jsxDEV = (
  type: unknown,
  props: Record<string, unknown> | null,
  key?: string
) => createJsx(type, props, key)
