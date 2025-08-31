import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, it, expect } from 'vitest'

import { getPackageVersion } from '@/domain/useVersion.js'

const packageJson = JSON.parse(readFileSync(join(process.cwd(), 'package.json')))

describe('getPackageVersion', () => {
  it('returns the app version from runtime config', () => {
    expect(getPackageVersion()).toBe(packageJson.version)
  })
})
