# Short demo to show Typescript + React + Emotion in use


## Goal of project
Show a demo to show how typescript, react and emotion work together

## Thoughts and decisions
Little bit unclear about the rules, so I used React-Table for faster table development with integrated sorting.

I did not spend much time on styling in this project, but used styled components with Emotion.

I chosed to not use OMDbAPI for listing movies since it only gives five fields when using free text search: [Title, Year, imdbID, Type, Poster] and no ratings.
So I downloaded a dataset with movies from a couple of imdb lists which contains more info such as rating.

However the info that appears when you click on a row is fetched from OMDbAPI since it gives a lot of info when looking for one special movie.