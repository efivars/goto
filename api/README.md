## API initial draft:

# POST /link-url

Link url with shortname

Params:
- url (string) - Path to make link to
- shortName (string) - Aliased name

Response:
- 200 OK - `UrlLink { url (string), shortName (string) }`
- 400 Bad Request - `{ reason (string ("Short name already taken!")) }`

# GET /url-links

Get list of linked urls

Params:
- page (number, starting from 1) - Page
- limit (number, can be 0) - Max amount of items

Response:
- 200 OK - `ListableResponse<UrlLink>`

