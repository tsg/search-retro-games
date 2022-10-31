// Generated by Xata Codegen 0.18.0. Please do not edit.
import {
  BaseClientOptions,
  buildClient,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "games",
    columns: [
      { name: "name", type: "string" },
      { name: "alternativeNames", type: "multiple" },
      { name: "console", type: "string" },
      { name: "slug", type: "string" },
      { name: "firstReleaseDate", type: "string" },
      { name: "storyline", type: "text" },
      { name: "summary", type: "text" },
      { name: "totalRatingCount", type: "int" },
      { name: "totalRating", type: "float" },
      { name: "url", type: "string" },
      { name: "igdbId", type: "int" },
      { name: "cover", type: "string" },
      { name: "screenshots", type: "multiple" },
      { name: "franchise", type: "string" },
      { name: "genres", type: "multiple" },
      { name: "videos", type: "multiple" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Games = InferredTypes["games"];
export type GamesRecord = Games & XataRecord;

export type DatabaseSchema = {
  games: GamesRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Anjana-Sofia-Vakil-s-workspace-tq6lr1.eu-west-1.xata.sh/db/retrogames",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
