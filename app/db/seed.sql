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
    'https://thedarkverse.sharkchild.com/'
),
(
    'The Joe Rogan Experience',
    'Talking Monkey Productions',
    'Comedy',
    1157,
    'The podcast of Comedian Joe Rogan..',
    'https://is4-ssl.mzstatic.com/image/thumb/Music127/v4/d0/e6/5f/d0e65f81-c2cf-7f59-38e4-6abcfab7e38a/source/600x600bb.jpg',
    'https://www.joerogan.com/'
),
(
    'WTF with Marc Maron',
    'Marc Maron',
    'Comedy',
    943,
    'Comedian Marc Maron is tackling the most complex philosophical question of our day - WTF? Hell get to the bottom of it with help from comedian friends, celebrity guests and the voices in his own head.',
    'https://is4-ssl.mzstatic.com/image/thumb/Music71/v4/2b/fd/92/2bfd9226-b330-491a-86cc-02624d253901/source/600x600bb.jpg',
    'http://www.wtfpod.com/'
),
(
    'Pod Save America',
    'Crooked Media',
    'Political',
    184,
    'Four former aides to President Obama — Jon Favreau, Dan Pfeiffer, Jon Lovett, and Tommy Vietor are joined by journalists, politicians, comedians, and activists for a freewheeling conversation about politics, the press and the challenges posed by the Trump presidency.',
    'https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/3b/d5/8b/3bd58bfd-6605-9529-204e-8fdf56b3444c/source/600x600bb.jpg',
    'https://art19.com/shows/pod-save-america/'
),
(
    'Player One Podcast',
    'Chris Johnston / Greg Sewart',
    'Gaming',
    615,
    'Join ex-game journalists Chris Johnston, Phil Theobald, Greg Sewart and their buddy Mike Phillips as they talk about console/portable/PC games, babies, and the meaning of life.',
    'https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/0e/55/26/0e55264d-699b-1652-560a-8737afc32799/source/170x170bb.jpg',
    'http://www.playeronepodcast.com/'
),
(
    'Its Super Effective',
    'Steve Black Jr.',
    'Gaming',
    322,
    'Its Super Effective is a Pokémon podcast that covers the Pokémon anime, the Pokémon movies, the video games (such as Pokémon: Lets Go Pikachu & Lets Go Eevee), Pokémon battling, Shiny Hunting, the Pokémon TCG, Pokémon GO and more! Its Super Effective is an award winning podcast, and one of the most downloaded Pokémon-based podcasts on the web. PKMNcast.com is dedicated to not only bringing exclusive, creative Pokémon content on the internet. To top that off, ISE is dedicated to bringing you weekly laughs and the best coverage of everything Pokémon.',
    'https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/78/e8/d6/78e8d6a5-799a-265c-c00c-26a96740782e/source/170x170bb.jpg',
    'https://www.pkmncast.com/'
),
(
    'Pokémon GO Podcast',
    'Giant Size Team Up',
    'Gaming',
    110,
    'Your weekly download on everything you need to know about the world of Pokemon Go! Pokémon Go is a free to play, location based augmented reality game developed and published by Niantic for iOS and Android devices. In the game, players use a mobile devices GPS capability to locate, capture, battle, and train virtual creatures, called Pokémon, who appear on the screen as if they were in the same real world location as the player.',
    'https://is5-ssl.mzstatic.com/image/thumb/Music62/v4/4e/b3/6a/4eb36ac9-0b4e-8a1e-4857-63eb4042cca1/source/170x170bb.jpg',
    'http://www.giantsizeteamup.com/pokemongopodcast/'
),
(
    'The Geekbox',
    'Geekbox Media',
    'Gaming',
    480,
    'Are you a geek? Do you like geeky stuff? Do you like listening to other geeks talk about geeky stuff? Join professional nerds Ryan Scott and Ryan Higgins as they sound off on the latest happenings in the worlds of gaming, film, television, and comics.',
    'https://is4-ssl.mzstatic.com/image/thumb/Music62/v4/67/bd/06/67bd0659-9c72-deac-7094-84ec39066efc/source/170x170bb.jpg',
    'http://www.geekbox.net/'
),
(
    'Anderson Cooper 360',
    'CNN',
    'Political',
    0000,
    'Anderson Cooper brings you highlights from CNNs premier nightly news program AC360.',
    'https://is5-ssl.mzstatic.com/image/thumb/Music60/v4/5e/9f/ca/5e9fca09-7636-5914-5f70-ec8d6a45237c/source/170x170bb.jpg',
    'http://discover.knit.audio/anderson-cooper-360/'
),
(
    'S Town',
    'Serial and This American Life',
    'True Crime',
    7,
    'From the same producers as Serial, S Town quickly became the podcast everyone was talking about. Its single season follows John, a man who despises his Alabama town and wants someone desperately to investigate the scion of a wealthy family whos been going around town saying he got away with murder.',   
    'https://pixel.nymag.com/imgs/daily/vulture/2018/07/25/true-crime-pod/s-town.w190.h190.2x.jpg',
    'https://stownpodcast.org/'
),
(
    'Missing & Murdered: Finding Cleo',
    'Serial and This American Life',
    'True Crime',
    20,
    'Where is Cleo? Taken by child welfare workers in the 1970’s and adopted in the U.S., the young Cree girl’s family believes she was raped and murdered while hitchhiking back home to Saskatchewan. CBC news investigative reporter Connie Walker joins the search to find out what really happened to Cleo.',    
    'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/fe/d1/56/fed1566d-a21e-49b1-0d33-6159f041cad0/source/600x600bb.jpg',
    'http://www.cbc.ca/radio/podcasts/missing-murdered-who-killed-alberta-williams/'
),
(
    'Dirty John',
    'L.A. Times, Wondery',
    'True Crime',
    7,
    'Debra Newell is a successful interior designer. She meets John Meehan, a handsome man who seems to check all the boxes: attentive, available, just back from a year in Iraq with Doctors Without Borders. But her family doesn’t like John, and they get entangled in an increasingly complex web of love, deception, forgiveness, denial, and ultimately, survival. Reported and hosted by Christopher Goffard from the L.A. Times.',
    'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/ce/3d/b4/ce3db4c8-86ba-29ca-8cb0-4cd68388efeb/source/600x600bb.jpg',
    'https://wondery.com/shows/dirty-john/'
),
(
    'My Favorite Murder',
    'Karen Kilgariff and Georgia Hardstark',
    'True Crime',
    135,
    'Lifelong fans of true crime stories Karen Kilgariff and Georgia Hardstark tell each other their favorite tales of murder and hear hometown crime stories from friends and fans.',    
    'https://is1-ssl.mzstatic.com/image/thumb/Music62/v4/9f/d0/04/9fd00476-5dcf-5215-5a36-2e86e974ee4f/source/600x600bb.jpg',
    'https://www.myfavoritemurder.com/'
),
(
    'Inappropriate Earl',
    'Inappropriate Earl',
    'Comedy',
    235,
    'Inappropriate Earl is a podcast done by LA Stand Up Comic Earl Skakel where he interviews comics,musicians and any/all things of his favorite decade the 80s!!',   
    'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/a5/b7/d0/a5b7d01e-77de-c225-afd9-d782bdae7993/source/600x600bb.jpg',
    'https://soundcloud.com/inappropriate-earl'
),
(
    'The Apex & The Abyss',
    'The Apex & The Abyss',
    'Horror',
    34,
    'Inappropriate Earl is a podcast done by LA Stand Up Comic Earl Skakel where he interviews comics,musicians and any/all things of his favorite decade the 80s!!',   
    'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/ed/6e/a1/ed6ea169-4880-1521-6b76-43af3c1c469b/source/600x600bb.jpg',    
    'https://www.acast.com/theapextheabyss'
),
(
    'The Art of Manliness',
    'The Art of Manliness',
    'General',
    434,
    'Dr. Drew Pinsky, board certified internist and addiction medicine specialist, takes listener calls and talks to experts on a variety of topics relating to health, relationships, sex and drug addiction.',
    'https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/be/51/4c/be514cb2-fb60-c8e5-6fff-c2d5206061f1/source/170x170bb.jpg',
    'https://www.artofmanliness.com/'
),
(
    'The Dr. Drew Podcast',
    'PodcastOne / Carolla Digital',
    'General',
    341,
    'Dr. Drew Pinsky, board certified internist and addiction medicine specialist, takes listener calls and talks to experts on a variety of topics relating to health, relationships, sex and drug addiction.',    
    'https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/be/51/4c/be514cb2-fb60-c8e5-6fff-c2d5206061f1/source/170x170bb.jpg',
    'https://www.artofmanliness.com/'
),
(
    'RadioLab',
    'WNYC',
    'General',
    0000,
    'Radiolab is a radio program broadcast on public radio stations in the United States produced by WNYC. Hosted by Jad Abumrad and Robert Krulwich, each hour-long show focuses on a topic of a scientific and philosophical nature, through stories, interviews, and thought experiments.',
    'https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/WNYC_Radiolab_logo.svg/1200px-WNYC_Radiolab_logo.svg.png',
    'https://www.wnycstudios.org/shows/radiolab'
),
(
    'Syntax',
    'WNYC',
    'General',
    000,
    'Full Stack Developers Wes Bos and Scott Tolinski dive deep into web development topics, explaining how they work and talking about their own experiences. They cover from JavaScript frameworks like React, to the latest advancements in CSS to simplifying web tooling.',    'https://syntax.fm/'
    'https://is1-ssl.mzstatic.com/image/thumb/Music117/v4/40/e5/ef/40e5ef3c-f5b9-20df-14cc-e5c38d50a8da/source/600x600bb.jpg',
    'https://syntax.fm/'
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
),
(
'ctinmke',
'This podcast is one of the best Ive ever heard. I havent played in ages, but I sure wish I still had my GBA.;',
11
),
(
'Wartortle_is_the_best',
'ISE is a great show filled with fun conversation and great interlude music. thanks for giving us accurate and very up to date news on our favorite franchise!',
11
),
(
'BROWNDogg',
'Listening to 316 and oh man After grinding months to get my first Dratini, I finally got one on July 2nd from FR and during CD (Squirtle) I get three dratini from 10K eggs. I feel you.',
11
),
(
'Merich Ayrd',
'The production quality is quite good and the hosts have good chemistry. This is the first Pokémon Go podcast available and they have hit it out of the park. Im eager to see how the show evolves when the game is released.',
12
),
(
'Ducks man',
'If youre excited for Pokémon go this is the best podcast for you and the guys are very safe for cycle on giving you the information',
12
),
(
'Shodan13',
'Keeping the GFW spirit alive! A must listen.',
13
),
(
'Javipou',
'What Anderson Cooper from CNN is doing under these daily podcast should be an example to the rest of News Companies. More than 30 minutes of news, with a perfect structure of news and all in a perfect time. Great videos, sounds and voices quality, no background noise defect, no podcast streaming stop problem. I really appreciate your contribution to the whole world society.',
14
),
(
'Boston Donald',
'Donald Trump would tell you that you are fired.',
14
),
(
'Boston Donald',
'Donald Trump would tell you that you are fired.',
15
),
(
'MariLorin',
'I couldnt put this podcast down. This story made me laugh, cry and get frustrated at times. The places this podcast goes I wouldve never expected and I am so glad that I listed to it. I think Brian Reed does an amazing job of telling all sides of this amazing story and really does a justice for John.',
15
),
(
'rollercoaster',
'Its a little slow at first like riding up a rollercoaster before youre dropped into winding curves and short dips that you didnt expect. Great podcast at the right time. I wish it was longer.',
15
),
(
'DD418',
'I binged listen to this podcast in one day. So good, I couldnt stop. Great story teller and good story to tell. Wish there were a few more episodes to tell us what happened to Tyler.',
15
),
(
'11018',
'Truly, Missing and Murdered is one of the best podcasts Iâve ever listened too. The stories are told with such sensitivity and understanding, you feel as though youâre a part of the story.',
16
),
(
'GiocondaTheSnake',
'This podcast is incredible. I really appreciate the fact that the crime related storylines are contextualized by details about the treatment of indigenous people by the Canadian government. But the most remarkable aspect of the show is that Connie herself is an indigenous woman. Thank you so much for your work and coverage of these deeply important issuesâ I only wish there were more instances of work like this.',
16
),
(
'brendaa_009',
'This show was heartbreaking and I learned so much. I recommend it to everyone I meet.',
16
),
(
'James23456',
'Really hard to listen to. I have listened to most true crime podcasts and this is one of the worst. Unbelievably frustrating as it doesnt go anywhere for long periods. Asks the same boring questions.',
16
),
(
'LeenyLyn',
'Did I miss something? Maybe I didnt pay close enough attention but Ep.1 ended with Cleos suicide with her adopted fathers gun didnt it? Ep 2 is talking about finding her body on the side of the road. Im confused. What am I not getting?',
16
),
(
'crobss',
'Wow. What a story.',
17
),
(
'Pama Lama Ding Dong',
'Cautionary tale and a real âpage turnerâ - if you liked Serial, youâd like this.',
17
),
(
'Hhhhhhtf',
'Started out interesting but listening to dim witted Debbie and Terra wore thin quickly.',
17
),
(
'db2082',
'I swear to baby Jesus...... this is a great story, but it was quiet obvious there would be women with men issues since they are all BABY TALKERS!!!! Omg grow up and TALK LIKE AN ADULT! Iâm madder at these women (on episode 1) than the dude that is obviously a scammer.',
17
),
(
'grapehubbabubba',
'You just have to listen and listen and listen.....',
17
),
(
'CatDarcy',
'I wanted to love this podcast, as it was recommended to me by a friend, but I just want more of the good stuff! The meat and potatoes of the podcast is good, however there is so much rambling before and in between. I think it should be mentioned that the first episode I listened to was one I randomly selected and I did not start from the beginning. Perhaps if I started from the beginning I wouldnât feel so lost. I found myself either skipping past the rambling or tuning out and missing parts that I really wanted to hear. This could be so great if the episodes were better prepared.',
18
),
(
'LL46',
'I just discovered this podcast after almost three years of episodes, so I feel late to the party. I was hooked from the first five minutes of episode 1. These ladies interest in murder cases is relatable and their humor while talking about the cases is the end all, be all. I have ended up in tears a few times from laughing so hard. Karen and Georgia are like the best friends we all need and hope for. You will not regret investing your time with this podcast. Excellent job. Byeeeeeee!',
18
),
(
'amcgovea',
'They ramble on about their own opinions and theories. They laugh at murders which is horrible. Not a fan at all.',
18
),
(
'Haw-Al',
'The Inappropriate Earl podcast has entertained me for hours, made me laugh out loud, and inspired countless google/you tube searches. The Tommy Morris interviews are still my favorite episodes. Whether the interview leads to comedy, movies, rockânâroll, or wrestling, Inappropriate Earl is always a 5-Star listen.',
19
),
(
'Annoyedhockeyplayer',
'Had the chance to meet Earl at The Comedy Store a couple weeks back. One of the easiest people to talk to. Thanks for all that you do Earl. Love the show and loved your set!',
19
),
(
'Annoyedhockeyplayer',
'Im not kidding if you are not listening, you are missing out! SO GOOD!!! I just hangh out waiting for the next episode.',
20
),
(
'Bossypants16',
'Erika is amazing! This show is spectacular & you can really tell how much she cares about her content. I love the addition of the chasm series! Please never leave!!',
20
),
(
'MartinJNash',
'If this podcast lives up to the quality of the AOM blog, which Im sure it will, we men are in for a serious treat!',
21
),
(
'This Nickname is taken, please choose another......',
'Fun listen, cool topics and great guests. Keep up the great work!',
21
),
(
'doober499',
'I look forward to listen to this podcast Drew knows a lot about addiction and is very informative! You cant go wrong! To bad I cant see him do the puppy face expression over audio',
22
),
(
'Pelorian',
'They always venture into new and surprising territory.',
23
),
(
'DAHLEMEG',
'I love this show. I think I quote some fact or story from it daily. Iâve listened to every episode, even the archived, and many of them multiple times. Itâs the gold medal of podcasts. Every topic different, interesting, and perfectly put into a one hour story. Thank you to everyone who works on this show. You have opened my eyes to subjects and passions I never knew existed.',
23
),
(
'Pdxashley',
'I think this show is great for your drive in to work. I like the conversational format. Kind of like morning radio for front-end folks. It doesnât go so deep that you need to be at your computer to get full value. It definitely gets my geek going for the day ahead.',
24
);

