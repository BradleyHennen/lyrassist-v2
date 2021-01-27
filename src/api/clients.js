import {
  SERVICES_URL
} from "./routes";
import { createClient } from "./createClient";

export const baseApiClient = createClient(SERVICES_URL);
