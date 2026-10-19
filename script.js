// http://www.omdbapi.com/?i=tt3896198&apikey=ca11b34c
const movieForm = document.querySelector("#movieForm");
const movieInput = document.querySelector("#movieInput");
const movieHub = document.querySelector("#movieHub");
const hamburger = document.querySelector("#hamburger");
const options = document.querySelector("#options");

const NO_POSTER = "https://placehold.co/300x450/18181b/a1a1aa?text=No+Poster";

movieForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const query = movieInput.value.trim();

  if (!query) {
    return;
  }

  searchMovies(query);
});

async function searchMovies(movieName) {
  try {
    let response = await fetch(
      `https://www.omdbapi.com/?apikey=ca11b34c&s=${encodeURIComponent(movieName)}`,
    );
    let data = await response.json();

    if (data.Response === "True") {
      displayMovies(data.Search);
    } else {
      movieHub.innerHTML = `<p class="col-span-full text-center text-red-400 py-16 text-lg">${data.Error || "No movies found."}</p>`;
    }
    console.log(data);
  } catch (err) {
    console.log(err);
    movieHub.innerHTML = `<p class="col-span-full text-center text-red-400 py-16 text-lg">Error loading movies. Please try again.</p>`;
  }
}

function displayMovies(movies) {
  movieHub.innerHTML = "";

  movies.forEach((movie) => {
    const div = document.createElement("div");
    div.dataset.imdbID = movie.imdbID;

    div.className =
      "movie-card bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-red-500 hover:scale-105 cursor-pointer transition-all flex flex-col group";

    const poster =
      movie.Poster && movie.Poster !== "N/A" ? movie.Poster : NO_POSTER;
    console.log({ poster, mp: movie.Poster });

    div.innerHTML = `<img src="${poster}" class = "object-cover w-full h-80">
            <div class="flex flex-1 flex-col justify-between p-4">
                <h3 class="font-semibold text-white group-hover:text-red-500 transition-all text-base">${movie.Title}</h3>
                <p class="text-sm text-red-500 font-medium mt-2">${movie.Year}</p>
            </div>`;

    movieHub.append(div);
  });
}

movieHub.addEventListener("click", (e)=>{
    e.stopPropagation();
    const movieCard = e.target.closest(".movie-card");
    if(movieCard && movieCard.dataset.imdbID){
        const imdbID = movieCard.dataset.imdbID;
        location.href = `movie-details.html?id=${imdbID}`;
    }
})

let data = [
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    Title: "The Conjuring",
    Type: "movie",
    Year: "2013",
    imdbID: "tt1457767",
  },

  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTRkMDlmZWEtMzQyYy00YzgyLTgwM2QtNzgxYmIwNGVlYmJlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    Title: "The Conjuring 2",
    Type: "movie",
    Year: "2016",
    imdbID: "tt3065204",
  },

  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNThkYWE3OGItNzAyNC00N2U4LThjY2QtMGQwYjZhYTI1MzMwXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    Title: "The Conjuring: The Devil Made Me Do It",
    Type: "movie",
    Year: "2021",
    imdbID: "tt7069210",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BM2VmMzRkYzgtMzg2ZC00OTFkLTkwMTYtNTMxNjM2YzI1MjgyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    Title: "The Conjuring: Last Rites",
    Type: "movie",
    Year: "2025",
    imdbID: "tt22898462",
  },

  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDhhN2IxMTUtYmQzNy00NTc4LTliNTAtYjdlOGEzNzU1ODliXkEyXkFqcGc@._V1_QL75_UY562_CR3,0,380,562_.jpg",
    Title: "The Conjuring of a Woman at the House of Robert Houdin",
    Type: "movie",
    Year: "1896",
    imdbID: "tt0000075",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTA4ODkxMGYtOGRjYS00OTgwLTk2OGEtZmY1Y2UzMGRjNTI0XkEyXkFqcGc@._V1_QL75_UY562_CR23,0,380,562_.jpg",
    Title: "Conjuring Kannappan",
    Type: "movie",
    Year: "2023",
    imdbID: "tt29230279",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTAxYTU3YmUtNjYxZi00MjU5LTg0YzEtYTQwNjMyYzM3OTg0XkEyXkFqcGc@._V1_QL75_UY562_CR11,0,380,562_.jpg",
    Title: "The Sleepless Unrest: The Real Conjuring Home",
    Type: "movie",
    Year: "2021",
    imdbID: "tt14127738",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTBhNTI5NzMtNmY0MC00ZWJhLTgxOWEtMzkxZTg0ODQxOTQ0XkEyXkFqcGc@._V1_QL75_UY562_CR22,0,380,562_.jpg",
    Title: "Conjuring the Cult",
    Type: "movie",
    Year: "2024",
    imdbID: "tt32545223",
  },

  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNWY5MjIxYWMtYzY4YS00N2JmLWJkMzMtYWNhOTA1Y2ExMmMxXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    Title: "Conjuring Tapes",
    Type: "movie",
    Year: "2025",
    imdbID: "tt29954526",
  },

  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNWMyZWVhMjEtMDYxNS00OWRiLWJmODMtOGYzMGM5NzkwYzQ0XkEyXkFqcGc@._V1_SX300.jpg",
    Title: "American Conjuring",
    Type: "movie",
    Year: "2016",
    imdbID: "tt2425866",
  },
];

displayMovies(data);

if(hamburger && options){
    hamburger.addEventListener("click", (e)=>{
        e.stopPropagation();
        options.classList.toggle("hidden");
        options.classList.toggle("flex");
    })
}