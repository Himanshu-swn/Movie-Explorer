The application will be available at `https://moviee-explorer.netlify.app/`.

# Movie Explorer

Movie Explorer is a web application that allows users to search for movies by title and display relevant information such as title, description, year, rating and poster image. The application integrates with an external movie database API to retrieve movie information.

## Features

- **Search Functionality**: Users can search for movies by title.
- **Movie Details**: Displays basic information like title, description, year, rating and poster image for each movie.
- **API Integration**: Utilizes the TMDB API to retrieve movie information.
- **Data Manipulation**: Extracts and formats relevant movie data from the API response for display.
- **User Interface**: A user-friendly interface with search input field, movie listings, and detailed information pages.

## Tech Stack

- **Front-end**: React + Vite, Tailwind css
- **API**: OMDb API
- **Hosting**: Deployed on Netlify `https://moviee-explorer.netlify.app/`.

## Installation and Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Himanshu-swn/Movie-Explorer.git
   cd Movie-explorer
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

<!-- 3. **Set up API Key**

   - Obtain an API key from [OMDb API](http://www.omdbapi.com/apikey.aspx)
   - Create a `.env` file in the root directory and add your API key

     ```plaintext
     REACT_APP_OMDB_API_KEY=your_api_key_here
     ``` -->

4. **Run the application**

   ```bash
   npm run dev
   ```
