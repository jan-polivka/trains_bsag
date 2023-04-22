import { test } from "node:test";
import { loadConfig } from "./mailer";

test("yaml file parsing", () => {
    loadConfig("config_test")
})