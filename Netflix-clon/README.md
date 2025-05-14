Disclaimer: This project is a personal educational replica of Netflix and is not affiliated with or endorsed by Netflix, Inc. The logo and branding are used under fair use for non-commercial educational purposes.


x
API_key
45a2881a1fb4eee7bc435cc383c5b5ba

API Read Access Token
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWEyODgxYTFmYjRlZWU3YmM0MzVjYzM4M2M1YjViYSIsIm5iZiI6MTc0Njg5ODIxMS41NTQsInN1YiI6IjY4MWY4ZDIzNmFiYzZjNDZmMGM4NGJlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FYKeusw7ezzIkarfVuh_s3DW0n1lMeuYYWQYbBamIv0

TMDP

API KEY NEW ONE 56ffb9963be52684df6b4a2adead8991

  const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWEyODgxYTFmYjRlZWU3YmM0MzVjYzM4M2M1YjViYSIsIm5iZiI6MTc0Njg5ODIxMS41NTQsInN1YiI6IjY4MWY4ZDIzNmFiYzZjNDZmMGM4NGJlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FYKeusw7ezzIkarfVuh_s3DW0n1lMeuYYWQYbBamIv0'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));
  new 8:52pm VITE_TMDB_API_=58f07e32f2786531ffade89f34890cf3
  VITE_TMDB_API_KEY=56ffb9963be52684df6b4a2adead8991 bereket


  VITE_TMDB_API_KEY=58f07e32f2786531ffade89f34890cf3 new