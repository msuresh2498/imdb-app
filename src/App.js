import logo from './logo.svg';
import './App.css';
import Movielist from './Movielist';
import { Route, Routes, useNavigate } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import { AppBar, Button, createTheme, Paper, ThemeProvider, Toolbar } from '@mui/material';
import { useState } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


function App() {

  const [mode, setMode] = useState('dark')

  const themeCtx = createTheme({
    palette: {
      mode: mode,
    },
  });

  const navigate = useNavigate()
  // const MovieData = [
  //   {
  //     id: 1,
  //     name: "Love Today",
  //     releaseyear: "2022",
  //     summary: "Two young lovers, who are made to exchange their phones for a day and what happens due to that.",
  //     genre: ["Drama", "Romance", "Comedy"],
  //     actor: ["Pradeep Ranganathan", "SathyaRaj", "Radhika Sarathkumar", "Yogi Babu"],
  //     actor1image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSH9AGaj28ZHj0ZoCmCLS-RE6cboY_1g7nxE-rgWOsWICPJ3OCO",
  //     actor2image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSR62gNtYl2tJg5DyarcWlQgFaZMw69NmjoIsyp4TjDTpAJ4QmN",
  //     actor3image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Raadhika_at_62nd_Britannia_Filmfare_South_Awards_2014.jpg/330px-Raadhika_at_62nd_Britannia_Filmfare_South_Awards_2014.jpg",
  //     actor1skills: ["Director", "actor", "writter"],
  //     actor2skills: ["Director", "actor", "producer"],
  //     actor3skills: ["Actress", "film producer", "entrepreneur", "politician"],
  //     actor1rolls: ["Director", "hero", "writter"],
  //     actor2rolls: ["Heroine's Father", "", ""],
  //     actor3rolls: ["Hero's Mom", "", ""],
  //     director: "Pradeep Ranganathan",
  //     writter: "Pradeep Ranganathan",
  //     rating: "8.1",
  //     poster: "https://cdn.telugu.yousay.tv/wp-content/uploads/sites/2/2022/11/25140611/Fg57zUNWYAEtaU_.jpg",
  //     trailer: "https://www.youtube.com/embed/FaQe8JFGdaM",
  //     video: "https://www.youtube.com/embed/R6343uT7yt8",
  //     review: ["Nice Movie..", "I really enjoyed", "awesome"]
  //   },
  //   // {
  //   //   id: 2,
  //   //   name: "Kaithi",
  //   //   releaseyear: "2019",
  //   //   summary: "Dilli, an ex-convict, endeavours to meet his daughter for the first time after leaving prison. However, his attempts are interrupted due to a drug raid planned by Inspector Bejoy.",
  //   //   genre: ["Action", "Adventure", "Crime"],
  //   //   actor: ["Karthi", "Narain", "Arjun Das"],
  //   //   actor1image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_oMKb5cHMKa7DqaCqCBniOvwt0MBjxCCk2A&usqp=CAU",
  //   //   actor2image: "https://www.filmibeat.com/ph-big/2015/09/narain_144298872500.jpg",
  //   //   actor3image: "https://e0.pxfuel.com/wallpapers/796/699/desktop-wallpaper-arjun-das-arjun-das-arjun-das-times-of-india-entertainment-thumbnail.jpg",
  //   //   actor1skills: ["Actor", "graphic designer"],
  //   //   actor2skills: ["Actor"],
  //   //   actor3skills: ["Actor", "Dubbing Artist"],
  //   //   actor1rolls: ["hero"],
  //   //   actor2rolls: ["inspector", "", ""],
  //   //   actor3rolls: ["Villan", "", ""],
  //   //   director: "Lokesh Kanagaraj",
  //   //   writter: ["Lokesh Kanagaraj", "Pon Parthiban", "Sanjeev Tiwari"],
  //   //   rating: "8.5",
  //   //   poster: "https://m.media-amazon.com/images/M/MV5BOWRmNTJkMTMtMzMzMi00NTMzLWJhOGMtNjQ4MmVjMWFhYmQ3XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg",
  //   //   trailer: "https://www.youtube.com/embed/g79CvhHaj5I",
  //   //   video: "https://www.youtube.com/embed/BXHkiGl-M18",
  //   //   review: ["This is my first Tamil movie experience and it was exhilarating", " Unbelievably realistic", "This is one of the finest thriller which keeps you edge of the seats."]
  //   // },
  //   // {
  //   //   id: 3,
  //   //   name: "Velaiyilla Pattathari(VIP)",
  //   //   releaseyear: "2014",
  //   //   summary: "Raghuvaran, an educated yet unemployed engineer, is unwilling to accept jobs that are unrelated to his area of expertise. Soon, his mother's tragic death brings him a job as well as grave challenges.",
  //   //   genre: ["Action", "Comedy", "Drama"],
  //   //   actor: ["Dhanush", "Amala Paul", "Vivek"],
  //   //   actor1image: "https://m.media-amazon.com/images/M/MV5BMTc5YjZlZjEtYzM1MC00ZmIwLWE0MzItNDcwOGYxYTJlMWNmXkEyXkFqcGdeQXVyNDI3NjU1NzQ@._V1_.jpg",
  //   //   actor2image: "https://i.pinimg.com/originals/0f/21/93/0f2193c66232d0d995f8c65ee5ce5986.jpg",
  //   //   actor3image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Vivek_at_the_Ezhumin_Press_Meet.jpg",
  //   //   actor1skills: ["Actor", "director", "producer", "playback singer", "lyricist"],
  //   //   actor2skills: ["Actress", "Model", "Producer"],
  //   //   actor3skills: ["Actor", "comedian", "television personality", "playback singer", "social activist"],
  //   //   actor1rolls: ["Hero", "Producer"],
  //   //   actor2rolls: ["Heroine"],
  //   //   actor3rolls: ["Comedian"],
  //   //   director: "Velraj",
  //   //   writter: ["Velraj"],
  //   //   rating: "7.8",
  //   //   poster: "http://4.bp.blogspot.com/-lsI6QnEkaOs/U9KzD5ctoLI/AAAAAAAABoY/OB-8twaCEjk/s1600/velai-illa-pattathari-release-on-july-poster1.jpg",
  //   //   trailer: "https://www.youtube.com/embed/fZOwwAzI9jM",
  //   //   video: "https://www.youtube.com/embed/RCXzH27eOIA",
  //   //   review: ["Really a good Entertainer", " Wow! Excellent movie with a strong message", "How many times I watch this it still makes me emotional.."]
  //   // },
  //   // {
  //   //   id: 4,
  //   //   name: "Meesaya Murukku",
  //   //   releaseyear: "2017",
  //   //   summary: "Adhi, an aspiring musician, falls in love with Nila, a young woman in his college. Soon, he finds himself surrounded by several challenges as he tries to pursue his dreams.",
  //   //   genre: ["Musical", "Comedy", "Romance"],
  //   //   actor: ["Hiphop Adhi", "RJ Vigneshkanth", "Vivek"],
  //   //   actor1image: "https://images.cinemaexpress.com/uploads/user/imagelibrary/2020/8/17/original/adhi.jpg?w=400&dpr=2.6",
  //   //   actor2image: "https://m.media-amazon.com/images/M/MV5BZTkxNjk5MjctMjVkYi00MzhmLThhYmYtZDE3NGVhZjM0OTQxXkEyXkFqcGdeQXVyMzYxOTQ3MDg@._V1_.jpg",
  //   //   actor3image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Vivek_at_the_Ezhumin_Press_Meet.jpg",
  //   //   actor1skills: ["Actor", "Director", "Music Director", "singer", "lyricist"],
  //   //   actor2skills: ["Actor", "Youtuber", "lyricist", "Radio Jockey"],
  //   //   actor3skills: ["Actor", "comedian", "television personality", "playback singer", "social activist"],
  //   //   actor1rolls: ["Hero", "Director", "Music Director"],
  //   //   actor2rolls: ["Hero's Friend"],
  //   //   actor3rolls: ["Comedian", "", ""],
  //   //   director: "Hiphop Adhi",
  //   //   writter: ["Hiphop Adhi"],
  //   //   rating: "7.5",
  //   //   poster: "https://m.media-amazon.com/images/M/MV5BZTU1ZTIxOTgtYTc5YS00OWVmLTkwZjUtNzYxNmI3NDlmMjhhXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg",
  //   //   trailer: "https://www.youtube.com/embed/Ghizg_3uI3E",
  //   //   video: "https://www.youtube.com/embed/7mWd8fOG7qI",
  //   //   review: ["I love this movie . Great effort from the team", " Its so touching..... ", "I just love this movie. A very good piece of work."]
  //   // },
  //   // {
  //   //   id: 5,
  //   //   name: "Dasavathaaram",
  //   //   releaseyear: "2008",
  //   //   summary: "After realising the danger of a bioweapon, a scientist strives to protect it from being misused. When the vial accidentally reaches India, he races against time to prevent a potential disaster.",
  //   //   genre: ["Action", "Adventure", "Sci-Fi"],
  //   //   actor: ["Kamal Haasan", "Asin", "M.S.Bhaskar"],
  //   //   actor1image: "https://keralaliteraturefestival.com/uploads/Speakers/1947_Kamal%203.jpg",
  //   //   actor2image: "https://4.bp.blogspot.com/-qI1E4wLqrXw/To7yZWpa9vI/AAAAAAAAB9M/jEPsd4txeYo/s1600/ASIN++%25281%2529.jpg",
  //   //   actor3image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/MS_Bhaskar_at_Dharmadurai_Success_Meet.jpg/1200px-MS_Bhaskar_at_Dharmadurai_Success_Meet.jpg",
  //   //   actor1skills: ["Actor", "Filmmaker", "Playback singer", "Television Presenter", "Politician"],
  //   //   actor2skills: ["Actress", "Model", "Dancer"],
  //   //   actor3skills: ["Actor", "Dubbing artist"],
  //   //   actor1rolls: ["Rangarajan Ramanuja Nambi", "Govind (NRI bio-scientist)", "George Bush", "Chris ( CIA agent-turned-mercenary)", "Shingen Narahazi (martial artist)", "Balram Naidu (police officer)", "Avathar Singh (Indian pop singer)", "Krishnaveni Paatti (Andal's grandmother)", "Vincent Poovaraghan (social activist)", "Khalifullah Mukhtar (7-feet-tall Tamil Muslim)"],
  //   //   actor2rolls: ["Kodhai (Nambi's wife)", "Andal (Govind's fiancee)"],
  //   //   actor3rolls: ["Comedian", "", ""],
  //   //   director: "K.S.Ravikumar",
  //   //   writter: ["Kamal Haasan"],
  //   //   rating: "7.2",
  //   //   poster: "https://www.idlebrain.com/movie/photogallery/dasavatharam-posters/images/dashavatharam-0007.jpg",
  //   //   trailer: "https://www.youtube.com/embed/MAnKUX9w494",
  //   //   video: "https://www.youtube.com/embed/PH0ZuigwnzY",
  //   //   review: ["Movie was based on some psychological theories like 'butterfly effect' and 'chaos theory'", "Kamal acted in 10 characters.", "Movie is phenomenal...."]
  //   // },
  //   // {
  //   //   id: 6,
  //   //   name: "Sardar",
  //   //   releaseyear: "2022",
  //   //   summary: "A disgraced spy returns from a long exile to stop the launch of a suspicious water company which plans to spread toxic water across the country.",
  //   //   genre: ["Action", "Drama", "Thriller"],
  //   //   actor: ["Karthi", "Raashi Khanna", "Laila"],
  //   //   actor1image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_oMKb5cHMKa7DqaCqCBniOvwt0MBjxCCk2A&usqp=CAU",
  //   //   actor2image: "https://www.indiaherald.com/Assets/ArticleUpload/202248135328823_FNU7crfaUAUThVU.jpg",
  //   //   actor3image: "https://www.filmibeat.com/ph-big/2022/10/laila-tamil-actress_166625166740.jpg",
  //   //   actor1skills: ["Actor", "graphic designer"],
  //   //   actor2skills: ["Actress"],
  //   //   actor3skills: ["Actress"],
  //   //   actor1rolls: ["Sardar (RAW Agent)", "Vijay Prakash (Police inspector)"],
  //   //   actor2rolls: ["Heroine"],
  //   //   actor3rolls: ["Sameera Thomas (social activist)"],
  //   //   director: "P.S.Mithran",
  //   //   writter: ["P.S.Mithran"],
  //   //   rating: "7.6",
  //   //   poster: "https://m.media-amazon.com/images/M/MV5BYjRhYTQ3MjgtMmQ2NS00MGNlLWE2MTEtMjYwMzBmOGQ5MGNhXkEyXkFqcGdeQXVyMTUwMDg3OTQy._V1_.jpg",
  //   //   trailer: "https://www.youtube.com/embed/8OQzz_i3KFE",
  //   //   video: "https://www.youtube.com/embed/sEwdvKVSt8M",
  //   //   review: [" engaging movie", "Truly satisfied after watching this movie. Narration is good & Screenplay is extraordinary.", "SARDAR is a great Indian spy action film"]
  //   // },
  //   // {
  //   //   id: 7,
  //   //   name: "Mersal",
  //   //   releaseyear: "2017",
  //   //   summary: "Maaran, a doctor, is falsely arrested for the murder of his colleague, Dr Arjun Zachariah. He soon discovers that the real culprit is a lookalike who aims to expose corruption in the medical industry.",
  //   //   genre: ["Action", "Thriller"],
  //   //   actor: ["Vijay", "S.J.Suryah", "Nithya Menen"],
  //   //   actor1image: "https://i.pinimg.com/564x/7b/dd/13/7bdd1391497b524b9b87d032a9b81a75.jpg",
  //   //   actor2image: "https://www.themoviedb.org/t/p/w500/fRd4pnSnds4MR75x0cxlnSijwPD.jpg",
  //   //   actor3image: "https://www.themoviedb.org/t/p/w500/4sCIkZVYx4K1SqZoPOSHozQPwlc.jpg",
  //   //   actor1skills: ["Actor", "Singer"],
  //   //   actor2skills: ["Actor", "Film director", "Screen writer", "Producer", "Composer", "Singer"],
  //   //   actor3skills: ["Actress", "Producer"],
  //   //   actor1rolls: ["Vetrimaaran (village wrestler)", "Vetri(Magician)", "Maaran(Doctor)"],
  //   //   actor2rolls: ["Villen (Daniel Arokiyaraj)"],
  //   //   actor3rolls: ["Aishwarya (Vetrimaaran's wife)"],
  //   //   director: "Atlee",
  //   //   writter: ["Atlee"],
  //   //   rating: "7.5",
  //   //   poster: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51ahOFn5XoL.jpg",
  //   //   trailer: "https://www.youtube.com/embed/W5MWxO6JABA",
  //   //   video: "https://www.youtube.com/embed/xsbLtHql4g8",
  //   //   review: ["Vijay sir love u a lot superb acting by you", "I really enjoyed the movie....", "Mersal is a visually beautiful and stylish entertainer with relevantsocial message"]
  //   // },
  //   // {
  //   //   id: 8,
  //   //   name: "2.0",
  //   //   releaseyear: "2018",
  //   //   summary: "When mobiles start flying from people's hands, Dr Vaseegaran and his robot Nila are asked to help. However, due to Pakshi Rajan having a hand in this, the two have to reinstate Chitti to defeat him.",
  //   //   genre: ["Action", "Sci-Fi", "Thriller"],
  //   //   actor: ["Rajinikanth ", "Akshay Kumar", "Amy Jackson"],
  //   //   actor1image: "https://resize.indiatvnews.com/en/resize/newbucket/1080_-/2023/02/rajinikanth-1677491812.jpg",
  //   //   actor2image: "https://qph.cf2.quoracdn.net/main-qimg-7daf276216b14d90b25493703bc4b79a-lq",
  //   //   actor3image: "https://files.prokerala.com/movies/pics/800/theri-movie-press-meet-55452.jpg",
  //   //   actor1skills: ["Actor", "Producer", "Screen writter"],
  //   //   actor2skills: ["Actor", "Producer", "Television personality"],
  //   //   actor3skills: ["Actress", "Model"],
  //   //   actor1rolls: ["Dr. Vaseegaran (Robotics scientist)", "Chitti (andro-humanoid robot)", "Kutti (Chitti 2.0 (Microbot))"],
  //   //   actor2rolls: ["Pakshi Rajan (ornithologist)"],
  //   //   actor3rolls: ["Nila (feminine humanoid robot )"],
  //   //   director: "	S. Shankar",
  //   //   writter: ["	S. Shankar"],
  //   //   rating: "6.1",
  //   //   poster: "https://m.media-amazon.com/images/M/MV5BNGRlNGE5NjYtNTllNy00YWMyLTkyYjctMTIwOTZmNGIyZWU4XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg",
  //   //   trailer: "https://www.youtube.com/embed/7cx-KSsYcjg",
  //   //   video: "https://www.youtube.com/embed/E0E-ftZ9kYY",
  //   //   review: ["Visual Wonder 👾", " WOW! Like really really wow!!!", "good screen play"]
  //   // }
  // ]

  return (
    <ThemeProvider theme={themeCtx}>
      <Paper elevation={4}>
        <div className="App">
          <AppBar className='AppBar' position="static">
            <Toolbar>

              <Button color="inherit" onClick={() => navigate("/")}>
                Home
              </Button>


              <Button
                sx={{
                  marginLeft: "auto",
                }}
                startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                color="inherit" onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                {mode === "light" ? "dark" : "light"} mode
              </Button>
            </Toolbar>
          </AppBar>

          <Routes>
            <Route path='/moviedetails/:id' element={<MovieDetails />} />
            <Route path='/' element={<Movielist />} />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
