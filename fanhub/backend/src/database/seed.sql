-- FanHub Seed Data
-- Breaking Bad data with intentional bug for testing

-- Insert Breaking Bad
INSERT INTO shows (title, description, genre, start_year, end_year, network) 
VALUES (
    'Breaking Bad',
    'A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student to secure his family''s future.',
    'Crime Drama',
    2008,
    2013,
    'AMC'
);

-- Insert seasons
INSERT INTO seasons (show_id, season_number, title, episode_count) VALUES
(1, 1, 'Season 1', 7),
(1, 2, 'Season 2', 13),
(1, 3, 'Season 3', 13),
(1, 4, 'Season 4', 13),
(1, 5, 'Season 5', 16);

-- Insert episodes (just a few from season 1 for testing)
INSERT INTO episodes (show_id, season_id, episode_number, title, description, runtime_minutes, air_date) VALUES
(1, 1, 1, 'Pilot', 'Walter White, a chemistry teacher, is diagnosed with inoperable lung cancer and turns to a life of crime.', 58, '2008-01-20'),
(1, 1, 2, 'Cat''s in the Bag...', 'Walt and Jesse attempt to tie up loose ends. The desperate situation gets more complicated with the flip of a coin.', 48, '2008-01-27'),
(1, 1, 3, 'And the Bag''s in the River', 'Walt and Jesse clean up after the bathtub incident before Walt decides what to do with their prisoner.', 48, '2008-02-10'),
(1, 1, 4, 'Cancer Man', 'Walt tells the rest of his family about his cancer diagnosis. Jesse tries to make amends with his parents.', 48, '2008-02-17'),
(1, 1, 5, 'Gray Matter', 'Walt rejects an offer of financial assistance from Elliott and Gretchen. Jesse reconciles with his parents.', 48, '2008-02-24');

-- Insert characters
-- BUG: Notice there are TWO "Jesse Pinkman" entries with slightly different data!
-- This is the intentional bug Elena will discover and write a test for
INSERT INTO characters (show_id, name, actor_name, bio, is_main_character, status) VALUES
(1, 'Walter White', 'Bryan Cranston', 'A mild-mannered high school chemistry teacher who transforms into a ruthless methamphetamine manufacturer known as "Heisenberg".', true, 'deceased'),
(1, 'Jesse Pinkman', 'Aaron Paul', 'Walt''s former student and business partner. A small-time methamphetamine manufacturer and dealer.', true, 'alive'),
(1, 'Skyler White', 'Anna Gunn', 'Walter''s wife, a bookkeeper who becomes increasingly suspicious of Walt''s activities.', true, 'alive'),
(1, 'Hank Schrader', 'Dean Norris', 'Walter''s brother-in-law, a DEA agent pursuing the elusive drug lord Heisenberg.', true, 'deceased'),
(1, 'Jesse Pinkman', 'Aaron Paul', 'Walt''s former student and partner in the methamphetamine business.', true, 'alive'),  -- DUPLICATE BUG!
(1, 'Saul Goodman', 'Bob Odenkirk', 'A criminal lawyer who becomes Walt and Jesse''s legal counsel and adviser.', false, 'alive');

-- Link characters to episodes
INSERT INTO character_episodes (character_id, episode_id, is_featured) VALUES
-- Walter appears in all episodes
(1, 1, true), (1, 2, true), (1, 3, true), (1, 4, true), (1, 5, true),
-- Jesse appears in all episodes (using first Jesse record)
(2, 1, true), (2, 2, true), (2, 3, true), (2, 4, false), (2, 5, true),
-- Skyler appears in most
(3, 1, true), (3, 2, false), (3, 3, false), (3, 4, true), (3, 5, true),
-- Hank appears in several
(4, 1, true), (4, 2, false), (4, 5, true);

-- Insert quotes (some will be ambiguous due to duplicate Jesse)
INSERT INTO quotes (show_id, character_id, episode_id, quote_text, is_famous) VALUES
(1, 1, 1, 'I am not in danger, Skyler. I am the danger!', true),
(1, 2, 1, 'Yeah, science!', true),  -- Which Jesse? First one (id 2)
(1, 1, 3, 'Say my name.', true),
(1, 5, 2, 'Yeah, Mr. White! Yeah, science!', false),  -- This uses the DUPLICATE Jesse (id 5)!
(1, 3, 4, 'Someone has to protect this family from the man who protects this family.', true),
(1, 4, 5, 'Jesus Christ, Marie, they''re minerals!', false);

-- Insert a test admin user (password: 'admin123' - DO NOT use in production!)
-- Password hash is bcrypt of 'admin123'
INSERT INTO users (email, password_hash, username, display_name, role) VALUES
('admin@fanhub.test', '$2b$10$rQZ5QZQZ5QZQZ5QZQZ5QZOeH5H5H5H5H5H5H5H5H5H5H5H5H5H5H5', 'admin', 'Admin User', 'admin');
