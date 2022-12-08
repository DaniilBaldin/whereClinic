import { InferModel, pgTable, varchar, integer } from 'drizzle-orm-pg';

export const clinics = pgTable('clinics', {
    id: integer('id').primaryKey().notNull(),
    longNameVersion: varchar('long_name_version', { length: 1000 }).notNull(),
    typeformRegistrationLink: varchar('typeform_registration_link', { length: 1000 }).notNull(),
    pms: varchar('pms', { length: 100 }).notNull(),
    metaTitle: varchar('meta_title', { length: 1000 }).notNull(),
    metaDescription: varchar('meta_description', { length: 1000 }).notNull(),
    slug: varchar('slug', { length: 1000 }).notNull(),
    website: varchar('website', { length: 1000 }).notNull(),
    clinicName: varchar('clinic_name', { length: 1000 }).notNull(),
    displayOnWeb: varchar('display_on_web', { length: 1000 }).notNull(),
    linkToClinicSuburbPage: varchar('link_to_clinic_suburb_page', { length: 1000 }).notNull(),
    fullAddress: varchar('full_address', { length: 1000 }).notNull(),
    city: varchar('city', { length: 1000 }).notNull(),
    suburb: varchar('suburb', { length: 1000 }).notNull(),
    state: varchar('state', { length: 1000 }).notNull(),
    postCode: varchar('postcode', { length: 100 }).notNull(),
    email: varchar('email', { length: 1000 }).notNull(),
    phone: varchar('phone', { length: 100 }).notNull(),
    nearby1Txt: varchar('nearby1_txt', { length: 100 }).notNull(),
    nearby1Link: varchar('nearby1_link', { length: 1000 }).notNull(),
    nearby2Txt: varchar('nearby2_txt', { length: 100 }).notNull(),
    nearby2Link: varchar('nearby2_link', { length: 1000 }).notNull(),
    nearby3Txt: varchar('nearby3_txt', { length: 100 }).notNull(),
    nearby3Link: varchar('nearby3_link', { length: 1000 }).notNull(),
    nearby4Txt: varchar('nearby4_txt', { length: 100 }).notNull(),
    nearby4Link: varchar('nearby4_link', { length: 1000 }).notNull(),
    aboutClinic: varchar('about_clinic', { length: 10000 }).notNull(),
});

export type Clinics = InferModel<typeof clinics>;
