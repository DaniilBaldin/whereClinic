import { InferModel, pgTable, varchar, integer } from 'drizzle-orm-pg';

export const cities = pgTable('cities', {
    id: integer('id').primaryKey().notNull(),
    citySlug: varchar('city_slug', { length: 50 }).notNull(),
    cityName: varchar('city_name', { length: 50 }).notNull(),
    state: varchar('state', { length: 50 }).notNull(),
    metaTitle: varchar('meta_title', { length: 1000 }).notNull(),
    metaDescription: varchar('meta_description', { length: 1000 }).notNull(),
    h1: varchar('h1', { length: 1000 }).notNull(),
    h2: varchar('h2', { length: 1000 }).notNull(),
    subHeadingText: varchar('sub_heading_text', { length: 1000 }).notNull(),
    tick1: varchar('tick_1', { length: 100 }).notNull(),
    tick2: varchar('tick_2', { length: 100 }).notNull(),
    tick3: varchar('tick_3', { length: 100 }).notNull(),
    aboutBookphysio: varchar('about_bookphysio', { length: 10000 }).notNull(),
});

export type Cities = InferModel<typeof cities>;
