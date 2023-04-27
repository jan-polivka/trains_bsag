import { loadConfig } from "./mailer";
import { expect, test } from '@jest/globals'

test("yaml file parsing", async () => {
    const result = await loadConfig("config_test.yaml")
    expect(result.host).toBe("smtp.fakeserver.org")
})