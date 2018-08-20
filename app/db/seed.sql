DELETE FROM podcasts;
DELETE FROM reviews;


INSERT INTO podcasts (title, creator, genre, episodes, description, poster_url, trailer_url) VALUES
(
    'The NoSleep Podcast',
    'Creative Reason Media Inc',
    'Horror',
    243,
    'In the spring of 2010, a new forum appeared on Reddit.com. It was called “Nosleep” and the concept of this forum  was to be a place for people to post original scary stories about frightening experiences. It was an online version of telling spooky stories around the campfire.A year later, as Nosleep was growing at a rapid pace, one member named Matt Hansen proposed the idea of doing a podcast where some of the top stories from Nosleep would be narrated in audiobook style.',
    'https://www.thenosleeppodcast.com/wp-content/uploads/2014/09/NoSleep.Podcast.S4.Logo_1400.jpg',
    'https://www.thenosleeppodcast.com/'
),
(   'You made it weird',
    'Pete Holmes',
    'Comedy',
    413,
    'The show originated under the premise that Holmes would ask his guest, usually a fellow comedian, about three "weird" things he knew about them, but the show has since evolved into a much more loose conversation about such complex topics as comedy, religion, and sexuality.',
    'https://is1-ssl.mzstatic.com/image/thumb/Music71/v4/53/f9/8d/53f98d9e-dc6a-1c7c-a1de-a3ac57a4e435/source/1200x630bb.jpg',
    'https://youmadeitweird.libsyn.com/'
),
(   'Hellbent',
    'Devon Handy',
    'Political',
    137,
    'Hellbent Podcast is a political news and commentary podcast by childhood friends Devon Handy and Sarah Lerner.',
    'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/e0/55/77/e0557786-dac5-3ef5-7f58-32a5044759f9/source/1200x630bb.jpg',
    'https://www.hellbentpodcast.com/'
),
(
    'WhatsGoodGames',
    'Whats Good Games',
    'Gaming',
    66,
    'Welcome to Whats Good Games, an upbeat show for the nerd-inclined and your source for video game news, analysis, commentary and funny stuff. ',
    'http://cdn-profiles.tunein.com/p1012004/images/bannerx.jpg?t=636354620670000000',
    'https://whatsgoodgames.com/'
),
(
    'Crimetown',
    'Gimlet Media',
    'True Crime',
    22,
    'Most true crime series focus on a single murder. Crimetown — a podcast from the makers of HBO’s The Jinx — widens its lens to look at the culture of crime and corruption that can consume an entire city and its government.',
    'https://res-1.cloudinary.com/gimlet-media/image/upload/dpr_auto,f_auto,q_auto/anith53wk79ixievdz3d',
    'http://www.crimetownshow.com/'
);

INSERT INTO reviews (username, content, podcast_id) VALUES
(
'PodcastLover',
'Lately, one of my favorites is a podcast produced by Gimlet Media called Crimetown.',
1
),
(
'Scary4Life',
'Love this podcast! Thank you so much! I can listens to this over and over again and I wont be tired and still get chills!!',
1
),
(
'Always a gamer',
'Just started listening at E3, thoroughly enjoying it. Great attitudes, no elitist nonsense. Theme music makes me feel all warm & fuzzy',
4
),
(
'Politician3',
'I love this podcast because it talks about politics and current events from a feminist perspective. This perspective is so key in an era where womens voices are still being silenced.',
3
),
(
'I Love Jokes',
'Too funny. I loved every episode',
2
);
