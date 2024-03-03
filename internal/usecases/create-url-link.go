package usecases

import (
	"kay-a-f/goto/internal/domain"
)

type CreateUrlLinkDto struct {
    Url string;
    Alias string;
};

type CreateUrlLinkResponse struct {
    UrlLink domain.UrlLink;
}

type CreateUrlLinkUseCase interface {
    Execute(dto CreateUrlLinkDto) (*CreateUrlLinkResponse, error)
}

func NewCreateUrlLinkUseCase(urlLinkRepository domain.UrlLinkRepository) CreateUrlLinkUseCase {
    return &createUrlLinkUseCase {
        urlLinkRepository: urlLinkRepository,
    }
}

type createUrlLinkUseCase struct {
    urlLinkRepository domain.UrlLinkRepository
}

func (uc *createUrlLinkUseCase) Execute(dto CreateUrlLinkDto) (*CreateUrlLinkResponse, error) {
    urlLink := domain.UrlLink{Url:dto.Url, Alias:dto.Alias}

    err := uc.urlLinkRepository.Create(&urlLink)
    if err != nil {
        return nil, err
    }

    return &CreateUrlLinkResponse{
        UrlLink: urlLink,
    }, nil
}

