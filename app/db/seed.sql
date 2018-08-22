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
),
(
    'The Dark Verse',
    'M. Amanuesis Sharkchild',
    'Horror',
    114,
    'Short stories of occult, metaphysical, and fantastical horror that will follow you to the visions of your sleep.',
    'https://is2-ssl.mzstatic.com/image/thumb/Music3/v4/47/be/b0/47beb0dd-b1b9-e392-41a9-9e0dac3e3216/source/600x600bb.jpg',
    'https://thedarkverse.sharkchild.com'
),
(
    'The Joe Rogan Experience',
    'Talking Monkey Productions',
    'Comedy',
    1157,
    'The podcast of Comedian Joe Rogan..',
    'https://is4-ssl.mzstatic.com/image/thumb/Music127/v4/d0/e6/5f/d0e65f81-c2cf-7f59-38e4-6abcfab7e38a/source/600x600bb.jpg',
    'https://www.joerogan.com'
),
(
    'WTF with Marc Maron',
    'Marc Maron',
    'Comedy',
    943,
    'Comedian Marc Maron is tackling the most complex philosophical question of our day - WTF? Hell get to the bottom of it with help from comedian friends, celebrity guests and the voices in his own head.',
    'https://is4-ssl.mzstatic.com/image/thumb/Music71/v4/2b/fd/92/2bfd9226-b330-491a-86cc-02624d253901/source/600x600bb.jpg',
    'http://www.wtfpod.com'
),
(
    'Pod Save America',
    'Crooked Media',
    'Political',
    184,
    'Four former aides to President Obama — Jon Favreau, Dan Pfeiffer, Jon Lovett, and Tommy Vietor are joined by journalists, politicians, comedians, and activists for a freewheeling conversation about politics, the press and the challenges posed by the Trump presidency.',
    'https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/3b/d5/8b/3bd58bfd-6605-9529-204e-8fdf56b3444c/source/600x600bb.jpg',
    'https://art19.com/shows/pod-save-america'
),
(
    'Player One Podcast',
    'Chris Johnston / Greg Sewart',
    'Gaming',
    615,
    'Join ex-game journalists Chris Johnston, Phil Theobald, Greg Sewart and their buddy Mike Phillips as they talk about console/portable/PC games, babies, and the meaning of life.',
    'https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/0e/55/26/0e55264d-699b-1652-560a-8737afc32799/source/170x170bb.jpg',
    'http://www.playeronepodcast.com/'
);

INSERT INTO reviews (username, content, podcast_id) VALUES
(
'PodcastLover',
'Lately, one of my favorites is a podcast produced by Gimlet Media called Crimetown.',
5
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
),
(
'Guitar Hero freak',
'This podcast is awsomely eery. I love it.',
6
),
(
'jimbomonty',
'This is an outstanding podcast that is very unique with a heavy dose of the bizarre. Sharkchild shows a lot of potential and I look forward to hearing much more from him.',
6
),
(
'BigredRM',
'If you dont know much take notes. I discover all kinds of cool stuff listening to Joes podcasts.',
7
),
(
'One Sirius Wizard',
'very funny stuff mate. brill job.',
8
),
(
'2016NewsJunkie',
'These guys are funny. They talk a lot. I like the cut of their jib(s).',
9
),
(
'Anomaj',
'Widely respected on both sides.',
9
),
(
'Outunderstars',
'The most enjoyable video game podcast out there! Cuts through the B.S. that alot of the other gaming podcasts have and talks games. Isnt that what we all wanted in the first place?',
10
);
