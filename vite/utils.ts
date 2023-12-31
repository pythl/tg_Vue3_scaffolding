import _ from 'lodash'

//环境变量类型处理
export function parseEnv(env: Record<string, any>): ViteEnv {
  const envs: any = _.cloneDeep(env)
  Object.entries(env).forEach(([key, value]) => {
    if (value == 'true' || value == 'false') {
      envs[key] = value == 'true' ? true : false
    } else if (/^\d+$/.test(value)) envs[key] = Number(value)
    else if (value == 'null') envs[key] = null
    else if (value == 'undefined') envs[key] = undefined
    else envs[key] = value
  })
  return envs
}
