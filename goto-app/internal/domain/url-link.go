package domain

type UrlLink struct {
    Alias string
    Url string
}

type UrlLinkRepository interface {
    FindById(id int) (*UrlLink, error)
    FindAll() ([]*UrlLink, error)
    Create(urlLink *UrlLink) error
}

