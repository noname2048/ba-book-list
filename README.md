# ba-book-list

isbn으로 관리되는 책장, 프론트엔드 시스템 만들기

## 벡엔드 URL

__GET 요청에 대하여__
Category | endpoint | URL | what
--- | --- | --- | ---
books | /books | /books | 가장 최근(request)의 책 10권
books | /books | /books?isbn13=? | DB에 해당 책의 유무
books | /books/search | /books/search | 가장 최근(출판일)의 책 10권
books | /books/search | /books/seach?isbn13=&title= | isbn 우선 검색
requests | /books/requests | /books/requests | 가장 최근(requests)의 책 10권
requests | /books/requests | /books/requests?isbn13=&title= | isbn 우선 검색
requests | /books/reqeusts/:id | /books/reqeusts/1234567890123 | 리퀘스트 정보
requests | /books/reqeusts/:id/response | /books/reqeusts/1234567890123/9sr93 | 리스폰스 정보
responses | /books/responses | /books/responses | 최근 등록된 응답 10권
responses | /books/resposnes/:id | /books/responses/9sr93 | 리스폰스 정보
responses | /books/responses/:id/request | /books/responses/9sr93/request | 리퀘스트 정보
