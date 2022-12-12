import { InferModel, pgTable, varchar, integer } from 'drizzle-orm-pg';

export const suburbs = pgTable('suburbs', {
    id: integer('id').primaryKey().notNull(),
    suburbSlug: varchar('suburb_slug', { length: 100 }).notNull(),
    suburbName: varchar('suburb_name', { length: 100 }).notNull(),
    city: varchar('city', { length: 100 }).notNull(),
    state: varchar('state', { length: 100 }).notNull(),
    postCode: varchar('postcode', { length: 100 }).notNull(),
    metaTitle: varchar('meta_title', { length: 1000 }).notNull(),
    metaDescription: varchar('meta_description', { length: 1000 }).notNull(),
    h1: varchar('h1', { length: 1000 }).notNull(),
    h2: varchar('h2', { length: 1000 }).notNull(),
    aboutBookphysio: varchar('about_bookphysio', { length: 10000 }).notNull(),
    nearby1Link: varchar('nearby1_link', { length: 100 }).notNull(),
    nearby1Txt: varchar('nearby1_txt', { length: 100 }).notNull(),
    nearby1State: varchar('nearby1_state', { length: 100 }).notNull(),
    nearby1Postcode: varchar('nearby1_postcode', { length: 100 }).notNull(),
    nearby2Link: varchar('nearby2_link', { length: 100 }).notNull(),
    nearby2Txt: varchar('nearby2_txt', { length: 100 }).notNull(),
    nearby2State: varchar('nearby2_state', { length: 100 }).notNull(),
    nearby2Postcode: varchar('nearby2_postcode', { length: 100 }).notNull(),
    nearby3Link: varchar('nearby3_link', { length: 100 }).notNull(),
    nearby3Txt: varchar('nearby3_txt', { length: 100 }).notNull(),
    nearby3State: varchar('nearby3_state', { length: 100 }).notNull(),
    nearby3Postcode: varchar('nearby3_postcode', { length: 100 }).notNull(),
    nearby4Link: varchar('nearby4_link', { length: 100 }).notNull(),
    nearby4Txt: varchar('nearby4_txt', { length: 100 }).notNull(),
    nearby4State: varchar('nearby4_state', { length: 100 }).notNull(),
    nearby4Postcode: varchar('nearby4_postcode', { length: 100 }).notNull(),
});

export type Clinics = InferModel<typeof suburbs>;
