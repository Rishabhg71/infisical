// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { TImmutableDBKeys } from "./models";

export const OidcConfigsSchema = z.object({
  id: z.string().uuid(),
  issuer: z.string().nullable().optional(),
  authorizationEndpoint: z.string().nullable().optional(),
  jwksUri: z.string().nullable().optional(),
  tokenEndpoint: z.string().nullable().optional(),
  userinfoEndpoint: z.string().nullable().optional(),
  encryptedClientId: z.string().nullable().optional(),
  clientIdIV: z.string().nullable().optional(),
  clientIdTag: z.string().nullable().optional(),
  encryptedClientSecret: z.string().nullable().optional(),
  clientSecretIV: z.string().nullable().optional(),
  clientSecretTag: z.string().nullable().optional(),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  orgId: z.string().uuid()
});

export type TOidcConfigs = z.infer<typeof OidcConfigsSchema>;
export type TOidcConfigsInsert = Omit<z.input<typeof OidcConfigsSchema>, TImmutableDBKeys>;
export type TOidcConfigsUpdate = Partial<Omit<z.input<typeof OidcConfigsSchema>, TImmutableDBKeys>>;
