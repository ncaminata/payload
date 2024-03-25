import { defineConfig } from '@playwright/test'

export const EXPECT_TIMEOUT = 45000
export const POLL_TOPASS_TIMEOUT = EXPECT_TIMEOUT * 4 // That way expect.poll() or expect().toPass can retry 4 times

export default defineConfig({
  // Look for test files in the "test" directory, relative to this configuration file
  testDir: '',
  testMatch: '*e2e.spec.ts',
  timeout: 240000, // 4 minutes
  use: {
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
  },
  expect: {
    timeout: EXPECT_TIMEOUT,
  },
  workers: 16,
})