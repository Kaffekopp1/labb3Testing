DROP TABLE IF EXISTS articles;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS articles_categories;

CREATE TABLE articles (
    id SERIAL PRIMARY KEY,
    article_text TEXT NOT NULL,
    article_author TEXT NOT NULL
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    categorie_name TEXT NOT NULL
);

CREATE TABLE articles_categories (
    id SERIAL PRIMARY KEY,
    test TEXT NOT NULL,
    article_id INTEGER NOT NULL REFERENCES articles,
    categories_id INTEGER NOT NULL  REFERENCES categories
);

INSERT INTO articles (article_text, article_author)
VALUES ('hej', 'peter');
