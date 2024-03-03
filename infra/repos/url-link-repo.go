package repos

import (
	"database/sql"
	"kay-a-f/goto/internal/domain"
)

type UrlLinkSQLiteRepo struct {
    db *sql.DB;
}

func NewUrlLinkSQLiteRepo(db *sql.DB) *UrlLinkSQLiteRepo {
    return &UrlLinkSQLiteRepo{
        db: db,
    }
}

func (repo *UrlLinkSQLiteRepo) FindById(id int) (*domain.UrlLink, error) {
    rows, err := repo.db.Query("SELECT * FROM urlLink WHERE id=?", id)
    if err != nil {
        return nil, err
    }

    defer rows.Close()

    var alias string
    var url string

    err = rows.Scan(&alias, &url)
    if err != nil {
        return nil, err
    }

    return &domain.UrlLink{Alias:alias, Url:url}, nil
}

func (repo *UrlLinkSQLiteRepo) FindAll() ([]*domain.UrlLink, error) {
    rows, err := repo.db.Query("SELECT * FROM urlLink")
    if err != nil {
        return nil, err
    }

    defer rows.Close()
    urlLinks := make([]*domain.UrlLink, 0, 10)

    for rows.Next() {
        var alias string
        var url string

        err = rows.Scan(&alias, &url)
        if err != nil {
            return nil, err
        }

        urlLinks = append(urlLinks, &domain.UrlLink{Alias: alias, Url: url})
    }

    return urlLinks, nil
}

func (repo *UrlLinkSQLiteRepo) Create(urlLink *domain.UrlLink) error {
    _, err := repo.db.Query("INSERT INTO urlLink (alias, url) VALUES (?, ?)", urlLink.Alias, urlLink.Url)
    
    return err
}

