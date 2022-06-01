insert into "tags" ("label")
     values ('bouldering'),
            ('toprope'),
            ('lead');

insert into "user" ("userName","userDescription", "imageUrl")
     values ('Nana and Popo', 'ice climbers', 'image-iceclimbers.jpeg'),
            ('Geodude', 'used rockclimb, it was super effective!', 'image-geodude.jpeg'),
            ('Fish', 'hmmm', 'image-fish.jpeg'),
            ('Cat', 'YAMERO', 'image-cat.jpeg');

insert into "skillLevels" ("label")
     values ('beginner'),
            ('intermediate'),
            ('advanced');

insert into "userTags" ("userId", "tagId")
     values ('1','1'),
            ('1','2'),
            ('2','1'),
            ('2','3'),
            ('3','2'),
            ('4','2'),
            ('4','3');
