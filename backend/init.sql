DROP TABLE IF EXISTS articles_categories;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS articles;

CREATE TABLE articles (
    id SERIAL PRIMARY KEY,
    article_name TEXT NOT NULL,
    article_text TEXT NOT NULL,
    article_author TEXT NOT NULL
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    categorie_name TEXT NOT NULL
);

CREATE TABLE articles_categories (
    id SERIAL PRIMARY KEY,
    article_id INTEGER NOT NULL REFERENCES articles,
    categories_id INTEGER NOT NULL  REFERENCES categories
);

CREATE OR REPLACE FUNCTION insert_articles(
 articleText TEXT,
 articleAuthor TEXT,
 articleName TEXT,
 categorieName TEXT
)
RETURNS TABLE(article_id INTEGER, article_author TEXT, article_text TEXT, article_name TEXT ) AS $$
DECLARE
  article_id INTEGER;
  categorie_id INTEGER;
BEGIN
 INSERT INTO articles ( article_text, article_author, article_name) VALUES ( articleText,  articleAuthor, articleName )
 RETURNING id INTO article_id;
 INSERT INTO categories ( categorie_name) VALUES (categorieName )
 RETURNING id INTO categorie_id;
 INSERT INTO articles_categories ( article_id , categories_id) VALUES (article_id, categorie_id );
 RETURN  query SELECT * FROM articles WHERE id =article_id ;
END;
$$ LANGUAGE plpgsql;

SELECT * FROM insert_articles('testnamn för insert 434','testtext insertbrarba' ,' artikelnamn', 'test kategoribbarr');
