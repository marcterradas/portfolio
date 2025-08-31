import { useRuntimeConfig } from '#imports'

/**
 * Returns the current application version from the runtime configuration.
 * @returns {string} The application version.
 */
export function getPackageVersion() {
  const config = useRuntimeConfig()
  return config.public.appVersion
}
